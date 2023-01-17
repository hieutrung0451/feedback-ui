import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackList from "../components/FeedbackList";
import { FeedbackProvider } from "../context/FeedbackContext";

const Homepage = () => {
  return (
    <FeedbackProvider>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </FeedbackProvider>
  );
};

export default Homepage;
