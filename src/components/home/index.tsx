import React from "react";
import RequestDemo from "../global-elements/request-demo";
import PricingSection from "../global-elements/pricing";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import CaseStudyItem from "../common/case-studies-item";
import { useCaseStudiesQuery } from "../../graphql/useCaseStudiesQuery";
import USPSection from "../global-elements/usp";
import CaseStudySection from "../global-elements/case-studies";

const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  // autoplaySpeed: 5000,
  // speed: 2000,
  // initialSlide: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const NewHome = ({ home }) => {
  const { communicationHub } = home;
  const { detailsSection } = home;
  // const { caseStudieshome } = home;
  // const { demoFormhome } = home;
  // const { pricingHome } = home;
  // const { automationPointshome } = home;

  // const { allWpCaseStudy } = useCaseStudiesQuery();

  return (
    <>
      <section className="pt-8 pt-md-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2
                className="font-weight-bold"
                dangerouslySetInnerHTML={{ __html: communicationHub.heading }}
              />

              <p className="font-size-lg text-muted mb-9">
                {communicationHub.description}
              </p>
            </div>
          </div>
          <div className="row">
            {communicationHub.points.map((item) => (
              <div key={item.title} className="col-12 col-lg-6">
                <div className="row align-items-center mb-8" data-aos="fade-up">
                  <div className="col-4 col-lg-5">
                    <img
                      src={item.image.sourceUrl}
                      alt="Conversations"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-8 col-lg-7">
                    <h3 className="font-weight-bold mb-2">{item.title}</h3>

                    <p className="text-gray-700 mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10 back1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <span className="badge badge-pill badge-success-soft mb-3">
                <span className="h6 text-uppercase">
                  {detailsSection.item[0].tag}
                </span>
              </span>

              <h2
                dangerouslySetInnerHTML={{
                  __html: detailsSection.item[0].title,
                }}
              />

              <p className="font-size-lg text-gray-700 mb-6">
                {detailsSection.item[0].description}
              </p>

              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success text-nowrap">
                      {detailsSection.item[0].points.point1}
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success mb-lg-0 text-nowrap">
                      {detailsSection.item[0].points.point2}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </span>

                    <p className="text-success text-nowrap">
                      {detailsSection.item[0].points.point3}
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mr-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>
                    <p className="text-success mb-0 text-nowrap">
                      {detailsSection.item[0].points.point4}
                    </p>
                  </div>
                </div>
              </div>
              <AnchorLink to="/product-tour#automations">
                <button className="btn btn-green shadow lift mt-8 px-6">
                  {detailsSection.item[0].buttonText}

                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </button>
              </AnchorLink>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <img
                  src={detailsSection.item[0].image.sourceUrl}
                  alt="Automation features"
                  className="img-fluid mb-4 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10 bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6">
              <div className="row">
                <img
                  src={detailsSection.item[1].image.sourceUrl}
                  alt="Automate"
                  className="img-fluid mb-4 rounded"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <span className="badge badge-pill badge-blue-soft mb-3">
                <span className="h6 text-uppercase">
                  {detailsSection.item[1].tag}
                </span>
              </span>

              <h2
                dangerouslySetInnerHTML={{
                  __html: detailsSection.item[1].title,
                }}
              />

              <p className="font-size-lg text-gray-700 mb-6">
                {detailsSection.item[1].description}
              </p>

              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-blue-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-blue text-nowrap">
                      {detailsSection.item[1].points.point1}
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-blue-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-blue mb-lg-0 text-nowrap">
                      {detailsSection.item[1].points.point2}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <span className="badge badge-rounded-circle badge-blue-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </span>

                    <p className="color-blue text-nowrap">
                      {detailsSection.item[1].points.point3}
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-blue-soft mr-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-blue mb-0 text-nowrap">
                      {detailsSection.item[1].points.point4}
                    </p>
                  </div>
                </div>
              </div>
              <AnchorLink to="/product-tour#orders">
                <button className="btn btn-primary shadow lift mt-8 px-6">
                  {detailsSection.item[1].buttonText}
                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </button>
              </AnchorLink>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10 back2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <span className="badge badge-pill badge-orange-soft mb-3">
                <span className="h6 text-uppercase">
                  {detailsSection.item[2].tag}
                </span>
              </span>

              <h2
                dangerouslySetInnerHTML={{
                  __html: detailsSection.item[2].title,
                }}
              />

              <p className="font-size-lg text-gray-700 mb-6">
                {detailsSection.item[2].description}
              </p>

              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-orange-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-orange text-nowrap">
                      {detailsSection.item[2].points.point1}
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-orange-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-orange mb-lg-0 text-nowrap">
                      {detailsSection.item[2].points.point2}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <span className="badge badge-rounded-circle badge-orange-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </span>

                    <p className="color-orange text-nowrap">
                      {detailsSection.item[2].points.point3}
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-orange-soft mr-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-orange mb-0 text-nowrap">
                      {detailsSection.item[2].points.point4}
                    </p>
                  </div>
                </div>
              </div>
              <AnchorLink to="/product-tour#crm">
                <button className="btn btn-orange shadow lift mt-8 px-6">
                  {detailsSection.item[2].buttonText}
                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </button>
              </AnchorLink>
            </div>
            <div className="col-12 col-md-6 mt-5 md:mt-0">
              <div className="row">
                <img
                  src={detailsSection.item[2].image.sourceUrl}
                  alt="A direct connection is a good connection"
                  className="img-fluid mb-4 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudySection />

      <RequestDemo />

      <PricingSection  />

      <USPSection />

    </>
  );
};

export default NewHome;
