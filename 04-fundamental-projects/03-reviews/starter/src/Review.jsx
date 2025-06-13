import { FaQuoteRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Review = ({ review, handleRandom, handleNext, handlePrev }) => {
  const { name, text, job, image, ...rest } = review;

  return (
    <main>
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <div className="job">{job}</div>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaAngleLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaAngleRight />
        </button>
      </div>
   <button className="btn btn-hipster" onClick={handleRandom}>Surprise me!</button>
    </article>
    </main>
  );
};
export default Review;
