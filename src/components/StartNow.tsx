"use client";
import { useState, useRef } from "react";
import CardStat from "./CardStat";
import { cardStartData } from "../mock/CardStartData";

const StartNow = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="section start__now" id="start__now">
      <div className="start__now__container">
        <div className="start__now__titles">
          <span>Comece agora!</span>
          <h2>Veja como é fácil e seguro.</h2>
        </div>
        <div
          className="start__now__cards"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          {cardStartData.map((card, id) => {
            return (
              <CardStat
                id={card.id}
                key={id}
                number={card.number}
                title={card.title}
                text={card.text}
                img={card.img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StartNow;
