import {useState} from 'react';
import '../styles/feedback.css';
function StarRating() {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);  

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            className={starValue <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(starValue)}
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