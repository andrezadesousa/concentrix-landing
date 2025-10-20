"use client";
import { useState } from "react";

interface FaqProps {
  title: string;
  text: string;
}

function FaqCards({ title, text }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq__card">
      <div className="faq__card-container">
        <div
          className="faq__card-title"
          onClick={toggleAccordion}
          style={{ cursor: "pointer" }}
        >
          <span>{title}</span>
          <i className={`bxr ${isOpen ? "bx-minus" : "bx-plus"}`} />
        </div>
        {isOpen && <p className="faq__card-text">{text}</p>}
      </div>
    </div>
  );
}

export default FaqCards;
