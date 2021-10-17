import React from "react";
import FaqRow from "./faq-row";
import Steps from "./steps";
import { useProductTourQuery } from "../../graphql/useProductTourPageQuery";

const ProductTourSection = () => {
  const { wpPage } = useProductTourQuery();
  const { productTour } = wpPage;

  return (
    <>
      <section className="pb-8 mb-md-8">
        <div className="container">
          {productTour.productTourData.map((item) => (
            <FaqRow key={item.id} data={item} />
          ))}
        </div>
      </section>

      <section className="pt-2 pb-9 pb-md-13">
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
