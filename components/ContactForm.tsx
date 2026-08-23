"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useState } from "react";

// Form submission states for UI feedback
type FormStatus = "idle" | "sending" | "success" | "error";

// EmailJS configuration loaded from environment variables
const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  enquiryTemplateId: process.env.NEXT_PUBLIC_EMAILJS_ENQUIRY_TEMPLATE_ID,
  autoreplyTemplateId: process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
};

// Client-side enquiry form with validation and animated feedback
export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-dismiss success/error messages after 6 seconds
  useEffect(() => {
    if (status !== "success" && status !== "error") {
      return;
    }

    const dismissTimer = window.setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 6000);

    return () => window.clearTimeout(dismissTimer);
  }, [status]);

  // Handle form submission with validation and EmailJS integration
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("error");
      setErrorMessage("Please complete all required fields before sending your enquiry.");
      return;
    }

    if (Object.values(emailJsConfig).some((value) => !value)) {
      setStatus("error");
      setErrorMessage("The enquiry service is not configured yet. Please try again later.");
      return;
    }

    const formData = new FormData(form);
    const templateParams = {
      name: String(formData.get("name") ?? "").trim(),
      business: String(formData.get("business") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      from_name: String(formData.get("name") ?? "").trim(),
      from_email: String(formData.get("email") ?? "").trim(),
      business_name: String(formData.get("business") ?? "").trim(),
      reply_to: String(formData.get("email") ?? "").trim(),
    };

    try {
      // Send enquiry notification to BVU
      await emailjs.send(emailJsConfig.serviceId!, emailJsConfig.enquiryTemplateId!, templateParams, emailJsConfig.publicKey!);
      // Send auto-reply confirmation to the user
      await emailjs.send(emailJsConfig.serviceId!, emailJsConfig.autoreplyTemplateId!, templateParams, emailJsConfig.publicKey!);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("We could not send your enquiry. Please try again or contact BVU directly.");
    }
  }

  return (
    <form className="contact-form" data-section="contact-form" onSubmit={handleSubmit}>
      {/* Name and business fields */}
      <div className="form-row" data-reveal><label>Full name<input name="name" autoComplete="name" required /></label><label>Business name<input name="business" autoComplete="organization" required /></label></div>
      {/* Contact details */}
      <div className="form-row" data-reveal data-delay="1"><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label></div>
      {/* Service selection */}
      <label data-reveal data-delay="2">What can BVU help with?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Brand audit</option><option>Launch package</option><option>Retainer support</option><option>Enterprise / Ajo model</option></select></label>
      {/* Message */}
      <label data-reveal data-delay="3">Message<textarea name="message" rows={2} required /></label>
      {/* Submit with animated feedback */}
      <button className="button button-dark" type="submit" disabled={status === "sending"} data-reveal data-delay="4">{status === "sending" ? "Sending enquiry..." : "Send enquiry"} <span aria-hidden="true">↗</span></button>
      <div className={`form-feedback form-feedback-${status}`} role="status" aria-live="polite" data-reveal>{status === "success" && "Your enquiry has been sent. A confirmation is on its way to your inbox."}{status === "error" && errorMessage}</div>
    </form>
  );
}
