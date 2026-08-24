"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useId, useRef, useState } from "react";

// Form submission states for UI feedback
type FormStatus = "idle" | "sending" | "success" | "error";

// EmailJS configuration loaded from environment variables
const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  enquiryTemplateId: process.env.NEXT_PUBLIC_EMAILJS_ENQUIRY_TEMPLATE_ID,
  autoreplyTemplateId: process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
};

const serviceOptions = [
  "Brand audit",
  "Launch package",
  "Retainer support",
  "Enterprise / Ajo model",
];

// Client-side enquiry form with validation and animated feedback
export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const serviceRef = useRef<HTMLDivElement>(null);
  const serviceId = useId();

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

  // Close service dropdown when clicking outside
  useEffect(() => {
    if (!serviceOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setServiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [serviceOpen]);

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
      setSelectedService("");
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
      <div data-reveal data-delay="2" className="service-select-wrapper" ref={serviceRef}>
        <label id={`${serviceId}-label`}>What can BVU help with?</label>
        <button
          type="button"
          id={serviceId}
          aria-haspopup="listbox"
          aria-expanded={serviceOpen}
          aria-labelledby={`${serviceId}-label`}
          className={`service-select ${serviceOpen ? "service-select-open" : ""}`}
          onClick={() => setServiceOpen((prev) => !prev)}
        >
          <span>{selectedService || "Select a service"}</span>
        </button>
        {serviceOpen && (
          <ul className="service-options" role="listbox" aria-labelledby={`${serviceId}-label`}>
            {serviceOptions.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selectedService === option}
                  className={`service-option ${selectedService === option ? "service-option-selected" : ""}`}
                  onClick={() => {
                    setSelectedService(option);
                    setServiceOpen(false);
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
        <input type="hidden" name="service" value={selectedService} required />
      </div>
      {/* Message */}
      <label data-reveal data-delay="3">Message<textarea name="message" rows={2} required /></label>
      {/* Submit with animated feedback */}
      <button className="button button-dark" type="submit" disabled={status === "sending"} data-reveal data-delay="4">{status === "sending" ? "Sending enquiry..." : "Send enquiry"} <span aria-hidden="true">↗</span></button>
      <div className={`form-feedback form-feedback-${status}`} role="status" aria-live="polite" data-reveal>{status === "success" && "Your enquiry has been sent. A confirmation is on its way to your inbox."}{status === "error" && errorMessage}</div>
    </form>
  );
}
