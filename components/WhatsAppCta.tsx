// WhatsApp deep-link configuration
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
const whatsappMessage = encodeURIComponent("Hello BVU, I would like to talk about upgrading my business.");
const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}` : null;

type WhatsAppCtaProps = {
  className?: string;
  label?: string;
};

// Reusable WhatsApp button — falls back to a disabled label if no number is configured
export function WhatsAppCta({ className = "", label = "Talk to BVU on WhatsApp" }: WhatsAppCtaProps) {
  const classes = `whatsapp-cta ${className}`.trim();

  if (!whatsappUrl) {
    return <span className={`${classes} whatsapp-cta-disabled`} aria-label="WhatsApp contact coming soon"><span className="whatsapp-icon" aria-hidden="true">WA</span>{label}</span>;
  }

  return <a className={classes} href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}><span className="whatsapp-icon" aria-hidden="true">WA</span>{label}</a>;
}
