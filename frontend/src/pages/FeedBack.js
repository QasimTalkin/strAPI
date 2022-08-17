import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useQuery, gql } from '@apollo/client';
export default function FeedBack() {
  const {id} = useParams();
  const FEEDBACK_QUERY = gql`
  query GetFeedback($id: ID!) {
    feedback(id:$id)  {
      data {
        id:,
        attributes { 
          Title,
          Rating, 
          Body
        }
      }
    }
  }
  `;
  const {data, loading , error } = useQuery(FEEDBACK_QUERY, {variables: {id: id}});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const feedback = data.feedback.data.id;
  return (
    <>
      {/* animated card transition with data */}
      <div className='feedback-card'>
        <h2>{feedback.Title}</h2>
        <div className='feedback-rating'>{feedback.Rating}</div> 
        <small>course list</small>
        <p>{feedback.Body}</p>
      </div>
    </>
  );
}
