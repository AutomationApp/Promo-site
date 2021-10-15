import React from "react";

const Faqs = ({ faqs }) => {
  return (
    <section className="py-8 py-md-11 bg-white border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-md-8 text-center">
            <span className="badge badge-pill badge-primary-desat-soft mb-3">
              <span className="h6 text-uppercase">FAQ</span>
            </span>

            <h2>{faqs.title}</h2>

            <p className="font-size-lg text-muted mb-7 mb-md-9">
              {faqs.subtitle}
            </p>
          </div>
        </div>

        <div className="row">
          {faqs.faqs.map((item) => (
            <div key={item.title} className="col-12 col-md-6">
              <h3 dangerouslySetInnerHTML={{ __html: item.question }} />

              <p
                className="text-gray-800 mb-6 mb-md-8"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
