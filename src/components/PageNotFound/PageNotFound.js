import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="notFound-container">
      <div className="text-box text-white">
        <h1 className="text-center pb-2">404 Error!</h1>
        <h2 className="text-center pb-3">Page Not Found</h2>
        <button className="btn btn-primary d-block mx-auto">
          Back to home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
