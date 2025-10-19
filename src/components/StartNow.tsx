import CardStat from "./CardStat";
import { cardStartData } from "../mock/CardStartData";

const StartNow = () => {
  return (
    <section className="section start__now" id="start__now">
      <div className="start__now__container">
        <div className="start__now__titles">
          <span>Comece agora!</span>
          <h2>Veja como é fácil e seguro.</h2>
        </div>
        <div className="start__now__cards">
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
