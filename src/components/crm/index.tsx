import React from "react";
import Slider from "react-slick";
import CaseStudyItem from "../common/case-studies-item";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
import { useCaseStudiesQuery } from "../../graphql/useCaseStudiesQuery";
import RequestDemo from "../home/request-demo";
import PricingSection from "../home/pricing";

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
  const { allWpCaseStudy } = useCaseStudiesQuery();
  const { features } = crm;
  const { caseStudies } = crm;
  const { demoForm } = crm;
  const { pricing } = crm;
  const { automationPoints } = crm;
  console.log(caseStudies, "features testing");

  return (
    <section className="crmdetails pt-8 pt-md-10">
      <div className="container">
        {features?.map((item, index) => (
          <div
            className="row align-items-center justify-content-between mt-10"
            key={index}
          >
            <div
              className={`col-12 col-md-6 ${
                index % 2 === 0 ? "order-0" : "order-2"
              }`}
            >
              <h2 dangerouslySetInnerHTML={{ __html: item?.heading }} />
              <p className="font-size-md text-gray-700 mb-6">
                {item.description}
              </p>
              {item.button && (
                <button className="btn btn-outline-primary lift ml-2">
                  {item.button}
                </button>
              )}
            </div>
            {item?.image?.sourceUrl && (
              <div className="col-12 col-md-6 ">
                <img
                  src={item?.image?.sourceUrl}
                  alt="Automate"
                  className="img-fluid mb-4 rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {caseStudies?.title && caseStudies?.description && (
        <section className="pt-8 pb-8">
          <div className="container">
            <div className="row justify-content-center mt-10">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <h2>{caseStudies?.title}</h2>

                <p className="font-size-lg text-muted mb-7 mb-md-9">
                  {caseStudies?.description}
                </p>
              </div>
            </div>
            <Slider {...settings}>
              {allWpCaseStudy?.nodes?.map((item) => (
                <CaseStudyItem key={item.id} data={item} />
              ))}
            </Slider>
          </div>
        </section>
      )}
      {demoForm?.title && <RequestDemo demoForm={demoForm} />}
      {pricing?.title && <PricingSection pricing={pricing} />}

      {automationPoints && (
        <section className="pt-15 pb-12 bg-dark">
          <div className="container pt-8 pt-md-11">
            <div className="row">
              {automationPoints?.map((item) => (
                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    {item?.icon?.sourceUrl && (
                      <div className="">
                        <img src={item.icon.sourceUrl} alt={item.title} />
                      </div>
                    )}
                    <div className="ml-5">
                      <h4 className="text-white">{item.title}</h4>

                      <p className="text-muted mb-6 mb-md-8">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default CompleteDetails;
