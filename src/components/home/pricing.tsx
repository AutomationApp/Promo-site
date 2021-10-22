import { Link } from "gatsby";
import React from "react";
import { HomeFaqs } from "../../utils/constants";

const PricingSection = () => {
  return (
    <>
      <section className="pt-9 bg-gray-200">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1>Fair, simple pricing for all sizes.</h1>

              <p className="lead text-gray-700">
                Get started for free, no credit card needed. We promise - you’ll
                see your orders in the system and start automation within 10
                minutes from opening your account.
              </p>
            </div>
          </div>
          <div className="row align-items-center no-gutters pt-5">
            <div className="col-12 col-md-6">
              <div
                className="card rounded-lg shadow-lg mb-6 mb-md-0"
                style={{ zIndex: 1 }}
              >
                <div className="card-body py-6 py-md-8">
                  <div className="row justify-content-center">
                    <div className="col-12 col-xl-9">
                      <div className="text-center mb-5">
                        <span className="badge badge-pill badge-primary-soft">
                          <span className="h6 font-weight-bold text-uppercase">
                            Standard
                          </span>
                        </span>
                      </div>

                      <div className="d-flex justify-content-center">
                        <span className="h2 mb-0 mt-2">$</span>
                        <span
                          className="price display-2 mb-0"
                          data-annual="29"
                          data-monthly="49"
                        >
                          9
                        </span>
                        <span className="h2 align-self-end mb-1">/mo</span>
                      </div>

                      <p className="text-center text-muted mb-6 mb-md-8">
                        250 activities
                      </p>

                      <div className="d-flex">
                        <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                          <i className="fe fe-check"></i>
                        </div>

                        <p>CRM, Marketing lists & Audiences</p>
                      </div>
                      <div className="d-flex">
                        <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                          <i className="fe fe-check"></i>
                        </div>

                        <p>Marketing Automation & tagging</p>
                      </div>
                      <div className="d-flex">
                        <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                          <i className="fe fe-check"></i>
                        </div>

                        <p>Order control & Overview</p>
                      </div>
                      <div className="d-flex">
                        <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                          <i className="fe fe-check"></i>
                        </div>

                        <p>Send Email, SMS etc.</p>
                      </div>
                      <div className="d-flex">
                        <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                          <i className="fe fe-check"></i>
                        </div>

                        <p className="mb-0">All features: Teamwork etc.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#!"
                  className="card-btn btn btn-block btn-lg btn-primary"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 ml-md-n3">
              <div
                className="card rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card-body py-6 py-md-8">
                  <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                      <p className="text-center mb-8 mb-md-11">
                        <span className="badge badge-pill badge-primary-soft">
                          <span className="h6 font-weight-bold text-uppercase">
                            Partner | Pro | dedicated | enterprise
                          </span>
                        </span>
                      </p>

                      <p className="lead text-center text-muted mb-0 mb-md-10">
                        We offer variable pricing with discounts for larger
                        organizations of 40+ employees. Get in touch with us and
                        we’ll figure out something that works for everyone.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="card-btn btn btn-block btn-lg btn-light bg-gray-300 text-gray-700"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative mt-n15">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <section className="pt-15 pb-12 bg-dark">
        <div className="container pt-8 pt-md-11">
          <div className="row">
            {HomeFaqs.map((item) => (
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="badge badge-lg badge-rounded-circle badge-success">
                    <span>?</span>
                  </div>

                  <div className="ml-5">
                    <h4 className="text-white">{item.title}</h4>

                    <p className="text-muted mb-6 mb-md-8">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
