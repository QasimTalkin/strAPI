import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
export default function FeedBack() {
  const {id} = useParams();
  const url = `http://localhost:1337/api/feedbacks/${id}`;
  const {data, loading, error} = useFetch(url); 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      {/* animated card transition with data */}
      <div className='feedback-card'>
        <h2>{data.attributes.Title}</h2>
        <div className='feedback-rating'>{data.attributes.Rating}</div> 
        <small>course list</small>
        <p>{data.attributes.Body}</p>
      </div>
    </>
  );
}
