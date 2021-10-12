import React from "react";

const LoadingSpinner = ({ height }) => {
  return (
    <div className="container" style={{ height: height }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
