// src/app/api/contact/route.ts
// Handles contact form submissions — validates input, prevents injection,
// sends internal email notification via Resend.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_SUBJECTS = new Set([
  "account", "deposits", "trading", "platform", "kyc", "compliance", "other"
]);

interface ContactPayload {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json() as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  // ── Validation ────────────────────────────────────────────────────────────
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 422 });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  if (!ALLOWED_SUBJECTS.has(subject.toLowerCase())) {
    return NextResponse.json({ error: "Invalid subject." }, { status: 422 });
  }

  // ── Send email via Resend ─────────────────────────────────────────────────
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error("[/api/contact] RESEND_API_KEY not configured");
    return NextResponse.json({ error: "Email service unavailable." }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method:  "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:  `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from:    process.env.EMAIL_FROM ?? "noreply@godrexcapital.com",
        to:      ["support@godrexcapital.com"],
        subject: `[Contact Form] ${subject} — ${sanitize(name)}`,
        text: [
          `Name:    ${sanitize(name)}`,
          `Email:   ${sanitize(email)}`,
          `Subject: ${subject}`,
          `---`,
          sanitize(message),
        ].join("\n"),
      }),
    });

    if (!res.ok) throw new Error(`Resend error ${res.status}`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 502 }
    );
  }
}
