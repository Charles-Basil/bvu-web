import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { WhatsAppCta } from "./WhatsAppCta";

// Site footer — logo, navigation links, social icons, and copyright
export function Footer() {
  return (
    <footer className="footer" data-section="footer">
      <div className="footer-lead" data-reveal><Image src="/img/logo-transparent.png" alt="BVU" width={220} height={100} /><p>Visual communication<br /><em>that moves business.</em></p></div>
      <div className="footer-columns">
        <div data-reveal data-delay="1"><p className="footer-label">Explore</p><a href="#services">Services</a><a href="#about">About BVU</a><a href="#faq">FAQ</a></div>
        <div className="footer-social-block" data-reveal data-delay="2"><p className="footer-label">Follow BVU</p><div className="footer-socials" aria-label="BVU social media profiles"><span className="social-link" title="Facebook profile coming soon" aria-label="Facebook profile coming soon"><FaFacebookF /></span><span className="social-link" title="Instagram profile coming soon" aria-label="Instagram profile coming soon"><FaInstagram /></span><span className="social-link" title="TikTok profile coming soon" aria-label="TikTok profile coming soon"><FaTiktok /></span><span className="social-link" title="LinkedIn profile coming soon" aria-label="LinkedIn profile coming soon"><FaLinkedinIn /></span></div></div>
      </div>
      <div className="footer-bottom" data-reveal data-delay="3"><span>© 2026 BVU / FunTech Innovations</span><span>Business Visual Upgrade</span></div>
    </footer>
  );
}
