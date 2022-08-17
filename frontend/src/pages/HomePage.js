import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const FeedBackUrl = 'http://localhost:1337/api/feedbacks';
export default function HomePage() {
  const { data, loading, error } = useFetch(FeedBackUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div>
      {data.map((feedback) => (
            <div key={feedback.id} className='feedback-card'> 
            <h2>{feedback.attributes.Title}</h2> <div className='feedback-rating'>{feedback.attributes.Rating}</div>
            <small>course list</small> 
            <p>{feedback.attributes.Body.substring(0, 150)}...</p>
            <Link to={`/feedback/${feedback.id}`}>View More</Link>
          </div>
      ))}
    </div>
  ); 
} ;