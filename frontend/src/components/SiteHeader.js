import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

const COURSES_QUERY = gql`
query getCourses {
  courses {
    data{
      id
      attributes {
        courseName
        courseCode
      }
    }
  }
}
`;

export default function SiteHeader() {
  const { data, loading , error } = useQuery(COURSES_QUERY);
  return (
    <>
    <h1 className="site-header">
      <Link to='/'>Course Reviews</Link> 
    </h1>
      {/* filter feed back by courses */}
      <nav  className='course-list'> 
      {data?.courses?.data?.map((course) => (
        <div key={course.id}>
        {/* couses list with id to chose from */}
        <Link to={`/courses/${course.id}`}>{course.attributes.courseCode} - {course.attributes.courseName}</Link>
        </div>
      ))}
      </nav>
    </>

  );
}
 