import Image from "next/image";
import { Footer } from "../components/Footer";
import { AiSection } from "../components/sections/AiSection";
import { EnterpriseSection } from "../components/sections/EnterpriseSection";
import { JourneySection } from "../components/sections/JourneySection";
import { ShowcaseSection } from "../components/sections/ShowcaseSection";
import { WhyBvuSection } from "../components/sections/WhyBvuSection";
import { WhatsAppCta } from "../components/WhatsAppCta";

// Main navigation items — order matches visual nav on desktop and mobile
const navItems = ["Services", "About", "FAQ", "Contact"];

// Homepage — single-page scroll layout with multiple sections
export default function Home() {
  return (
    <main className="site-shell">
      {/* ===== NAVIGATION ===== */}
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="BVU home"><Image src="/img/logo-transparent.png" alt="BVU" width={220} height={100} priority /></a>
        <div className="nav-links">{navItems.map((item) => <a href={item === "FAQ" || item === "Contact" ? `/${item.toLowerCase()}` : `#${item.toLowerCase()}`} key={item}>{item}</a>)}</div>
        <a className="nav-cta" href="/contact">Get a brand audit <span aria-hidden="true">↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span /><span /></summary>
          <div className="mobile-links">{navItems.map((item) => <a href={item === "FAQ" || item === "Contact" ? `/${item.toLowerCase()}` : `#${item.toLowerCase()}`} key={item}>{item}</a>)}<a className="nav-cta" href="/contact">Get a brand audit <span aria-hidden="true">↗</span></a></div>
        </details>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="top" data-section="hero">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal data-delay="1"><span /> Business visual upgrade</p>
          <h1 data-reveal data-delay="2">Your <em>business</em> shouldn&apos;t have to choose between <em>affordable</em> and <em>reliable</em>.</h1>
          <p className="hero-description" data-reveal data-delay="3">Professional visual communication for Nigerian businesses, built with structure, creative judgment and a clear understanding of what growth demands.</p>
          <div className="hero-actions" data-reveal data-delay="4"><a className="button button-dark" href="/contact">Get your brand audit <span aria-hidden="true">↗</span></a><a className="text-link" href="#about">See how BVU works <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-media" aria-label="BVU visual showcase">
          <video className="hero-video" autoPlay muted loop playsInline poster="/img/body.png" aria-hidden="true">
            <source src="/video/bvu-showcase.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ===== SIGNAL / ABOUT ===== */}
      <section className="signal-band" id="about" data-section="signal">
        <div className="signal-statement"><p className="eyebrow" data-reveal><span /> The BVU point of view</p><h2 data-reveal data-delay="1">Branding isn&apos;t decoration.<br /><em>It&apos;s productivity.</em></h2></div>
        <div className="signal-rail" aria-label="The BVU process" data-reveal data-delay="2"><span><b>01</b><strong>Audit what is working</strong><i aria-hidden="true">↗</i></span><span><b>02</b><strong>Build what is missing</strong><i aria-hidden="true">↗</i></span><span><b>03</b><strong>Support what comes next</strong><i aria-hidden="true">↗</i></span></div>
      </section>

      {/* ===== SERVICES / PROBLEMS ===== */}
      <section className="problem-section" id="services" data-section="problems">
        <div className="section-heading"><p className="eyebrow" data-reveal><span /> The gap BVU closes</p><h2 data-reveal data-delay="1">Good businesses deserve better than <em>either/or.</em></h2></div>
        <div className="problem-grid" data-reveal data-delay="2">
          <article className="problem-item" data-reveal data-delay="0"><span className="problem-number">01</span><div><p className="problem-label">The agency gap</p><h3>Too expensive.</h3><p>Consistent, professional branding can feel out of reach for growing businesses.</p></div><span className="problem-mark" aria-hidden="true">↗</span></article>
          <article className="problem-item problem-item-offset" data-reveal data-delay="1"><span className="problem-number">02</span><div><p className="problem-label">The freelance gap</p><h3>Too unreliable.</h3><p>Inconsistent delivery, missed deadlines and a lack of structure leave businesses carrying the creative risk alone.</p></div><span className="problem-mark" aria-hidden="true">↘</span></article>
        </div>
      </section>

      {/* ===== MODEL TRACKS (LAUNCH / RETAINER) ===== */}
      <section className="model-section" data-section="models">
        <div className="section-heading model-heading"><p className="eyebrow" data-reveal><span /> Two ways to move forward</p><h2 data-reveal data-delay="1">Support that meets your business where it is.</h2><p className="section-intro" data-reveal data-delay="2">Start with a visual foundation. Stay supported as the business grows.</p></div>
        <div className="model-tracks">
          <article className="model-track" data-reveal data-delay="0"><div className="track-top"><span className="track-index">01</span><span className="track-type">One-off foundation</span></div><h3>Launch</h3><p>Build the visual system your business needs to show up clearly and confidently.</p><div className="tier-list"><span>Light</span><span>Basic</span><span>Pro</span></div><a href="#contact" className="model-link">Start with a launch <span aria-hidden="true">↗</span></a></article>
          <article className="model-track model-track-dark" data-reveal data-delay="1"><div className="track-top"><span className="track-index">02</span><span className="track-type">Ongoing support</span></div><h3>Retainer</h3><p>Keep your visual communication moving with structured, consistent monthly support.</p><div className="tier-list"><span>Essential</span><span>Pro</span><span>Enterprise</span></div><a href="#contact" className="model-link">Explore ongoing support <span aria-hidden="true">↗</span></a></article>
        </div>
      </section>

      {/* ===== SUB-SECTIONS ===== */}
      <EnterpriseSection />
      <JourneySection />
      <WhyBvuSection />
      <AiSection />
      <ShowcaseSection />

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta" id="contact" data-section="cta"><p className="eyebrow" data-reveal><span /> Make the next move</p><h2 data-reveal data-delay="1">Ready to make your business easier to trust?</h2><p data-reveal data-delay="2">Start with a clear conversation about where your business is going and what its visual communication needs next.</p><div className="home-contact-actions" data-reveal data-delay="3"><a className="button" href="/contact">Book your free brand audit <span aria-hidden="true">↗</span></a></div></section>
      <div className="whatsapp-float"><WhatsAppCta label="WhatsApp" /></div>
      <Footer />
    </main>
  );
}
