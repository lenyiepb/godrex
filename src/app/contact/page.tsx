"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

const OFFICES = [
  { city: "Port Harcourt (HQ)", address: "12 Kate House, Alakahia", phone: "+234 810 041 9719", email: "support@godrexcapital.com" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to /api/contact endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* Header */}
      <section className="hero-bg grid-pattern pt-24 pb-20">
        <div className="section-container text-center max-w-2xl">
          <div className="badge-gold inline-flex mb-4">Contact & Support</div>
          <h1 className="section-heading text-cream mb-4">We&apos;re Here to Help</h1>
          <p className="section-sub text-navy-200 mx-auto">
            Our multilingual support team is available 24/5. Reach us by chat, email, or phone.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream dark:bg-navy">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy dark:text-cream mb-6">Send us a Message</h2>
              {submitted ? (
                <div className="card p-10 text-center">
                  <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-navy dark:text-cream mb-2">Message Sent!</h3>
                  <p className="text-sm text-navy-400 dark:text-navy-300">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy dark:text-cream mb-1.5">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="input"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy dark:text-cream mb-1.5">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy dark:text-cream mb-1.5">Subject</label>
                    <select
                      id="subject"
                      className="input"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                    >
                      <option value="">Select a topic...</option>
                      <option value="account">Account & Registration</option>
                      <option value="deposits">Deposits & Withdrawals</option>
                      <option value="trading">Trading Questions</option>
                      <option value="platform">Platform Support</option>
                      <option value="kyc">KYC & Verification</option>
                      <option value="compliance">Compliance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy dark:text-cream mb-1.5">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="input resize-none"
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold btn-md w-full disabled:opacity-70"
                  >
                    {loading ? "Sending..." : <>Send Message <Send size={16} /></>}
                  </button>
                  <p className="text-xs text-navy-400 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="/legal/privacy" className="text-gold hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>

            {/* Info column */}
            <div className="space-y-8">
              {/* Live chat placeholder */}
              <div className="card p-6 border-l-gold">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle size={20} className="text-gold" />
                  <h3 className="font-semibold text-navy dark:text-cream">Live Chat</h3>
                  <span className="badge-green text-xs">Available</span>
                </div>
                <p className="text-sm text-navy-400 dark:text-navy-300 mb-4">
                  Our support team is online Monday–Friday 00:00–22:00 GMT and Saturday 08:00–17:00 GMT.
                </p>
                <button className="btn-gold btn-sm">
                  Start Live Chat
                </button>
              </div>

              {/* Support hours */}
              <div className="card p-6">
                <h3 className="font-semibold text-navy dark:text-cream mb-4">Support Hours</h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["Monday – Friday", "00:00 – 22:00 GMT"],
                    ["Saturday", "08:00 – 17:00 GMT"],
                    ["Sunday", "Closed (emergency only)"],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-navy-400 dark:text-navy-300">{day}</span>
                      <span className="font-medium text-navy dark:text-cream">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offices */}
              <div>
                <h3 className="font-semibold text-navy dark:text-cream mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {OFFICES.map(({ city, address, phone, email }) => (
                    <div key={city} className="card p-5">
                      <div className="font-semibold text-gold text-sm mb-2">{city}</div>
                      <div className="space-y-1.5 text-sm text-navy-400 dark:text-navy-300">
                        <div className="flex items-start gap-2">
                          <MapPin size={13} className="flex-shrink-0 mt-0.5 text-gold" />
                          <span>{address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={13} className="text-gold" />
                          <a href={`tel:${phone}`} className="hover:text-gold transition-colors">{phone}</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={13} className="text-gold" />
                          <a href={`mailto:${email}`} className="hover:text-gold transition-colors">{email}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
