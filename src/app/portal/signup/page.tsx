"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Check, Upload, ArrowRight, ArrowLeft, Shield } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
type Step = 1 | 2 | 3 | 4;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
  dob: string;
  address: string;
  city: string;
  postcode: string;
  idType: string;
  idFront: File | null;
  idBack: File | null;
  proofOfAddress: File | null;
  agreeTerms: boolean;
  agreeMarketing: boolean;
}

const COUNTRIES = [
  "United Kingdom", "Germany", "France", "Spain", "Italy", "Netherlands",
  "Belgium", "Sweden", "Norway", "Denmark", "Finland", "Austria", "Switzerland",
  "Australia", "Canada", "Singapore", "UAE", "South Africa", "Other",
];

const RESTRICTED = ["United States", "Iran", "North Korea", "Cuba", "Syria"];

const STEPS: { label: string; desc: string }[] = [
  { label: "Personal Info",  desc: "Basic details" },
  { label: "Address",        desc: "Your location" },
  { label: "KYC Upload",     desc: "Identity verification" },
  { label: "Review",         desc: "Confirm & submit" },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [showPw, setShowPw] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "", country: "",
    password: "", confirmPassword: "", dob: "", address: "", city: "",
    postcode: "", idType: "passport", idFront: null, idBack: null,
    proofOfAddress: null, agreeTerms: false, agreeMarketing: false,
  });

  const set = (field: keyof FormData, value: string | boolean | File | null) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const isRestricted = RESTRICTED.some(
    (c) => form.country.toLowerCase() === c.toLowerCase()
  );

  const handleSubmit = async () => {
    setLoading(true);
    // TODO: wire to /api/auth/register
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen hero-bg grid-pattern flex items-center justify-center p-4 pt-20">
        <div className="card max-w-md w-full p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-emerald-400" />
          </div>
          <h1 className="font-display text-2xl font-semibold text-navy dark:text-cream mb-3">
            Application Submitted!
          </h1>
          <p className="text-sm text-navy-400 dark:text-navy-300 mb-6">
            Thank you for applying to Godrex Capital. We&apos;ve sent a verification email to{" "}
            <strong className="text-navy dark:text-cream">{form.email}</strong>.
            Our KYC team will review your documents within 1–2 business days.
          </p>
          <Link href="/portal/login" className="btn-gold btn-md w-full block text-center">
            Go to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-bg grid-pattern flex flex-col items-center justify-center p-4 pt-24 pb-16">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-navy-900 text-lg">G</span>
            </div>
            <span className="font-display font-semibold text-lg text-cream">Godrex Capital</span>
          </Link>
          <h1 className="font-display text-3xl font-semibold text-cream mb-2">Open Your Account</h1>
          <p className="text-navy-300 text-sm">Already have an account?{" "}
            <Link href="/portal/login" className="text-gold hover:underline">Sign In</Link>
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8 px-2">
          {STEPS.map(({ label }, i) => {
            const s = (i + 1) as Step;
            const done = step > s;
            const active = step === s;
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className={`flex flex-col items-center gap-1 ${active ? "opacity-100" : done ? "opacity-80" : "opacity-40"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    done   ? "bg-emerald-500 text-white" :
                    active ? "bg-gold text-navy-900" :
                             "bg-white/10 text-navy-300"
                  }`}>
                    {done ? <Check size={14} /> : s}
                  </div>
                  <span className="text-xs text-navy-300 hidden sm:block">{label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-px mx-2 transition-all ${done ? "bg-emerald-500/50" : "bg-white/10"}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Card */}
        <div className="glass rounded-2xl p-8">
          {/* ── Step 1: Personal ── */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-cream text-lg mb-2">Personal Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-navy-300 mb-1.5">First Name *</label>
                  <input className="input" placeholder="John" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy-300 mb-1.5">Last Name *</label>
                  <input className="input" placeholder="Smith" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-navy-300 mb-1.5">Email Address *</label>
                <input className="input" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} required />
              </div>
              <div>
                <label className="block text-xs font-medium text-navy-300 mb-1.5">Phone Number *</label>
                <input className="input" type="tel" placeholder="+44 7700 000000" value={form.phone} onChange={(e) => set("phone", e.target.value)} required />
              </div>
              <div>
                <label className="block text-xs font-medium text-navy-300 mb-1.5">Country of Residence *</label>
                <select className="input" value={form.country} onChange={(e) => set("country", e.target.value)} required>
                  <option value="">Select country...</option>
                  {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                </select>
                {isRestricted && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    ⚠ Unfortunately, Godrex Capital does not currently accept clients from {form.country} due to regulatory restrictions.
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-navy-300 mb-1.5">Date of Birth *</label>
                <input className="input" type="date" value={form.dob} onChange={(e) => set("dob", e.target.value)} required />
              </div>
              <div>
                <label className="block text-xs font-medium text-navy-300 mb-1.5">Password *</label>
                <div className="relative">
                  <input
                    className="input pr-10"
                    type={showPw ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    value={form.password}
                    onChange={(e) => set("password", e.target.value)}
                    required
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400">
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-navy-300 mb-1.5">Confirm Password *</label>
                <input className="input" type="password" placeholder="Repeat password" value={form.confirmPassword} onChange={(e) => set("confirmPassword", e.target.value)} required />
                {form.password && form.confirmPassword && form.password !== form.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1">Passwords do not match</p>
                )}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={isRestricted || !form.firstName || !form.email || !form.country || form.password !== form.confirmPassword}
                className="btn-gold btn-md w-full disabled:opacity-40"
              >
                Continue <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* ── Step 2: Address ── */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-cream text-lg mb-2">Your Address</h2>
              <div>
                <label className="block text-xs font-medium text-navy-300 mb-1.5">Street Address *</label>
                <input className="input" placeholder="123 Example Street" value={form.address} onChange={(e) => set("address", e.target.value)} required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-navy-300 mb-1.5">City *</label>
                  <input className="input" placeholder="London" value={form.city} onChange={(e) => set("city", e.target.value)} required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-navy-300 mb-1.5">Postcode / ZIP *</label>
                  <input className="input" placeholder="EC2A 1AF" value={form.postcode} onChange={(e) => set("postcode", e.target.value)} required />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="btn-ghost btn-md flex-1">
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => setStep(3)} disabled={!form.address || !form.city} className="btn-gold btn-md flex-1 disabled:opacity-40">
                  Continue <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3: KYC ── */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-cream text-lg mb-2">Identity Verification (KYC)</h2>
              <div className="flex items-start gap-3 bg-blue-950/40 border border-blue-800/30 rounded-xl p-4">
                <Shield size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-200 leading-relaxed">
                  We are required by law to verify your identity. Your documents are encrypted in transit and stored securely. They will only be reviewed by our compliance team.
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium text-navy-300 mb-1.5">ID Document Type *</label>
                <select className="input" value={form.idType} onChange={(e) => set("idType", e.target.value)}>
                  <option value="passport">Passport</option>
                  <option value="driving_license">Driving Licence</option>
                  <option value="national_id">National ID Card</option>
                </select>
              </div>
              {[
                { key: "idFront" as const, label: "ID Document — Front *" },
                { key: "idBack"  as const, label: "ID Document — Back (if applicable)" },
                { key: "proofOfAddress" as const, label: "Proof of Address (utility bill/bank statement, max 3 months old) *" },
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="block text-xs font-medium text-navy-300 mb-1.5">{label}</label>
                  <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/20 rounded-xl p-6 cursor-pointer hover:border-gold/40 transition-colors">
                    <Upload size={20} className="text-navy-400" />
                    <span className="text-xs text-navy-300">
                      {form[key] ? (form[key] as File).name : "Click to upload (JPG, PNG, PDF — max 5MB)"}
                    </span>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="sr-only"
                      onChange={(e) => set(key, e.target.files?.[0] ?? null)}
                    />
                  </label>
                </div>
              ))}
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(2)} className="btn-ghost btn-md flex-1">
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => setStep(4)} disabled={!form.idFront || !form.proofOfAddress} className="btn-gold btn-md flex-1 disabled:opacity-40">
                  Continue <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ── Step 4: Review ── */}
          {step === 4 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-cream text-lg mb-2">Review & Submit</h2>
              <div className="space-y-2">
                {[
                  ["Name",    `${form.firstName} ${form.lastName}`],
                  ["Email",   form.email],
                  ["Phone",   form.phone],
                  ["Country", form.country],
                  ["Address", `${form.address}, ${form.city} ${form.postcode}`],
                  ["ID Type", form.idType.replace("_", " ")],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0">
                    <span className="text-navy-400">{k}</span>
                    <span className="text-cream font-medium">{v}</span>
                  </div>
                ))}
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded" checked={form.agreeTerms} onChange={(e) => set("agreeTerms", e.target.checked)} required />
                <span className="text-xs text-navy-300">
                  I agree to the{" "}
                  <Link href="/legal/terms" className="text-gold hover:underline" target="_blank">Terms of Service</Link>,{" "}
                  <Link href="/legal/privacy" className="text-gold hover:underline" target="_blank">Privacy Policy</Link>, and{" "}
                  <Link href="/legal/risk-disclosure" className="text-gold hover:underline" target="_blank">Risk Disclosure</Link>.
                  I confirm I am over 18 and a resident of {form.country}. *
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded" checked={form.agreeMarketing} onChange={(e) => set("agreeMarketing", e.target.checked)} />
                <span className="text-xs text-navy-300">
                  I agree to receive market updates and promotional emails. (Optional)
                </span>
              </label>
              <div className="flex gap-3">
                <button onClick={() => setStep(3)} className="btn-ghost btn-md flex-1">
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.agreeTerms || loading}
                  className="btn-gold btn-md flex-1 disabled:opacity-40"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
