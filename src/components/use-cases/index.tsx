import React from "react";
import CurveShape from "../common/curve-shape";
import CardItem from "./card-item";
import TalkSection from "../common/talk-section";
import AutomationPoints from "../common/automation-points";

const UseCasesSection = ({ useCases }) => {
  const { detailSection } = useCases;
  const { casesHeroSection } = useCases;
  const { services } = useCases;
  return (
    <>
      <section className="py-12 bg-dark" id="welcome">
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
              <p className="lead text-white">{casesHeroSection.tag}</p>
              <h1 className="display-2 font-weight-bold text-white mb-5">
                {casesHeroSection.title}
              </h1>
              <p className="lead text-white">{casesHeroSection.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <CurveShape />

      <section className="py-8 py-md-10" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <a
                href="#about"
                className="btn btn-white btn-rounded-circle shadow mt-n12 mt-md-n14"
                data-toggle="smooth-scroll"
              >
                <i className="fe fe-arrow-down"></i>
              </a>
            </div>
          </div>

          <div className="row">
            {services.map((item) => (
              <CardItem key={item.title} data={item} />
            ))}
          </div>
        </div>
      </section>

      <AutomationPoints detailSection={detailSection} />

      <TalkSection />
    </>
  );
};

export default UseCasesSection;
