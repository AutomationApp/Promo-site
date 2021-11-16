import React from "react";

const Steps = ({ step }) => {
  return (
    <div className="col-12 col-md-4 mt-md-10">
      <div className="row">
        <div className="col-auto col-md-12 mb-md-1">
          <img src={step.icon.sourceUrl} alt={step.title} width="50px" />
        </div>
        <div className="col col-md-12 ml-n5 ml-md-0">
          <h3>{step.title}</h3>

          <p className="text-muted mb-6 mb-md-0">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
