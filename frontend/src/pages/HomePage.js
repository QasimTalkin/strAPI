import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const FEEDBACKS_QUERY = gql`
query GetFeedbacks {
  feedbacks {
    data {
      id,
      attributes { 
        Title,
        Rating, 
        Body
      }
    }
  }
}
`
export default function HomePage() {
  const { data, loading , error } = useQuery(FEEDBACKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div>
      {data.feedbacks.data.map((feedback) => (
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