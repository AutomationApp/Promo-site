import React from "react";
import FaqRow from "./faq-row";
import Steps from "./steps";
import { useProductTourQuery } from "../../graphql/useProductTourPageQuery";
import CurveShape from "../common/curve-shape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const ProductTourSection = () => {
  const { wpPage } = useProductTourQuery();
  const { productTour } = wpPage;

  const handleScrollIntoView = (sectionId) => {
    const titleElement = document.getElementById(sectionId);
    titleElement.scrollIntoView({ behavior: "smooth" });
  };

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
              <h1 className="font-weight-bold text-white mb-5">
                Level Up Your E-Commerce Game
              </h1>
            </div>
          </div>
          <div className="row mt-10">
            <div
              className="col-12 col-md-6 col-lg-4 text-center lift cursor-pointer"
              data-aos="fade-up"
              //@ts-ignore
              onClick={() => handleScrollIntoView("automations")}
            >
              <div className="icon icon-lg mb-4">
                <FontAwesomeIcon icon={faBolt} size="8x" color="white" />
              </div>

              <h3 className="font-weight-bold text-white">Automations</h3>
            </div>
            <div
              className="col-12 col-md-6 col-lg-4 text-center lift cursor-pointer"
              data-aos="fade-up"
              onClick={() => handleScrollIntoView("orders")}
            >
              <div className="icon icon-lg mb-4">
                <FontAwesomeIcon icon={faUser} size="6x" color="white" />
              </div>

              <h3 className="font-weight-bold text-white">Custom overviews</h3>
            </div>
            <div
              className="col-12 col-md-6 col-lg-4 text-center lift cursor-pointer"
              data-aos="fade-up"
              onClick={() => handleScrollIntoView("crm")}
            >
              <div className="icon icon-lg mb-4">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="5x"
                  color="white"
                />
              </div>

              <h3 className="font-weight-bold text-white">Customer CRM</h3>
            </div>
          </div>
        </div>
      </section>

      <CurveShape />
      <section className="pb-8 mb-md-8">
        <div className="container">
          {productTour.productTourData.map((item) => (
            <FaqRow key={item.id} data={item} />
          ))}
        </div>
      </section>

      <section id="reasons" className="pt-2 pb-9 pb-md-13">
        <div className="container">
          <h2 className="text-center font-weight-bold mb-10">
            9 more reasons why customers love Automation.app
          </h2>
          <div className="row">
            {productTour.stepsData.map((item) => (
              <Steps key={item.id} step={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTourSection;
