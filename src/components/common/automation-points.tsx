import { Link } from "gatsby";
import React from "react";

const AutomationPoints = ({ detailSection }) => {
  return (
    <section className="">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-md-6 col-lg-5" data-aos="fade-up">
            <h2
              className="font-weight-bold"
              dangerouslySetInnerHTML={{ __html: detailSection.title }}
            />

            <p className="font-size-lg text-gray-700">
              {detailSection.description}
            </p>

            <div className="">
              <Link
                to="https://app.automation.app/register"
                className="btn btn-primary shadow lift"
              >
                {detailSection.buttonText}
                <i className="fe fe-arrow-right d-none d-md-inline"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mt-5 mt-md-0">
            <div
              className="card card-border border-success shadow-lg mb-5"
              data-aos="fade-up"
            >
              <div className="card-body">
                <div className="list-group list-group-flush">
                  {detailSection.casesPoints.map((item) => (
                    <div
                      key={item.title}
                      className="list-group-item d-flex align-items-center"
                    >
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">{item.title}</p>

                        <p className="font-size-sm text-muted mb-0">
                          {item.description}
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationPoints;
