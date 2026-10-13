import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RESTRICTED_COUNTRIES } from "@/lib/constants";

/**
 * Middleware — runs on every request.
 * Handles:
 *  1. Country-blocking for restricted jurisdictions (via CF-IPCountry header)
 *  2. Portal route protection (redirect unauthenticated users to login)
 *  3. Security headers on all responses
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 1. Country blocking ─────────────────────────────────────────────────────
  // Cloudflare sets CF-IPCountry; fall back to X-Vercel-IP-Country or skip
  const country =
    request.headers.get("cf-ipcountry") ??
    request.headers.get("x-vercel-ip-country") ??
    null;

  const isPortal   = pathname.startsWith("/portal");
  const isMarkets  = pathname.startsWith("/markets");
  const isTrading  = isPortal || isMarkets;

  if (isTrading && country && RESTRICTED_COUNTRIES.includes(country.toUpperCase())) {
    return NextResponse.redirect(new URL("/restricted", request.url));
  }

  // ── 2. Portal auth guard ────────────────────────────────────────────────────
  const protectedPaths = ["/portal/dashboard", "/portal/settings"];
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));

  if (isProtected) {
    const token =
      request.cookies.get("next-auth.session-token") ??
      request.cookies.get("__Secure-next-auth.session-token");

    if (!token) {
      const loginUrl = new URL("/portal/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // ── 3. Security headers ─────────────────────────────────────────────────────
  const response = NextResponse.next();

  response.headers.set("X-Content-Type-Options",    "nosniff");
  response.headers.set("X-Frame-Options",            "DENY");
  response.headers.set("X-XSS-Protection",           "1; mode=block");
  response.headers.set("Referrer-Policy",            "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy",         "camera=(), microphone=(), geolocation=()");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://api.twelvedata.com https://api.stripe.com",
      "frame-src https://js.stripe.com",
    ].join("; ")
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files and Next internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)",
  ],
};
