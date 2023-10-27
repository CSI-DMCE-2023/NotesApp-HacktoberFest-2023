import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
// import {img} from "../../public/error.jpg"

const NotFound = () => {

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-5 text-center">
          <img src="/error.jpg"alt="Error Illustration" className="img-fluid mb-1" />
          <h2 className="display-4 mb-1.5">Oops! Something went wrong.</h2>
          <p className="lead">We couldn't find the page you're looking for.</p>
          <Link to="/" className="btn btn-primary mt-1">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
