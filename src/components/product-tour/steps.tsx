import React from "react";

const Steps = ({ step }) => {
  return (
    <div className="col-12 col-md-4 mt-md-10">
      <div className="row">
        <div className="col-auto col-md-12">
          <div className="row no-gutters align-items-center mb-md-1">
            <div className="col-auto">
              <a
                href="#!"
                className="btn btn-sm btn-rounded-circle btn-gray-400 disabled opacity-1"
              >
                <span>{step.id}</span>
              </a>
            </div>
            <div className="col">
              <hr className="d-none d-md-block mr-n7" />
            </div>
          </div>
        </div>
        <div className="col col-md-12 ml-n5 ml-md-0">
          <h3>{step.heading}</h3>

          <p className="text-muted mb-6 mb-md-0">{step.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
