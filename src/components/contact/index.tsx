import React from "react";
import Img from "../../assets/img/covers/cover-5.jpg";
import TalkSection from "../common/talk-section";

const ContactSection = () => {
  return (
    <>
      <section
        className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover"
        style={{ backgroundImage: `url("${Img}")` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="display-2 font-weight-bold text-white">
                We’re Here to Help.
              </h1>

              <p className="lead text-white-75 mb-0">
                We always want to hear from you! Let us know how we can best
                help you and we'll do our very best.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
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

      <section className="py-7 py-md-9 border-bottom border-gray-300" id="info">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <a
                href="#info"
                className="btn btn-white btn-rounded-circle shadow mt-n11 mt-md-n13"
                data-toggle="smooth-scroll"
              >
                <i className="fe fe-arrow-down"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 text-center border-right border-gray-300">
              <h6 className="text-uppercase text-gray-700 mb-1">Message us</h6>

              <div className="mb-5 mb-md-0">
                <a href="#!" className="h4 text-primary">
                  Start a chat!
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center border-right border-gray-300">
              <h6 className="text-uppercase text-gray-700 mb-1">
                Call anytime
              </h6>

              <div className="mb-5 mb-md-0">
                <a href="#!" className="h4">
                  (555) 123-4567
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center">
              <h6 className="text-uppercase text-gray-700 mb-1">Email us</h6>

              <a href="#!" className="h4">
                support@goodthemes.co
              </a>
            </div>
          </div>
        </div>
      </section>

      <TalkSection />
    </>
  );
};

export default ContactSection;
