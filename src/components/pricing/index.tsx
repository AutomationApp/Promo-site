import React from "react";
import Faqs from "../common/faqs";
import Pricing from "../common/pricing";
import CurveShape from "../../components/common/curve-shape";
import TalkSection from "../common/talk-section";

const PricingSection = () => {
  return (
    <>
      <section className="pt-8 pt-md-11 pb-10 pb-md-15 bg-dark">
        <div className="shape shape-blur-3 svg-shim text-white">
          <svg
            viewBox="0 0 1738 487"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h1420.92s713.43 457.505 0 485.868C707.502 514.231 0 0 0 0z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="0"
                x2="1049.98"
                y2="912.68"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="currentColor" stop-opacity=".075" />
                <stop offset="1" stop-color="currentColor" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="display-2 text-white">
                Our pricing is simple and flexible
              </h1>

              <p className="lead text-white-80 mb-6 mb-md-8">
                We offer a simple pricing model based on the number of
                automations you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurveShape />

      <Pricing />

      <section className="pt-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2>
                <span className="font-weight-bold text-primary-desat">
                  Automation.app{" "}
                </span>
                is free to set up and test -for 30 days Business.
              </h2>

              <p className="font-size-lg text-muted mb-5">
                Automation.app is running on a point-based pricing: These
                credits automatically renew every month. You’ll only be paying
                the fees, when you start using Automation.app on live workflows
                after you set up billing inside the Automation.app.
              </p>
              <div className="row justify-content-center mb-5">
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary lift">
                    Get started free
                  </button>
                </div>
              </div>
              <p className="font-size-lg text-muted">
                Get free test credits • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      <Faqs />
      <TalkSection />
    </>
  );
};

export default PricingSection;
