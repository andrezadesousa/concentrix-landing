interface CardStatProps {
  id: number;
  number: string | number;
  title: string;
  text: string;
  img: string;
  alt?: string;
  className?: string;
}

function CardStat({ id, number, title, text, img, alt = "" }: CardStatProps) {
  const imgClassName = id === 1 ? "card__img" : "card__image card__img";
  return (
    <div className="card__content">
      <div className="card__container">
        <span className="card__number">{number}</span>
        <span className="card__title">{title}</span>
        <p className="card__text">{text}</p>
      </div>

      <img className={imgClassName} src={img} alt={alt || title} />
    </div>
  );
}

export default CardStat;
