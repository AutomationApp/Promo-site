import React from "react";
import FaqRow from "./faq-row";
import { FaqsRowData, StepsData } from "../../utils/constants";
import Steps from "./steps";

const ProductTourSection = () => {
  return (
    <>
      <section className="pb-8 mb-md-8">
        <div className="container">
          {FaqsRowData.map((item) => (
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
            {StepsData.map((item) => (
              <Steps key={item.id} step={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTourSection;
