import Link from "next/link";
import {
  SITE_NAME, REGULATORY, CONTACT_EMAIL, CONTACT_PHONE, RISK_WARNING
} from "@/lib/constants";
import {
  Twitter, Linkedin, Facebook, Youtube, Instagram,
  Mail, Phone, MapPin, Shield
} from "lucide-react";

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
  { icon: Twitter,   href: "#", label: "Twitter/X" },
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Facebook,  href: "#", label: "Facebook" },
  { icon: Youtube,   href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const year = new Date().getFullYear();
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
