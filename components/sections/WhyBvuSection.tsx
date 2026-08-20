const reasons = [
  "Backed by FunTech Innovations",
  "Founder-led branding expertise",
  "Structured systems and audits",
  "Tiered services for different stages",
  "AI-assisted workflows, human judgment",
];

export function WhyBvuSection() {
  return (
    <section className="why-section" data-section="why" aria-labelledby="why-title">
      <div className="why-lead"><p className="eyebrow" data-reveal><span /> Why BVU</p><h2 id="why-title" data-reveal data-delay="1">The creative partner behind the <em>next move.</em></h2></div>
      <div className="reason-list">{reasons.map((reason, index) => <div className="reason-row" key={reason} data-reveal data-delay={index + 2}><span>0{index + 1}</span><strong>{reason}</strong><i aria-hidden="true">↗</i></div>)}</div>
    </section>
  );
}
