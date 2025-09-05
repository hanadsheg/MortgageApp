import '../styles/feedback.css'
import StarRating from './StrarRating.jsx';
import {useState} from 'react';

function FeedbackInput() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const nameElement = document.querySelector('.name-input');
  const commentElement = document.querySelector('.comment-input');
  const ratingElement = document.querySelector('.star-rating');


  const handleSubmit = (e) => {
    console.log("Feedback submitted");
    setName(nameElement.value);
    setComment(commentElement.value);
    console.log("Name:", name);
    console.log("Comment:", comment);
    console.log("Rating:", rating);
    try{
      addReview();
      alert("Thank you for your feedback!");
    }
    catch (error) {
      console.error("Error adding review:", error);
    }
  }

 const addReview = async () => {
  const result = await fetch('/api/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: name,
      comment: comment,
      rating: rating
    })
  });

  const data = await result.json();
  console.log("Server response:", data);
};


  return (
    <form className = "feedback-input" onSubmit={handleSubmit}>
      <h2>Leave Your Feedback</h2>
      <input type="text" placeholder="Your Name" className = "name-input" onChange = {(e) => setName(e.target.value)} />
      <textarea placeholder="Write your feedback here..." className = "comment-input" onChange = {(e) => setComment(e.target.value)}></textarea>
      <StarRating rating = {rating} onRate = {setRating} />
      <button type = "submit" >Submit</button>
    </form>
  )
}

export default FeedbackInput;