import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useEffect } from "react";

const FeedbackForm = (props) => {
  const { handleAdd, feedbackEdit, handleUpdate, cancelEditFeedback } = props;

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (feedbackEdit.isEdit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    const newText = e.target.value.trim();

    if (newText.length === "") {
      setBtnDisabled(true);
    } else if (newText.length < 10) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length >= 10) {
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
      setBtnDisabled(true);
    }
  };

  const handleCancel = () => {
    cancelEditFeedback();
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
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            {feedbackEdit.isEdit ? "Update" : "Send"}
          </Button>
          {feedbackEdit.isEdit && (
            <Button version="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
