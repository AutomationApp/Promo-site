import React, { useState } from "react";
import FaqItem from "./faq-item";

const FaqRow = ({ data }) => {
  const [imageSource, setImageSource] = useState(data.image1.sourceUrl);

  const changeImageSource = (id) => {
    if (id === 1) {
      setImageSource(data.image1.sourceUrl);
    } else if (id === 2) {
      setImageSource(data.image2.sourceUrl);
    } else if (id === 3) {
      setImageSource(data.image3.sourceUrl);
    } else if (id === 4) {
      setImageSource(data.image4.sourceUrl);
    }
  };

  return (
    <div className="row mt-10">
      <div className="col-12">
        <div className="row mb-4">
          <div className="col">
            <h2 className="font-weight-bold mb-0">{data.title}</h2>

            <p className="font-size-lg text-gray-700 mb-0">{data.content}</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div
              className="card shadow-light-lg accordion mb-5 mb-md-6"
              id="helpAccordionOne"
            >
              <FaqItem faqs={data.faq} changeImageSource={changeImageSource} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="w-md-130">
              <img src={imageSource} className="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqRow;
