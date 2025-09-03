import '../styles/feedback.css'
import StarRating from './StrarRating.jsx';
function FeedbackInput() {
  return (
    <form className = "feedback-input">
      <h2>Leave Your Feedback</h2>
      <input type="text" placeholder="Your Name" className = "name-input" />
      <textarea placeholder="Write your feedback here..." className = "comment-input"></textarea>
      <StarRating />
      <button type = "submit" >Submit</button>
    </form>
  )
}

export default FeedbackInput;