import { FaqData } from "../mock/FaqData";
import FaqCards from "./FaqCards";

const Faq = () => {
  return (
    <section className="faq" id="faq">
      <div className="faq__content">
        <div className="faq__titles">
          <span>Perguntas frequentes</span>
          <h2>Tire suas dúvidas</h2>
        </div>
        {FaqData.map((card, id) => {
          return <FaqCards key={id} title={card.title} text={card.text} />;
        })}
      </div>
    </section>
  );
};

export default Faq;
