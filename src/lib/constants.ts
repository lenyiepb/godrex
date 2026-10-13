// ─────────────────────────────────────────────────────────────────────────────
// Godrex Capital — Site-wide constants
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_NAME = "Godrex Capital";
export const SITE_TAGLINE = "Trade with Confidence. Grow with Purpose.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://godrexcapital.com";
export const CONTACT_EMAIL = "support@godrexcapital.com";
export const CONTACT_PHONE = "+44 20 0000 0000";

/** ⚠️  Placeholder — replace with verified regulatory details from your attorney */
export const REGULATORY = {
  entityName: "Godrex Capital Ltd",
  registrationNumber: "[PLACEHOLDER — insert company registration number]",
  licenseBody: "[PLACEHOLDER — e.g. FCA / CySEC / ASIC]",
  licenseNumber: "[PLACEHOLDER — insert verified license number]",
  address: "10 Finsbury Square, London, EC2A 1AF, United Kingdom",
};

export const RISK_WARNING =
  "Trading leveraged products such as Forex and CFDs carries a high level of risk and may not be suitable for all investors. You may lose more than your initial deposit. Ensure you fully understand the risks involved and seek independent advice if necessary. Past performance is not indicative of future results.";

export const RESTRICTED_COUNTRIES = [
  "US", // United States — SEC/FINRA jurisdiction
  "IR", // Iran
  "KP", // North Korea
  "CU", // Cuba
  "SY", // Syria
];

export const NAV_LINKS = [
  { label: "Markets", href: "/markets" },
  { label: "Platforms", href: "/platforms" },
  { label: "Account Types", href: "/account-types" },
  { label: "Pricing", href: "/pricing" },
  { label: "Education", href: "/education" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ACCOUNT_TYPES = [
  {
    name: "Standard",
    minDeposit: "$100",
    spread: "From 1.2 pips",
    leverage: "Up to 1:30",
    commission: "$0 / lot",
    support: "Email & Chat",
    color: "gold",
    popular: false,
  },
  {
    name: "Pro",
    minDeposit: "$2,500",
    spread: "From 0.6 pips",
    leverage: "Up to 1:100",
    commission: "$3.50 / lot",
    support: "Priority 24/5",
    color: "gold",
    popular: true,
  },
  {
    name: "VIP",
    minDeposit: "$25,000",
    spread: "From 0.0 pips",
    leverage: "Up to 1:200",
    commission: "$2.00 / lot",
    support: "Dedicated Manager",
    color: "gold",
    popular: false,
  },
] as const;

export const STATS = [
  { value: "150,000+", label: "Active Traders" },
  { value: "$2.4B+", label: "Daily Volume" },
  { value: "500+", label: "Instruments" },
  { value: "99.97%", label: "Uptime" },
  { value: "< 10ms", label: "Execution Speed" },
  { value: "24/5", label: "Support" },
];

export const WHY_GODREX = [
  {
    icon: "zap",
    title: "Ultra-Fast Execution",
    description:
      "Our infrastructure delivers sub-10ms order execution with no requotes, giving you the edge in fast-moving markets.",
  },
  {
    icon: "shield",
    title: "Segregated Client Funds",
    description:
      "Your funds are held in segregated accounts at top-tier banks, fully separate from company operational funds.",
  },
  {
    icon: "trending-down",
    title: "Tight Spreads & Low Fees",
    description:
      "Competitive spreads from 0.0 pips on major pairs with transparent, no-hidden-fee pricing structures.",
  },
  {
    icon: "headphones",
    title: "24/5 Expert Support",
    description:
      "Our multilingual support team is available around the clock during market hours via live chat, email, and phone.",
  },
];
