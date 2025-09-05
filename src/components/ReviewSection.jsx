import '../styles/reviews.css';
import Review from './Review';
import {useState, useEffect} from 'react';

function ReviewSection({HomePage}) {
  const [isHomePage, setIsHomePage] = useState(HomePage);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try{
        const result = await fetch('/api/feedback')
      const data = await result.json();
      setReviews(data);
      console.log(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
      finally {
        setLoading(false);
      }
      
    }
    fetchReviews();
  }, []);


  return (
    <div className = "review-section">
      <h1 className = "review-title">Reviews ⭐</h1>
      <div className = "review-list">
        {loading ? <h2>Loading...</h2> : 
        <>
        {
              isHomePage ? reviews.slice(0,6).map(review => (
                <Review key = {review.id} author={review.user} rating={String(review.rating)} comment={review.comment} />)) :
                reviews.slice(0,15).map(review => (
                  <Review key = {review.id} author={review.user} rating={String(review.rating)} comment={review.comment} />
            ))
          }
        </>
      }

      </div>
    </div>
  )
}

export default ReviewSection;