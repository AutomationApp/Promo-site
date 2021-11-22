import React from "react";

const Testimonials = ({ data }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card card-row shadow-light-lg mb-6">
          <div className="row no-gutters">
            <div className="col-12 col-md-6">
              <div className="card-img-slider">
                <div
                  className="card-img-left w-100 bg-cover"
                  style={{ backgroundImage: `url("${data.image.sourceUrl}")` }}
                >
                  <img
                    src={data.image.sourceUrl}
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
                  />
                </svg>
              </div>
            </div>
            <div className="col-12 col-md-6 position-md-static">
              <div
                className="position-md-static flickity-enabled is-draggable"
                id="blogSlider"
              >
                <div className="w-100">
                  <div className="card-body">
                    <blockquote className="blockquote text-center mb-0">
                      <div className="row justify-content-center mb-5 mb-md-7">
                        <img
                          src={data.logo.sourceUrl}
                          alt="Company Logo"
                          width="250px"
                        />
                      </div>

                      <p className="mb-5 mb-md-7">“{data.review}”</p>

                      <footer className="blockquote-footer">
                        <span className="h6 text-uppercase">{data.author}</span>
                      </footer>
                    </blockquote>
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

export default Testimonials;
