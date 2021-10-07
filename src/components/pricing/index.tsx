import React from "react";
import Faqs from "../common/faqs";
import Pricing from "../common/pricing";

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
              <h1 className="display-2 text-white">Simple, fair pricing.</h1>

              <p className="lead text-white-80 mb-6 mb-md-8">
                All types of businesses need access to development resources, so
                we give you the option to decide how much you need to use.
              </p>

              <form className="d-flex align-items-center justify-content-center mb-7 mb-md-9">
                <span className="text-white-80">Annual</span>

                <div className="custom-control custom-switch custom-switch-dark mx-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="billingSwitch"
                    data-toggle="price"
                    data-target=".price"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="billingSwitch"
                  ></label>
                </div>

                <span className="text-white-80">Monthly</span>
              </form>
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
      <Pricing />

      <section className="py-8 py-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <span className="badge badge-pill badge-primary-desat-soft mb-3">
                <span className="h6 text-uppercase">Enterprise</span>
              </span>

              <h2>
                Business grade quality{" "}
                <span className="font-weight-bold text-primary-desat">
                  for all plans
                </span>
                .
              </h2>

              <p className="font-size-lg text-muted mb-7 mb-md-9">
                Build a beautiful, modern website with our flexible Bootstrap
                components all built from scratch.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 text-center">
              <div className="icon text-primary mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z"
                      fill="#335EEA"
                    />
                    <path
                      d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z"
                      fill="#335EEA"
                      opacity=".3"
                    />
                  </g>
                </svg>
              </div>

              <h3>Built for developers</h3>

              <p className="text-muted mb-6 mb-md-0">
                Landkit is built to make your life easier. Variables, build
                tooling, documentation, and reusable components.
              </p>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="icon text-primary mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z"
                      fill="#335EEA"
                    />
                    <path
                      d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z"
                      fill="#335EEA"
                      opacity=".3"
                    />
                  </g>
                </svg>
              </div>

              <h3>Designed to be modern</h3>

              <p className="text-muted mb-6 mb-md-0">
                Designed with the latest design trends in mind. Landkit feels
                modern, minimal, and beautiful.
              </p>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="icon text-primary mb-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                      fill="#335EEA"
                    />
                    <rect
                      fill="#335EEA"
                      opacity=".3"
                      transform="rotate(15 12 12)"
                      x="11"
                      y="4"
                      width="2"
                      height="16"
                      rx="1"
                    />
                  </g>
                </svg>
              </div>

              <h3>Documentation for everything</h3>

              <p className="text-muted mb-0">
                We've written extensive documentation for components and tools,
                so you never have to reverse engineer anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
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

      <Faqs />
    </>
  );
};

export default PricingSection;
