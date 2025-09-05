import {useState} from 'react';
import '../styles/feedback.css';
function StarRating({ rating, onRate }) {
  const [hover, setHover] = useState(0);  

  const handleClick = (starValue) => {

  }
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            className={starValue <= (hover || rating) ? "on" : "off"}
            onClick={() => onRate(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <p>You rated this: {rating} out of 5</p>
    </div>
  );
}

export default StarRating;