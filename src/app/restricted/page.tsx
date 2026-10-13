import type { Metadata } from "next";
import { AlertTriangle, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Region Not Available",
  description: "Godrex Capital services are not available in your region.",
  robots: { index: false, follow: false },
};

export default function RestrictedPage() {
  return (
    <div className="min-h-screen hero-bg grid-pattern flex items-center justify-center p-4">
      <div className="glass rounded-2xl p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
          <Globe size={32} className="text-amber-400" />
        </div>
        <h1 className="font-display text-2xl font-semibold text-cream mb-3">
          Service Not Available in Your Region
        </h1>
        <div className="flex items-start gap-3 bg-amber-950/40 border border-amber-800/30 rounded-xl p-4 mb-6 text-left">
          <AlertTriangle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-200 leading-relaxed">
            Due to regulatory requirements, Godrex Capital is currently unable to provide services to residents of your country. This restriction is in place to comply with applicable financial regulations.
          </p>
        </div>
        <p className="text-sm text-navy-300 mb-6">
          If you believe this is an error, or if you are accessing the site via a VPN, please contact our support team.
        </p>
        <div className="flex gap-3 flex-col">
          <Link href="/contact" className="btn-gold btn-md w-full">
            Contact Support
          </Link>
          <Link href="/" className="btn-ghost btn-md w-full">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
