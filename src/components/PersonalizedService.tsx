import Call from "../assets/call.png";
import WhatsApp from "../assets/wpp.png";

const PersonalizedService = () => {
  return (
    <section className="personalized" id="personalized">
      <div className="personalized__container">
        <div className="personalized__titles">
          <span>Atendimento personalizado</span>
          <h2>Diversos canais, para cada necessidade</h2>
        </div>
        <div className="personalized__boxes">
          <img src={Call} />
          <img src={WhatsApp} />
        </div>
      </div>
    </section>
  );
};

export default PersonalizedService;
