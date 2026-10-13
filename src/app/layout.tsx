import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { RiskWarning } from "@/components/ui/RiskWarning";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Godrex Capital — Trade with Confidence",
    template: "%s | Godrex Capital",
  },
  description:
    "Godrex Capital is a premium online brokerage offering Forex, Stocks, Indices, Commodities, and Crypto CFD trading with ultra-fast execution, tight spreads, and segregated client funds.",
  keywords: [
    "online broker", "forex trading", "CFD trading", "stocks", "crypto",
    "commodities", "trading platform", "Godrex Capital",
  ],
  authors: [{ name: "Godrex Capital" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://godrexcapital.com",
    siteName: "Godrex Capital",
    title: "Godrex Capital — Trade with Confidence",
    description:
      "Premium online trading with tight spreads, fast execution, and segregated funds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Godrex Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Godrex Capital — Trade with Confidence",
    description: "Premium online trading with tight spreads and fast execution.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#0A1628" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFF" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <RiskWarning />
            <Footer />
          </div>
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
