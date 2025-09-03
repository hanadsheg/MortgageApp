import '../styles/reviews.css';

function Review({author, rating, comment}) {
  let sign = "";
  switch (rating) {
  case "1":
    sign = "⭐";
    break;
  case "2":
    sign = "⭐⭐";
    break;
  case "3":
    sign = "⭐⭐⭐";
    break;
  case "4":
    sign = "⭐⭐⭐⭐";
    break;
  case "5":
    sign = "⭐⭐⭐⭐⭐";
    break;
}
  return (
    <div className = "review">
      <p>{author}</p>
      <p>{sign}</p>
      <p>{comment}</p>
    </div>
  )
}

export default Review;