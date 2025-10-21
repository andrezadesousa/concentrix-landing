"use client";
import type React from "react";

import { useRef, useState } from "react";
import Negotiation from "../assets/doc.png";
import SecondCopy from "../assets/search.png";
import GrayBox from "../assets/payments.png";

const Home = () => {
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
    <section className="home grid" id="home">
      <div className="home_container">
        <div className="home__titles">
          <h1>Benefícios para ajudar</h1>
          <span>você e sua empresa.</span>
        </div>
        <div className="home__content">
          <div
            className="home__boxes"
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
            <div className="home__destktop">
              <div className="home__box">
                <h1 className="home__box-title">Negociação</h1>
                <img
                  className="home__box-img"
                  src={Negotiation}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                <p className="home__box-text">
                  Negociação <br /> rápida e segura.
                </p>
              </div>
              <div className="home__box">
                <h1 className="home__box-title">Segunda via</h1>
                <img
                  className="home__box-img"
                  src={SecondCopy}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
                <p className="home__box-text">
                  Consulta de <br /> débitos em atraso.
                </p>
              </div>
            </div>
            <div className="home__box mobile">
              <h1 className="home__box-title ">Negociação</h1>
              <img
                className="home__box-img"
                src={Negotiation}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
              <p className="home__box-text">
                Negociação <br /> rápida e segura.
              </p>
            </div>
            <div className="home__box mobile">
              <h1 className="home__box-title">Segunda via</h1>
              <img
                className="home__box-img"
                src={SecondCopy}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
              <p className="home__box-text">
                Consulta de <br /> débitos em atraso.
              </p>
            </div>
            <div className="home__box-gray">
              <div className="home__box-gray-titles">
                <h1>Pagamento</h1>
                <span>
                  Seu pagamento, <br /> como preferir.
                </span>
              </div>
              <img
                src={GrayBox}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
