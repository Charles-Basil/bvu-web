"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list" aria-label="Frequently asked questions">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div className={`faq-item${isOpen ? " faq-item-open" : ""}`} key={item.question}>
            <button className="faq-trigger" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)}>
              <span>0{index + 1}</span>
              <strong>{item.question}</strong>
              <i aria-hidden="true">+</i>
            </button>
            <div className="faq-answer" id={answerId} aria-hidden={!isOpen}>
              <div><p>{item.answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
