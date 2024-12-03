import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div >
      <div> 404 - Page Not Found </div>
      <div >
        Sorry, the page you are looking for does not exist.
      </div>
      <Link to="/" >
        Go back to Main Page
      </Link>
    </div>
  );
};

export default NotFound;