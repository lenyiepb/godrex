# Godrex Capital

An institutional-grade, multi-asset trading platform interface built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

---

## Tech Stack

* **Framework:** Next.js 16 (App Router with Turbopack)
* **Frontend:** React 19, TypeScript, Tailwind CSS v4, Lucide Icons, `next-themes`
* **Database & ORM:** PostgreSQL & Prisma ORM (`prisma/schema.prisma`)
* **Security & Auth:** Session management, TOTP 2FA, AES-256 field encryption, jurisdiction/GeoIP middleware
* **Integrations:** Twelve Data (Market Quotes), Stripe (Payments), Supabase (KYC Document Storage), Resend (Transactional Email)

---

## Getting Started

### 1. Prerequisites
* Node.js 20+ installed
* npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local` and populate the required configuration values:
```bash
cp .env.example .env.local
```
> **Security Note:** Never commit `.env` or `.env.local` files to version control. All production secrets and credentials must remain in environment variables.

### 4. Database Setup (Prisma)
To generate the Prisma client and run migrations:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Building for Production
```bash
npm run build
npm start
```

---

## Project Structure

```
├── prisma/               # Prisma schema and database models
├── public/               # Static assets and icons
├── src/
│   ├── app/              # Next.js App Router (pages and API endpoints)
│   │   ├── (auth)/       # Portal & authentication routes
│   │   ├── api/          # Secure serverless API endpoints
│   │   ├── legal/        # Legal, compliance, and risk disclosures
│   │   └── markets/      # Multi-asset pricing and quote pages
│   ├── components/       # Reusable React components
│   │   ├── layout/       # Navbar, Footer, and responsive wrappers
│   │   ├── providers/    # Theme and context providers
│   │   └── ui/           # Tickers, banners, and modals
│   ├── lib/              # Shared constants and utility functions
│   └── middleware.ts     # Edge security and jurisdiction blocking
└── .env.example          # Environment variable template
```

---

## Security & Compliance

* **Zero-Trust Input Validation:** All API endpoints validate, sanitize, and strictly type request parameters before processing.
* **Jurisdiction Filtering:** Edge middleware automatically evaluates incoming requests to enforce compliance with restricted jurisdictions.
* **Data Isolation:** User credentials and PII are encrypted or hashed; identity documents are stored in protected private storage.
