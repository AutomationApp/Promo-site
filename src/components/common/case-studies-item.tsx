import React from "react";
import moment from "moment";

const CaseStudyItem = ({ data }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card card-row shadow-light-lg">
          <div className="row no-gutters">
            <div className="col-12 col-md-6">
              <div className="card-img-slider">
                <div
                  className="card-img-left w-100 bg-cover"
                  style={{
                    backgroundImage: `url("${data.caseStudies.caseStudies.image.sourceUrl}")`,
                  }}
                >
                  <img
                    src={data.caseStudies.caseStudies.image.sourceUrl}
                    alt="Company Logo"
                    className="img-fluid d-md-none invisible"
                  />
                </div>
              </div>
              <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                <svg
                  viewBox="0 0 112 690"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M116 0H51v172C76 384 0 517 0 517v173h116V0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="col-12 col-md-6 position-static">
              <div className="position-static flickity-enabled is-draggable">
                <div
                  className="flickity-viewport"
                  style={{ height: "375px", touchAction: "pan-y" }}
                >
                  <div className="flickity-slider">
                    <div className="w-100 is-selected">
                      <a className="card-body" href="#!">
                        <h3>{data.caseStudies.caseStudies.title}</h3>

                        <p className="mb-0 text-muted">
                          {data.caseStudies.caseStudies.description}
                        </p>
                      </a>

                      <div className="card-meta mt-auto">
                        <hr className="card-meta-divider" />

                        <div className="avatar avatar-sm mr-2">
                          <img
                            src={data.author.node.avatar.url}
                            alt="Person"
                            className="avatar-img rounded-circle"
                          />
                        </div>

                        <h6 className="text-uppercase text-muted mr-2 mb-0">
                          {data.author.node.name}
                        </h6>

                        <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                          <time dateTime="2019-05-02">
                            {moment(data.date).format("MMM d")}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyItem;
