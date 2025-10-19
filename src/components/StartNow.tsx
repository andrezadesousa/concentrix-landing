import CardStat from "./CardStat";
import { cardStartData } from "../mock/CardStartData";

const StartNow = () => {
  return (
    <section className="section personalized">
      <div className="personalized__container ">
        <div className="personalized__titles">
          <span>Comece agora!</span>
          <h2>Veja como é fácil e seguro.</h2>
        </div>
        <div className="personalized__cards">
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
