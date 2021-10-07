import React from "react";
//@ts-ignore
import illustration from "../../assets/img/illustrations/illustration-2.png";

const HomeSection = () => {
  return (
    <section className="pt-4 pt-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <img
              src={illustration}
              className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
              alt="..."
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
          <div
            className="col-12 col-md-7 col-lg-6 order-md-1"
            data-aos="fade-up"
          >
            <h1 className="display-3 text-center text-md-left">
              Simple <span className="text-primary">E-commerce</span>.
              <br />
              Automation
            </h1>

            <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
              Customise user journeys and enjoy quick order control with your
              team
            </p>

            <div className="text-center text-md-left">
              <a
                href="overview.html"
                className="btn btn-primary shadow lift mr-1"
              >
                Try it free{" "}
                <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
              </a>
              <a
                href="docs/index.html"
                className="btn btn-outline-primary lift ml-2"
              >
                Learn more
              </a>
            </div>

            <p className="text-center text-md-left text-muted mt-3 mt-lg-3">
              Get free test credits • No credit card required • Forever free
              option
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
