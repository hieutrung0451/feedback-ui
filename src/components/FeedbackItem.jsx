import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";

const FeedbackItem = (props) => {
  const { feedback, id, rating, text, handleDelete, handleEdit } = props;

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => handleEdit(feedback)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
