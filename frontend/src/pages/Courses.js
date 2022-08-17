import React from 'react';
import {useParams, Link} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';



export default function Courses() {
  // convert to number
  const COURSE_QUERY = gql`
  query getCourse($id:ID!) {
    course(id:$id) {
      data {
        id
        attributes {
          courseName
          courseCode
          feedbacks {
            data {
              id
              attributes {
                Title
                Body
                Rating
                courses {
                  data {
                    id
                    attributes {
                      courseName
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
  let id = useParams() || 1;

  const {data, error, loading} = useQuery(COURSE_QUERY, {variables: {id: id.id}});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div>
    <h2>{data.course.data.attributes.courseName}</h2>
      {data.course.data.attributes.feedbacks.data.map((feedback) => (
            <div key={feedback.id} className='feedback-card'> 
            <h2>{feedback.attributes.Title}</h2> <div className='feedback-rating'>{feedback.attributes.Rating}</div>
            {feedback.attributes.courses.data.map((course)=>(
              <small key={course.id}>| {course.attributes.courseName}</small>
            ))} 
            <p>{feedback.attributes.Body.substring(0, 150)}...</p>
            <Link to={`/feedback/${feedback.id}`}>View More</Link>
          </div>
      ))}
    </div>
  );
}
