import React from "react";
import { useState } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";
import FeedbacksData from "../data/FeedbacksData";

const Homepage = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbacksData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    isEdit: false,
  });

  const addFeedback = (newFeedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  const deleteFeedback = (id) => {
    const newFeedbacks = feedbacks.filter((item) => item.id !== id);

    setFeedbacks(newFeedbacks);
  };

  const updateFeedback = (id, updateFeedback) => {
    const newFeedbacks = feedbacks.map((item) =>
      item.id === id ? updateFeedback : item
    );

    setFeedbacks(newFeedbacks);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      isEdit: true,
    });
  };

  const cancelEditFeedback = () => {
    setFeedbackEdit({ items: {}, isEdit: false });
  };

  return (
    <div>
      <FeedbackForm
        handleAdd={addFeedback}
        feedbackEdit={feedbackEdit}
        handleUpdate={updateFeedback}
        cancelEditFeedback={cancelEditFeedback}
      />
      <FeedbackStats feedbacks={feedbacks} />
      <FeedbackList
        feedbacks={feedbacks}
        deleteFeedback={deleteFeedback}
        editFeedback={editFeedback}
      />
    </div>
  );
};

export default Homepage;
