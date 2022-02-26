import React from "react";
import Slider from "react-slick";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
import { useCaseStudiesQuery } from "../../graphql/useCaseStudiesQuery";
import RequestDemo from "../global-elements/request-demo";
import PricingSection from "../global-elements/pricing";
import { Link } from "gatsby";
import USPSection from "../global-elements/usp";
import CaseStudySection from "../global-elements/case-studies";

const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const CompleteDetails = ({ crm }) => {
  const { features } = crm;
  // const { allWpCaseStudy } = useCaseStudiesQuery();
  // const { caseStudies } = crm;
  // const { demoForm } = crm;
  // const { pricing } = crm;
  // const { automationPoints } = crm;

  return (
    <section className="crmdetails pt-8 pb-0 pt-md-3">
      <div className="features container pb-0">
        {features?.map((item, index) => (
          <div
            className="row align-items-center justify-content-between mt-10"
            key={index}
          >
            <div
              className={`col-12  order-sm-0 col-md-6 ${
                index % 2 === 0 ? "order-md-0 ml-auto" : "order-md-2 mr-auto"
              }`}
            >
              <div
                // className={`w-75 mx-sm-auto mx-md-0 w-md-75 ${
                className={`mx-sm-auto mx-md-0 ${
                  index % 2 === 0 ? "ml-md-auto" : "mr-md-auto"
                }`}
              >
                <h2 dangerouslySetInnerHTML={{ __html: item?.heading }} />
                <p className="font-size-md text-gray-700 mb-6">
                  {item.description}
                </p>
                {item.button && item.buttonLink && (
                  <Link to={item.buttonLink.url}>
                    <button className="btn btn-outline-primary lift ml-2">
                      {item.button}
                    </button>
                  </Link>
                )}
              </div>
            </div>
            {item?.image?.sourceUrl && (
              <div className="col-12 order-sm-1 col-md-6 ">
                <img
                  src={item?.image?.sourceUrl}
                  alt="Automate"
                  // className="img-fluid mb-4 rounded"
                  className={`img-fluid mb-4 rounded ${
                    index % 2 === 0 ? "mw-lg-140" : "mw-lg-130 ml-lg-n12"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <CaseStudySection />

      <RequestDemo />

      <PricingSection  />

      <USPSection />
    </section>
  );
};

export default CompleteDetails;
