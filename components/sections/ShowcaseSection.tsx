import Image from "next/image";

export function ShowcaseSection() {
  return (
    <section className="showcase-section" data-section="showcase" aria-labelledby="showcase-title">
      <div className="showcase-copy"><p className="eyebrow" data-reveal><span /> Visual showcase</p><h2 id="showcase-title" data-reveal data-delay="1">Make the work <em>visible.</em></h2><p data-reveal data-delay="2">Strong visual communication gives people something clear to remember, trust and act on.</p></div>
      <figure className="showcase-image" data-reveal data-delay="1"><Image src="/img/body.png" alt="BVU coffee brand visual showcase" fill sizes="(max-width: 800px) 100vw, 62vw" /><figcaption><span>BVU / Visual communication</span><strong>Make the work memorable.</strong></figcaption></figure>
    </section>
  );
}
