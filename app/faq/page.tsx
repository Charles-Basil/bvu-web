import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | BVU",
  description: "Common questions about Business Visual Upgrade.",
};

const questions = [
  ["What does a brand audit include?", "A brand audit looks at how your business currently presents itself across its visual touchpoints. It helps identify what is clear, what is inconsistent and what needs to improve next."],
  ["Which BVU track is right for my business?", "Launch is designed for a business building or strengthening its visual foundation. Retainer is for businesses that need reliable, ongoing visual support after that foundation is in place."],
  ["How does the Enterprise / Ajo model work?", "Five businesses share one BVU slot, contributing approximately ₦12,000 each per month into a shared pool of approximately ₦60,000. It is a structured way to make professional branding support more accessible."],
  ["Can BVU support an existing brand?", "Yes. BVU can begin with an audit to understand what is already working, what needs structure and where visual communication can better support the business."],
];

export default function FaqPage() {
  return (
    <main className="subpage site-shell">
      <header className="subpage-header"><Link className="back-link" href="/">← Back to BVU</Link><p className="eyebrow"><span /> Frequently asked questions</p><h1>Good questions make <em>better brands.</em></h1><p>Here is a clearer look at how BVU works, what support can look like and where a stronger visual system can take your business.</p></header>
      <FaqAccordion items={questions.map(([question, answer]) => ({ question, answer }))} />
    </main>
  );
}



