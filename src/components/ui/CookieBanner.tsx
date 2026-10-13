"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "godrex_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "essential-only");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-label="Cookie consent" className="cookie-bar no-print">
      <div className="flex items-start gap-3">
        <Cookie size={20} className="text-gold flex-shrink-0 mt-0.5" />
        <p className="text-sm text-navy dark:text-cream">
          We use cookies to improve your experience, analyse traffic, and personalise content.
          By clicking &quot;Accept All&quot; you consent to our use of cookies.{" "}
          <Link href="/legal/cookies" className="underline text-gold hover:text-gold-600">
            Cookie Policy
          </Link>
        </p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button onClick={decline} className="btn-outline btn-sm">
          Essential Only
        </button>
        <button onClick={accept} className="btn-gold btn-sm">
          Accept All
        </button>
      </div>
    </div>
  );
}
