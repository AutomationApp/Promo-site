import React from "react";
import Slider from "react-slick";
import CaseStudyItem from "../common/case-studies-item";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
import { useCaseStudiesQuery } from "../../graphql/useCaseStudiesQuery";
import RequestDemo from "../home/request-demo";
import PricingSection from "../home/pricing";
import { Link } from "gatsby";
import { usePreFooterPricingQuery } from "../../graphql/usePreFooterPricingQuery";
import { usePreFooterUSPsQuery } from "../../graphql/usePreFooterUSPsQuery";

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
  // const { pricing } = crm;
  // const { automationPoints } = crm;

  // global pricing elements
  const {allWpGlobalElement: {nodes}} = usePreFooterPricingQuery();
  const pricing = nodes[0].globalPricing.prefooterPricing;
  // global usps elements
  const {allWpGlobalElement} = usePreFooterUSPsQuery();
  const automationPoints = allWpGlobalElement.nodes[0].globalUsps.stepsData;

  return (
    <section className="crmdetails pt-8 pb-0 pt-md-3">
      <div className="features pb-10">
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
                className={`w-75 mx-sm-auto mx-md-0 w-md-75 ${
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

      {/* {automationPoints && (
      <section id="reasons" className="pt-2 pb-9 pb-md-13">
        <div className="container">
          <div className="row">
            {automationPoints.map((item) => (
              <div className="col-12 col-md-4 mt-md-10">
                <div className="row">
                  <div className="col-auto col-md-12 mb-md-1">
                    <img src={item.icon.sourceUrl} alt={item.title} width="50px" />
                  </div>
                  <div className="col col-md-12 ml-n5 ml-md-0">
                    <h3>{item.title}</h3>
          
                    <p className="text-muted mb-6 mb-md-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )} */}
      {automationPoints && (
        <section className="pt-15 pb-12 bg-dark">
          <div className="container pt-8">
            <div className="row">
              {automationPoints?.map((item) => (
                <div className="col-12 col-md-4 mt-md-8">
                  <div className="d-flex">
                    {item?.icon?.sourceUrl && (
                      <div className="">
                        <img src={item.icon.sourceUrl} alt={item.title} className="svgwhiteInvert" />
                      </div>
                    )}
                    <div className="ml-5">
                      <h4 className="text-white">{item.title}</h4>

                      <p className="text-muted mb-6 mb-md-0">
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
