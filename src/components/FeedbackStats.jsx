import React from "react";

const FeedbackStats = (props) => {
  const { feedbacks } = props;

  let averageRating =
    feedbacks.reduce((acc, cur) => acc + cur.rating, 0) / feedbacks.length;

  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
};

export default FeedbackStats;
