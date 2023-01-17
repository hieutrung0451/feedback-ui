import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = (props) => {
  const { feedbacks, deleteFeedback, editFeedback } = props;

  return (
    <div className="feedback-list">
      {feedbacks.map((item) => (
        <FeedbackItem
          key={item.id}
          feedback={item}
          id={item.id}
          rating={item.rating}
          text={item.text}
          handleDelete={deleteFeedback}
          handleEdit={editFeedback}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
