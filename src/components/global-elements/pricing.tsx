import { Link } from "gatsby";
import React from "react";
import { usePreFooterPricingQuery } from "../../graphql/usePreFooterPricingQuery";

const PricingSection = () => {

  // global pricing elements
  const {allWpGlobalElement: {nodes}} = usePreFooterPricingQuery();
  const pricing = nodes[0].globalPricing.prefooterPricing;

  const { pricingCard } = pricing;
  const { priceCard2 } = pricing;
  return (
    <>
      <section className="pt-9 bg-gray-200">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1>{pricing.title}</h1>

              <p className="lead text-gray-700">{pricing.description}</p>
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
                            {pricingCard.tag}
                          </span>
                        </span>
                      </div>

                      <div className="d-flex justify-content-center mb-6 mb-md-8">
                        <span className="h2 mb-0 mt-2">$</span>
                        <span
                          className="price display-2 mb-0"
                          data-annual="29"
                          data-monthly="49"
                        >
                          {pricingCard.price}
                        </span>
                        <span className="h2 align-self-end mb-1">
                          /{pricingCard.time}
                        </span>
                      </div>

                      {pricingCard.packageIncludes.map((item) => (
                        <div className="d-flex" key={item.title}>
                          <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                            <i className="fe fe-check"></i>
                          </div>

                          <p>{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="https://app.automation.app/register"
                  className="card-btn btn btn-block btn-lg btn-primary"
                >
                  {pricingCard.buttonText}
                </Link>
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
                            {priceCard2.tag}
                          </span>
                        </span>
                      </p>

                      <p className="lead text-center text-muted mb-0 mb-md-10">
                        {priceCard2.description}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="card-btn btn btn-block btn-lg btn-light bg-gray-300 text-gray-700"
                >
                  {priceCard2.buttonText}
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
    </>
  );
};

export default PricingSection;
