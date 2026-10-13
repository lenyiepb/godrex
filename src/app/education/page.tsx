import Link from "next/link";
import { BookOpen, Video, BookMarked, Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Hub",
  description: "Learn to trade with Godrex Capital. Articles, video guides, glossary, and live webinars for all experience levels.",
};

const ARTICLES = [
  { title: "Understanding Forex Spreads and How They Affect Your Trades",      tag: "Forex Basics",     readTime: "5 min", slug: "understanding-forex-spreads" },
  { title: "How to Use RSI and MACD Together for Better Entry Points",          tag: "Technical Analysis",readTime: "8 min", slug: "rsi-macd-strategy" },
  { title: "Risk Management: The 2% Rule Every Trader Should Follow",           tag: "Risk Management",  readTime: "6 min", slug: "two-percent-rule" },
  { title: "CFD vs. Spot Trading: Key Differences Explained",                   tag: "CFDs",             readTime: "7 min", slug: "cfd-vs-spot" },
  { title: "Introduction to Candlestick Patterns for Beginners",                tag: "Charting",         readTime: "10 min",slug: "candlestick-patterns" },
  { title: "How Central Bank Decisions Move Forex Markets",                     tag: "Fundamental Analysis", readTime: "9 min", slug: "central-banks-forex" },
];

const VIDEOS = [
  { title: "Getting Started: Opening Your First Trade",      duration: "12:34", level: "Beginner" },
  { title: "Platform Walkthrough: Web Trader Deep Dive",     duration: "18:20", level: "Beginner" },
  { title: "Advanced Order Types: Stops, Limits, and OCO",   duration: "15:45", level: "Intermediate" },
  { title: "Chart Patterns Every Trader Should Know",        duration: "22:10", level: "Intermediate" },
  { title: "Building a Systematic Trading Strategy",         duration: "28:55", level: "Advanced" },
  { title: "Economic Calendar Mastery",                      duration: "14:22", level: "Intermediate" },
];

const GLOSSARY_PREVIEW = [
  { term: "Pip", def: "The smallest unit of price movement in a currency pair. For most pairs, 1 pip = 0.0001." },
  { term: "Spread", def: "The difference between the bid (sell) and ask (buy) price of an instrument." },
  { term: "Margin", def: "The capital required to open and maintain a leveraged position." },
  { term: "Leverage", def: "A mechanism allowing traders to control a larger position with a smaller deposit." },
  { term: "Stop Loss", def: "An order to close a position at a pre-set price to limit potential losses." },
  { term: "CFD", def: "Contract for Difference — a derivative that allows trading price movements without owning the underlying asset." },
];

const WEBINARS = [
  { title: "Live Trading Session: EUR/USD Strategy",         date: "Oct 22, 2026", time: "14:00 GMT", host: "Senior Analyst",  seats: 120, enrolled: 87 },
  { title: "Fundamentals of Risk Management",                date: "Oct 28, 2026", time: "16:00 GMT", host: "Risk Specialist", seats: 80,  enrolled: 54 },
  { title: "Beginner's Guide to CFD Trading",               date: "Nov 5,  2026", time: "13:00 GMT", host: "Head of Education",seats: 200, enrolled: 143 },
  { title: "Advanced Chart Patterns Masterclass",           date: "Nov 12, 2026", time: "15:00 GMT", host: "Chief Analyst",   seats: 60,  enrolled: 41 },
];

const LEVEL_COLOR: Record<string, string> = {
  Beginner:     "badge-green",
  Intermediate: "badge-gold",
  Advanced:     "badge bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export default function EducationPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-bg grid-pattern pt-24 pb-20">
        <div className="section-container text-center max-w-2xl">
          <div className="badge-gold inline-flex mb-4">Education Hub</div>
          <h1 className="section-heading text-cream mb-4">Knowledge is Your Edge</h1>
          <p className="section-sub text-navy-200 mx-auto">
            Free educational resources for traders at every level — from your first trade to advanced strategy.
          </p>
        </div>
      </section>

      {/* Nav cards */}
      <section className="py-12 bg-navy-900 dark:bg-[#060D19] border-b border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: BookOpen,   label: "Articles",  href: "#articles",  count: "60+" },
              { icon: Video,      label: "Videos",    href: "#videos",    count: "40+" },
              { icon: BookMarked, label: "Glossary",  href: "#glossary",  count: "200+ terms" },
              { icon: Calendar,   label: "Webinars",  href: "#webinars",  count: "Monthly" },
            ].map(({ icon: Icon, label, href, count }) => (
              <a
                key={label}
                href={href}
                className="glass rounded-xl p-5 flex flex-col items-center gap-2 hover:border-gold/40 transition-all group"
              >
                <Icon size={24} className="text-gold group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-cream">{label}</span>
                <span className="text-xs text-navy-400">{count}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 bg-cream dark:bg-navy space-y-24">
        {/* ── Articles ── */}
        <section id="articles" className="section-container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-heading text-navy dark:text-cream">Articles</h2>
              <p className="text-sm text-navy-400 dark:text-navy-300 mt-1">In-depth guides written by our analyst team</p>
            </div>
            <Link href="/education/articles" className="text-sm text-gold hover:underline flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map(({ title, tag, readTime, slug }) => (
              <Link
                key={slug}
                href={`/education/articles/${slug}`}
                className="card p-6 flex flex-col hover:-translate-y-1 hover:shadow-glow transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-gold text-xs">{tag}</span>
                  <span className="flex items-center gap-1 text-xs text-navy-400">
                    <Clock size={10} /> {readTime} read
                  </span>
                </div>
                <h3 className="font-sans text-sm font-semibold text-navy dark:text-cream leading-snug mb-auto">
                  {title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Videos ── */}
        <section id="videos" className="bg-navy-900 dark:bg-[#060D19] py-16 -mx-0 rounded-none">
          <div className="section-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="section-heading text-cream">Video Guides</h2>
                <p className="text-sm text-navy-300 mt-1">Watch and learn at your own pace</p>
              </div>
              <Link href="/education/videos" className="text-sm text-gold hover:underline flex items-center gap-1">
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIDEOS.map(({ title, duration, level }) => (
                <div
                  key={title}
                  className="glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all cursor-pointer group"
                >
                  {/* Thumbnail placeholder */}
                  <div className="h-36 bg-navy-800 flex items-center justify-center relative">
                    <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                      <Video size={24} className="text-gold" />
                    </div>
                    <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded">
                      {duration}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className={`${LEVEL_COLOR[level]} mb-2`}>{level}</span>
                    <h3 className="text-sm font-semibold text-cream mt-2">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Glossary ── */}
        <section id="glossary" className="section-container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-heading text-navy dark:text-cream">Trading Glossary</h2>
              <p className="text-sm text-navy-400 mt-1">200+ terms defined clearly</p>
            </div>
            <Link href="/education/glossary" className="text-sm text-gold hover:underline flex items-center gap-1">
              Full glossary <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {GLOSSARY_PREVIEW.map(({ term, def }) => (
              <div key={term} className="card p-5 border-l-gold">
                <div className="font-semibold text-navy dark:text-cream mb-1">{term}</div>
                <p className="text-sm text-navy-400 dark:text-navy-300 leading-relaxed">{def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Webinars ── */}
        <section id="webinars" className="section-container">
          <div className="mb-8">
            <h2 className="section-heading text-navy dark:text-cream">Upcoming Webinars</h2>
            <p className="text-sm text-navy-400 mt-1">Live sessions with our analysts — register for free</p>
          </div>
          <div className="space-y-4">
            {WEBINARS.map(({ title, date, time, host, seats, enrolled }) => {
              const pct = Math.round((enrolled / seats) * 100);
              return (
                <div key={title} className="card p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 items-center mb-1">
                      <Calendar size={14} className="text-gold" />
                      <span className="text-xs text-navy-400">{date} · {time}</span>
                      <span className="text-xs text-navy-400">· Hosted by: {host}</span>
                    </div>
                    <h3 className="font-semibold text-navy dark:text-cream">{title}</h3>
                  </div>
                  <div className="flex flex-col gap-2 min-w-[160px]">
                    <div className="flex justify-between text-xs text-navy-400">
                      <span>{enrolled} registered</span>
                      <span>{seats} seats</span>
                    </div>
                    <div className="h-1.5 bg-navy-100 dark:bg-navy-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <button className="btn-gold btn-sm w-full">Register Free</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
