import React, { createContext, useState } from "react";
import FeedbacksData from "../data/FeedbacksData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
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

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      isEdit: true,
    });
  };

  const updateFeedback = (id, updateFeedback) => {
    const newFeedbacks = feedbacks.map((item) =>
      item.id === id ? updateFeedback : item
    );

    setFeedbacks(newFeedbacks);
  };

  const cancelEditFeedback = () => {
    setFeedbackEdit({ items: {}, isEdit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        addFeedback,
        deleteFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback,
        cancelEditFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
