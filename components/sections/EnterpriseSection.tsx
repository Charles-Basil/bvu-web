// Enterprise / Ajo model — five businesses share one coordinated BVU slot
const businesses = ["01", "02", "03", "04", "05"];

export function EnterpriseSection() {
  return (
    <section className="enterprise-section" data-section="enterprise" aria-labelledby="enterprise-title">
      <div className="enterprise-copy">
        <p className="eyebrow" data-reveal><span /> Enterprise / Ajo model</p>
        <h2 id="enterprise-title" data-reveal data-delay="1">Five businesses.<br /><em>One shared slot.</em></h2>
        <p data-reveal data-delay="2">Professional branding becomes more accessible when businesses share the opportunity. Five businesses contribute approximately ₦12,000 each into one coordinated BVU slot.</p>
        <div className="enterprise-meta" data-reveal data-delay="3"><span>Shared access</span><span>Structured support</span><span>Built for growth</span></div>
      </div>
      <div className="enterprise-system" aria-label="Five businesses contribute to one shared BVU slot" data-reveal data-delay="2">
        <div className="business-nodes">{businesses.map((business) => <span key={business}><b>{business}</b><small>business</small></span>)}</div>
        <div className="system-line" aria-hidden="true" />
        <div className="shared-slot"><span>BVU</span><strong>Shared slot</strong><small>approximately ₦60,000</small></div>
      </div>
    </section>
  );
}
