import React from "react";
import Img1 from "../../assets/img/photos/photo-1.jpg";
import Img2 from "../../assets/img/photos/photo-26.jpg";

const CaseStudies = () => {
  return (
    <>
      <section className="pt-7 pt-md-10">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md">
              <h3 className="mb-0">Case Studies</h3>

              <p className="mb-0 text-muted">In-depth looks at our work.</p>
            </div>
            <div className="col-12 col-md-auto">
              <a
                href="#!"
                className="btn btn-sm btn-outline-gray-300 d-none d-md-inline"
              >
                View all
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card card-row shadow-light-lg mb-6">
                <div className="row no-gutters">
                  <div className="col-12 col-md-6">
                    <div
                      className="card-img-slider flickity-enabled is-fade"
                      data-flickity='{"fade": true, "imagesLoaded": true, "pageDots": false, "prevNextButtons": false, "asNavFor": "#blogSlider", "draggable": false}'
                      tabIndex={0}
                    >
                      <div
                        className="flickity-viewport"
                        style={{ height: "375px", touchAction: "pan-y" }}
                      >
                        <div
                          className="flickity-slider"
                          style={{
                            left: "0px",
                            transform: "translateX(50%)",
                          }}
                        >
                          <a
                            className="card-img-left w-100 bg-cover is-selected is-nav-selected"
                            style={{
                              backgroundImage: `url("${Img1}")`,
                              position: "absolute",
                              left: "50%",
                              opacity: 1,
                            }}
                            href="#!"
                          >
                            <img
                              src="assets/img/photos/photo-1.jpg"
                              alt="..."
                              className="img-fluid d-md-none invisible"
                            />
                          </a>
                          <a
                            className="card-img-left w-100 bg-cover"
                            style={{
                              backgroundImage: `url("${Img2}")`,
                              position: "absolute",
                              left: "50%",
                              opacity: 1,
                            }}
                            href="#!"
                            aria-hidden="true"
                          >
                            <img
                              src="assets/img/photos/photo-26.jpg"
                              alt="..."
                              className="img-fluid d-md-none invisible"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                      <svg
                        viewBox="0 0 112 690"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M116 0H51v172C76 384 0 517 0 517v173h116V0z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 position-static">
                    <div
                      className="position-static flickity-enabled is-draggable"
                      data-flickity='{"wrapAround": true, "pageDots": false, "imagesLoaded": true, "adaptiveHeight": true}'
                      id="blogSlider"
                      tabIndex={0}
                    >
                      <div
                        className="flickity-viewport"
                        style={{ height: "375px", touchAction: "pan-y" }}
                      >
                        <div
                          className="flickity-slider"
                          style={{ left: "0px", transform: "translateX(0%)" }}
                        >
                          <div
                            className="w-100 is-selected"
                            style={{ position: "absolute", left: "0%" }}
                          >
                            <a className="card-body" href="#!">
                              <h3>
                                Spending Time Outside the Office with Coworkers
                                Is Great for Productivity.
                              </h3>

                              <p className="mb-0 text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis nec condimentum quam.
                                Fusce pellentesque faucibus lorem at viverra.
                                Integer at feugiat odio. In placerat euismod
                                risus proin erat purus.
                              </p>
                            </a>

                            <a className="card-meta mt-auto" href="#!">
                              <hr className="card-meta-divider" />

                              <div className="avatar avatar-sm mr-2">
                                <img
                                  src="assets/img/avatars/avatar-2.jpg"
                                  alt="..."
                                  className="avatar-img rounded-circle"
                                />
                              </div>

                              <h6 className="text-uppercase text-muted mr-2 mb-0">
                                Adolfo Hess
                              </h6>

                              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                <time dateTime="2019-05-02">May 02</time>
                              </p>
                            </a>
                          </div>
                          <div
                            className="w-100"
                            style={{ position: "absolute", left: "100%" }}
                            aria-hidden="true"
                          >
                            <a className="card-body" href="#!">
                              <h3>
                                Working in Cafes Doesn't Inspire You. It Kills
                                Your Output and Costs Money.
                              </h3>

                              <p className="mb-0 text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Duis nec condimentum quam.
                                Fusce pellentesque faucibus lorem at viverra.
                                Integer at feugiat odio. In placerat euismod
                                risus proin erat purus.
                              </p>
                            </a>

                            <a className="card-meta mt-auto" href="#!">
                              <hr className="card-meta-divider" />

                              <div className="avatar avatar-sm mr-2">
                                <img
                                  src="assets/img/avatars/avatar-1.jpg"
                                  alt="..."
                                  className="avatar-img rounded-circle"
                                />
                              </div>

                              <h6 className="text-uppercase text-muted mr-2 mb-0">
                                Ab Hadley
                              </h6>

                              <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                                <time dateTime="2019-05-02">May 02</time>
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <button
                        className="flickity-button flickity-prev-next-button previous"
                        type="button"
                        aria-label="Previous"
                      >
                        <svg
                          className="flickity-button-icon"
                          viewBox="0 0 100 100"
                        >
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            className="arrow"
                          ></path>
                        </svg>
                      </button>
                      <button
                        className="flickity-button flickity-prev-next-button next"
                        type="button"
                        aria-label="Next"
                      >
                        <svg
                          className="flickity-button-icon"
                          viewBox="0 0 100 100"
                        >
                          <path
                            d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                            className="arrow"
                            transform="translate(100, 100) rotate(180) "
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
