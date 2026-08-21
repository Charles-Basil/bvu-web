// AI section — highlights BVU's AI-assisted workflow with human creative judgment
export function AiSection() {
  return (
    <section className="ai-section" data-section="ai" aria-labelledby="ai-title">
      <div className="ai-orbit" data-reveal aria-hidden="true"><span>AI</span><span>HUMAN</span><span>JUDGMENT</span></div>
      <div className="ai-copy"><p className="eyebrow" data-reveal data-delay="1"><span /> The BVU advantage</p><h2 id="ai-title" data-reveal data-delay="2">Powered by AI.<br /><em>Led by people.</em></h2><p data-reveal data-delay="3">AI-assisted tools accelerate audits, drafts and iteration. Human creative judgment remains responsible for the decisions that make a brand feel like itself.</p></div>
    </section>
  );
}
