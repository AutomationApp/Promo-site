import React from "react";
import CurveShape from "../common/curve-shape";
import AutomationPoints from "../common/automation-points";
import TalkSection from "../common/talk-section";
import useFeatures from "../../hooks/useFeatures";
import LoadingSpinner from "../common/loading-spinner";

const FeaturesSection = () => {
  const { pageData, loading } = useFeatures();

  return (
    <>
      {loading ? (
        <LoadingSpinner height="100vh" />
      ) : (
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
                    <stop
                      offset="1"
                      stop-color="currentColor"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 text-center">
                  <p className="lead text-white">
                    {pageData.acf.hero_section.subtitle}
                  </p>
                  <h1 className="display-2 font-weight-bold text-white mb-5">
                    {pageData.acf.hero_section.title}
                  </h1>
                  <p className="lead text-white">
                    {pageData.acf.hero_section.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <CurveShape />
          <section className="py-8 py-md-10 bg-gray-200" id="about">
            <div className="container-xl">
              <div className="row">
                <div className="col-12 text-center">
                  <a
                    href="#about"
                    className="btn btn-white btn-rounded-circle shadow mt-n12 mt-md-n14"
                    data-toggle="smooth-scroll"
                  >
                    <i className="fe fe-arrow-down"></i>
                  </a>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-12 col-md-3 text-center">
                  <img
                    src={pageData.acf.images_gallery[0].url}
                    alt="..."
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12 col-md-3 text-center">
                  <div className="">
                    <img
                      src={pageData.acf.images_gallery[1].url}
                      alt="..."
                      className="img-fluid rounded"
                    />
                    <img
                      src={pageData.acf.images_gallery[2].url}
                      alt="..."
                      className="img-fluid rounded mt-5"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3 text-center">
                  <img
                    src={pageData.acf.images_gallery[3].url}
                    alt="..."
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-12 col-md-3 text-center">
                  <img
                    src={pageData.acf.images_gallery[4].url}
                    alt="..."
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pt-8 pt-md-11 bg-gray-200">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card card-row shadow-light-lg mb-6">
                    <div className="row no-gutters">
                      <div
                        className="col-12 col-md-6 order-md-2 bg-cover card-img-right"
                        style={{
                          backgroundImage: `url("${pageData.acf.easy_integration.image.url}")`,
                        }}
                      >
                        <img
                          src={pageData.acf.easy_integration.image.url}
                          alt="..."
                          className="img-fluid d-md-none invisible"
                        />

                        <div className="shape shape-left shape-fluid-y svg-shim text-white d-none d-md-block">
                          <svg
                            viewBox="0 0 112 690"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 order-md-1">
                        <div className="card-body">
                          <img
                            src={pageData.acf.easy_integration.icon.url}
                            alt="icon1"
                            className="text-center mb-3"
                            width="40px"
                          />
                          <h3>{pageData.acf.easy_integration.title}</h3>

                          <p className="mb-0 text-muted">
                            {pageData.acf.easy_integration.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-row shadow-light-lg mb-6">
                    <div className="row no-gutters">
                      <div
                        className="col-12 col-md-6 bg-cover card-img-left"
                        style={{
                          backgroundImage: `url("${pageData.acf.automation_engine.image.url}")`,
                        }}
                      >
                        <img
                          src={pageData.acf.automation_engine.image.url}
                          alt="..."
                          className="img-fluid d-md-none invisible"
                        />

                        <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                          <svg
                            viewBox="0 0 112 690"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M116 0H51v172C76 384 0 517 0 517v173h116V0z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card-body">
                          <img
                            src={pageData.acf.automation_engine.icon.url}
                            alt="icon1"
                            className="text-center mb-3"
                            width="40px"
                          />
                          <h3>{pageData.acf.automation_engine.title}</h3>

                          <p className="mb-0 text-muted">
                            {pageData.acf.automation_engine.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card card-row shadow-light-lg mb-6">
                    <div className="row no-gutters">
                      <div
                        className="col-12 col-md-6 order-md-2 bg-cover card-img-right"
                        style={{
                          backgroundImage: `url("${pageData.acf.client_lists.image.url}")`,
                        }}
                      >
                        <img
                          src={pageData.acf.client_lists.image.url}
                          alt="..."
                          className="img-fluid d-md-none invisible"
                        />
                        <div className="shape shape-left shape-fluid-y svg-shim text-white d-none d-md-block">
                          <svg
                            viewBox="0 0 112 690"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 order-md-1">
                        <div className="card-body">
                          <img
                            src={pageData.acf.client_lists.icon.url}
                            alt="icon1"
                            className="text-center mb-3"
                            width="40px"
                          />
                          <h3>{pageData.acf.client_lists.title}</h3>

                          <p className="mb-0 text-muted">
                            {pageData.acf.client_lists.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-row shadow-light-lg mb-6">
                    <div className="row no-gutters">
                      <div
                        className="col-12 col-md-6 bg-cover card-img-left"
                        style={{
                          backgroundImage: `url("${pageData.acf.user_management.image.url}")`,
                        }}
                      >
                        <img
                          src={pageData.acf.user_management.image.url}
                          alt="..."
                          className="img-fluid d-md-none invisible"
                        />
                        <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                          <svg
                            viewBox="0 0 112 690"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M116 0H51v172C76 384 0 517 0 517v173h116V0z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card-body">
                          <img
                            src={pageData.acf.user_management.icon.url}
                            alt="icon1"
                            className="text-center mb-3"
                            width="40px"
                          />
                          <h3>{pageData.acf.user_management.title}</h3>

                          <p className="mb-0 text-muted">
                            {pageData.acf.user_management.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10">
            <AutomationPoints />
          </div>
          <TalkSection />
        </>
      )}
    </>
  );
};

export default FeaturesSection;
