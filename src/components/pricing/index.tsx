import React from "react";
import Faqs from "../common/faqs";
import Pricing from "../common/pricing";
import CurveShape from "../../components/common/curve-shape";
import TalkSection from "../common/talk-section";
import { usePricingQuery } from "../../graphql/usePricingQuery";

const PricingSection = () => {
  const { wpPage } = usePricingQuery();
  const { pricing } = wpPage;

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
                {pricing.pricingHeroSection.title}
              </h1>

              <p className="lead text-white-80 mb-6 mb-md-8">
                {pricing.pricingHeroSection.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurveShape />

      <Pricing pricing={pricing.pricing} />

      <section className="pt-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2
                dangerouslySetInnerHTML={{ __html: pricing.bodySection.title }}
              />

              <p
                className="font-size-lg text-muted mb-5"
                dangerouslySetInnerHTML={{
                  __html: pricing.bodySection.description,
                }}
              />

              <div className="row justify-content-center mb-5">
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary lift">
                    Get started free
                  </button>
                </div>
              </div>
              <p
                className="font-size-lg text-muted"
                dangerouslySetInnerHTML={{
                  __html: pricing.bodySection.subtitle,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Faqs faqs={pricing.faqs} />
      <TalkSection />
    </>
  );
};

export default PricingSection;
