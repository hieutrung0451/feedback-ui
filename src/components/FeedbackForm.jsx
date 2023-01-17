import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useEffect } from "react";

const FeedbackForm = (props) => {
  const { handleAdd, feedbackEdit, handleUpdate } = props;

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.isEdit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: uuidv4(),
      rating,
      text,
    };

    if (feedbackEdit.isEdit === true) {
      handleUpdate(feedbackEdit.item.id, newFeedback);
      feedbackEdit.isEdit = false;
    } else {
      handleAdd(newFeedback);
    }

    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} feedbackEdit={feedbackEdit} />
        <div className="input-group">
          <input
            type="text"
            value={text}
            placeholder="Write a review"
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
