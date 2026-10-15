import Link from "next/link";
import {
  SITE_NAME, REGULATORY, CONTACT_EMAIL, CONTACT_PHONE, RISK_WARNING
} from "@/lib/constants";
import { Mail, Phone, MapPin, Shield } from "lucide-react";

function TwitterIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
    </svg>
  );
}

function YoutubeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81zM9.75 15.02V8.98l5.5 3.02-5.5 3.02z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const footerLinks = {
  Trading: [
    { label: "Markets", href: "/markets" },
    { label: "Trading Platforms", href: "/platforms" },
    { label: "Account Types", href: "/account-types" },
    { label: "Pricing & Fees", href: "/pricing" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Education: [
    { label: "Learning Hub", href: "/education" },
    { label: "Articles", href: "/education/articles" },
    { label: "Video Guides", href: "/education/videos" },
    { label: "Glossary", href: "/education/glossary" },
    { label: "Webinars", href: "/education/webinars" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Risk Disclosure", href: "/legal/risk-disclosure" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "AML/KYC Policy", href: "/legal/aml-kyc" },
  ],
};

const socials = [
  { icon: TwitterIcon,   href: "#", label: "Twitter/X" },
  { icon: LinkedinIcon,  href: "#", label: "LinkedIn" },
  { icon: FacebookIcon,  href: "#", label: "Facebook" },
  { icon: YoutubeIcon,   href: "#", label: "YouTube" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-navy-900 dark:bg-[#060D19] text-navy-200 border-t border-white/5">
      {/* Main footer */}
      <div className="section-container py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Brand column */}
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-navy-900 text-base">G</span>
            </div>
            <span className="font-display font-semibold text-cream">{SITE_NAME}</span>
          </Link>
          <p className="text-sm text-navy-300 leading-relaxed max-w-xs mb-5">
            A premium online brokerage delivering fast execution, competitive
            spreads, and bank-grade security across 500+ instruments.
          </p>
          {/* Contact */}
          <ul className="space-y-2 text-sm mb-5">
            <li className="flex items-center gap-2 text-navy-300">
              <Mail size={14} className="text-gold flex-shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2 text-navy-300">
              <Phone size={14} className="text-gold flex-shrink-0" />
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                {CONTACT_PHONE}
              </a>
            </li>
            <li className="flex items-start gap-2 text-navy-300">
              <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
              <span>{REGULATORY.address}</span>
            </li>
          </ul>
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-navy-300 hover:text-gold hover:border-gold/40 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">
              {heading}
            </h3>
            <ul className="space-y-2">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-navy-300 hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Regulatory info */}
      <div className="border-t border-white/5">
        <div className="section-container py-6">
          <div className="flex items-start gap-3 mb-4">
            <Shield size={16} className="text-gold flex-shrink-0 mt-0.5" />
            <div className="text-xs text-navy-400 leading-relaxed">
              <span className="font-semibold text-navy-300">{REGULATORY.entityName}</span>
              {" "}· Registered: {REGULATORY.registrationNumber}
              {" "}· Licensed by: {REGULATORY.licenseBody} · License: {REGULATORY.licenseNumber}
              {" "}· Registered address: {REGULATORY.address}
            </div>
          </div>
          <p className="text-xs text-navy-400 leading-relaxed mb-4 border-l-2 border-gold/40 pl-3">
            ⚠️ {RISK_WARNING}
          </p>
          <p className="text-xs text-navy-500">
            CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
            You should consider whether you understand how CFDs work and whether you can afford to take the
            high risk of losing your money. Godrex Capital services are not available to residents of certain
            jurisdictions including the United States.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-500">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-navy-500">
            <Link href="/legal/terms"   className="hover:text-gold transition-colors">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/legal/cookies" className="hover:text-gold transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
