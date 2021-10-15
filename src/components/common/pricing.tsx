import React from "react";

const Pricing = ({ pricing }) => {
  return (
    <section className="mt-n8 mt-md-n14">
      <div className="container">
        <div className="form-row">
          <div className="col-12 col-md-4">
            <div className="card shadow-lg mb-6 mb-md-0">
              <div className="card-body">
                <div className="text-center mb-3">
                  <span className="badge badge-pill badge-primary-soft">
                    <span className="h6 text-uppercase">
                      {pricing.starter.title}
                    </span>
                  </span>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="h2 mb-0 mt-2">$</span>
                  <span
                    className="price display-2 mb-0"
                    data-annual="0"
                    data-monthly="0"
                  >
                    {pricing.starter.price}
                  </span>
                  <span className="h2 align-self-end mb-1">/mo</span>
                </div>

                <p className="text-center text-muted mb-5">
                  {pricing.starter.per}
                </p>

                <div className="d-flex">
                  <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </div>
                  {pricing.starter.points.map((item) => (
                    <p key={item.point}>{item.point}</p>
                  ))}
                </div>

                <a href="#!" className="btn btn-block btn-primary-soft">
                  {pricing.starter.buttonText}{" "}
                  <i className="fe fe-arrow-right ml-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card shadow-lg mb-6 mb-md-0">
              <div className="card-body">
                <div className="text-center mb-3">
                  <span className="badge badge-pill badge-primary-soft">
                    <span className="h6 text-uppercase">
                      {pricing.growth.title}
                    </span>
                  </span>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="h2 mb-0 mt-2">$</span>
                  <span
                    className="price display-2 mb-0"
                    data-annual="29"
                    data-monthly="49"
                  >
                    {pricing.growth.price}
                  </span>
                  <span className="h2 align-self-end mb-1">/mo</span>
                </div>

                <p className="text-center text-muted mb-5">
                  {pricing.growth.per}
                </p>

                <div className="d-flex">
                  <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </div>

                  {pricing.growth.points.map((item) => (
                    <p key={item.point}>{item.point}</p>
                  ))}
                </div>

                <a href="#!" className="btn btn-block btn-primary">
                  {pricing.growth.buttonText}{" "}
                  <i className="fe fe-arrow-right ml-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card shadow-lg mb-md-0">
              <div className="card-body">
                <div className="text-center mb-3">
                  <span className="badge badge-pill badge-primary-soft">
                    <span className="h6 text-uppercase">
                      {pricing.premium.title}
                    </span>
                  </span>
                </div>

                <div className="d-flex justify-content-center">
                  <span className="h2 mb-0 mt-2">$</span>
                  <span
                    className="price display-2 mb-0"
                    data-annual="49"
                    data-monthly="69"
                  >
                    {pricing.premium.price}
                  </span>
                  <span className="h2 align-self-end mb-1">/mo</span>
                </div>

                <p className="text-center text-muted mb-5">
                  {pricing.premium.per}
                </p>

                <div className="d-flex">
                  <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                    <i className="fe fe-check"></i>
                  </div>

                  {pricing.premium.points.map((item) => (
                    <p key={item.point}>{item.point}</p>
                  ))}
                </div>

                <a href="#!" className="btn btn-block btn-primary-soft">
                  {pricing.premium.buttonText}{" "}
                  <i className="fe fe-arrow-right ml-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
