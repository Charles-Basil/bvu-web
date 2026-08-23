// Client journey — five-step system from audit through to referral
const journeySteps = [
  ["01", "Audit", "See what is working."],
  ["02", "Discover", "Find the next opportunity."],
  ["03", "Present", "Make the direction clear."],
  ["04", "Close", "Turn clarity into action."],
  ["05", "Refer", "Keep the relationship moving."],
];

export function JourneySection() {
  return (
    <section className="journey-section" id="faq" data-section="journey" aria-labelledby="journey-title">
      <div className="section-heading journey-heading"><p className="eyebrow" data-reveal><span /> The client journey</p><h2 id="journey-title" data-reveal data-delay="1">A system, not a one-time logo delivery.</h2></div>
      <div className="journey-line" data-reveal data-delay="2">{journeySteps.map(([number, label, description]) => <div className="journey-step" key={number} data-reveal data-delay={number === "01" ? "0" : number === "02" ? "1" : number === "03" ? "2" : number === "04" ? "3" : "4"}><span>{number}</span><strong>{label}</strong><small>{description}</small></div>)}</div>
      <div className="journey-after" data-reveal data-delay="3"><span>After the first project</span><strong>Scorecard <i>→</i> Community</strong><p>Every engagement creates a clearer next step, so the relationship keeps creating value.</p></div>
    </section>
  );
}
