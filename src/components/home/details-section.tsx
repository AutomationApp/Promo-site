import React from "react";

const DetailsSection = () => {
  return (
    <>
      <section className="pt-10 pt-lg-9 pb-md-14 pb-lg-15 bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <span className="badge badge-pill badge-success-soft mb-3">
                <span className="h6 text-uppercase">Support</span>
              </span>

              <h2>
                Our friendly support team <br />
                <span className="text-success">
                  will help you with anything
                </span>
                .
              </h2>

              <p className="font-size-lg text-gray-700 mb-6">
                We aim to take care of you. Need help with installation, find a
                bug, or just need a clarifiction about our documentation? We'll
                be there to lend a helping hand.
              </p>

              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success">Speedy</p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success mb-lg-0">Global team</p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </span>

                    <p className="text-success">5-star reviews</p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mr-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success mb-0">Good looking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 mt-8 mr-n5" data-aos="fade-up">
                  <img
                    src="assets/img/photos/photo-10.jpg"
                    alt="..."
                    className="img-fluid mb-4 rounded"
                  />

                  <img
                    src="assets/img/photos/photo-12.jpg"
                    alt="..."
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-6" data-aos="fade-up" data-aos-delay="100">
                  <img
                    src="assets/img/photos/photo-9.jpg"
                    alt="..."
                    className="img-fluid mb-4 rounded"
                  />

                  <img
                    src="assets/img/photos/photo-11.jpg"
                    alt="..."
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsSection;
