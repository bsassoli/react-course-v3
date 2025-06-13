import { useState } from "react";
const Tour = ({ tour, onClickHandler }) => {
  const { image, name, info, price } = tour;
  const infoSnippet = info.substring(0, 200) + "...";
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {!readMore ? infoSnippet : info}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {!readMore ? "read more" : "show less"}
          </button>
        </p>
        <button
        className="btn btn-block delete-btn"
        onClick={() => onClickHandler(tour.id)}>I'm not interested</button>
      </div>
    </article>
  );
};
export default Tour;
