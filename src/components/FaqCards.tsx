interface FaqProps {
  title: string;
  text: string;
}

function FaqCards({ title, text }: FaqProps) {
  return (
    <div className="faq__card">
      <div className="faq__card-container">
        <div className="faq__card-title">
          <span>{title}</span>
          <i className="bxr bx-plus" />
        </div>
        <p className="faq__card-text">{text}</p>
      </div>
    </div>
  );
}

export default FaqCards;
