import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../../components/ContactForm";
import { WhatsAppCta } from "../../components/WhatsAppCta";

export const metadata: Metadata = {
  title: "Contact BVU | Business Visual Upgrade",
  description: "Start a conversation about upgrading your business visual communication.",
};

export default function ContactPage() {
  return (
    <main className="subpage contact-page site-shell">
      <header className="subpage-header" data-section="contact-page"><Link className="back-link" href="/">← Back to BVU</Link><p className="eyebrow" data-reveal><span /> Start a conversation</p><h1 data-reveal data-delay="1">Let&apos;s upgrade <em>your business.</em></h1><p data-reveal data-delay="2">Whether you are building your foundation or ready for consistent visual support, tell us what your business needs next. We will help you find a clear, reliable way forward.</p></header>
      <section className="contact-layout" data-section="contact-layout">
        <ContactForm />
        <aside className="contact-aside" data-reveal data-delay="2"><p className="footer-label">Prefer a direct conversation?</p><h2>Start with the story behind the business.</h2><WhatsAppCta /></aside>
      </section>
    </main>
  );
}
