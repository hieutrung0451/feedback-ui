import React, { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  const { id, rating, text } = item;

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => deleteFeedback(id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

export default FeedbackItem;
