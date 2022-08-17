import React from 'react';
import { Link } from 'react-router-dom';
export default function SiteHeader() {
  return (
    <>
    <h1 className="site-header">
      <Link to='/'>Course Reviews</Link>
    </h1>
    </>
  );
}
