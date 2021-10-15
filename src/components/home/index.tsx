import React from "react";
import { useHomePageQuery } from "../../graphql/useHomeQuery";

const DetailsSection = () => {
  const { wpPage } = useHomePageQuery();
  const { home } = wpPage;
  return (
    <>
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img
                src={home.homeHeroSection.image.sourceUrl}
                className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
                alt="..."
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div
              className="col-12 col-md-7 col-lg-6 order-md-1"
              data-aos="fade-up"
            >
              <h1 className="display-3 text-center text-md-left">
                {home.homeHeroSection.title}
              </h1>

              <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                {home.homeHeroSection.description}
              </p>

              <div className="text-center text-md-left">
                <a
                  href="overview.html"
                  className="btn btn-primary shadow lift mr-1"
                >
                  {home.homeHeroSection.button1}
                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </a>
                <a
                  href="docs/index.html"
                  className="btn btn-outline-primary lift ml-2"
                >
                  {home.homeHeroSection.button2}
                </a>
              </div>

              <p className="text-center text-md-left text-muted mt-3 mt-lg-3">
                {home.homeHeroSection.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-200">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <h2
                dangerouslySetInnerHTML={{
                  __html: home.automationSection.title,
                }}
              />

              <p className="font-size-lg text-gray-700 mb-6">
                {home.automationSection.description}
              </p>

              <div className="row">
                {home.automationSection.points.map((item) => (
                  <div className="col-12 col-lg-6">
                    <div className="d-flex">
                      <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                        <i className="fe fe-check"></i>
                      </div>

                      <p className="text-success">{item.point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 mt-8 mr-n5" data-aos="fade-up">
                  <img
                    src={home.automationSection.images[0].sourceUrl}
                    alt="..."
                    className="img-fluid mb-4 rounded"
                  />

                  <img
                    src={home.automationSection.images[1].sourceUrl}
                    alt="..."
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-6" data-aos="fade-up" data-aos-delay="100">
                  <img
                    src={home.automationSection.images[2].sourceUrl}
                    alt="..."
                    className="img-fluid mb-4 rounded"
                  />

                  <img
                    src={home.automationSection.images[3].sourceUrl}
                    alt="..."
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5 order-md-2">
              <div className="w-100 w-md-130 ">
                <h2
                  className="font-weight-bold"
                  dangerouslySetInnerHTML={{
                    __html: home.detailSection1.title,
                  }}
                />

                <p className="font-size-lg text-muted mb-5">
                  {home.detailSection1.description}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-1" data-aos="fade-up">
              <div className="w-100 w-md-130 float-right mb-6 mb-md-0">
                <img
                  src={home.detailSection1.image.sourceUrl}
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h2
                className="font-weight-bold"
                dangerouslySetInnerHTML={{
                  __html: home.detailSection2.title,
                }}
              />
              <p className="font-size-lg text-muted mb-5">
                {home.detailSection2.description}
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="w-md-130">
                <img
                  src={home.detailSection2.image.sourceUrl}
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5 order-md-2">
              <div className="w-100 w-md-130 ">
                <h2
                  className="font-weight-bold"
                  dangerouslySetInnerHTML={{
                    __html: home.detailSection3.title,
                  }}
                />
                <p className="font-size-lg text-muted mb-5">
                  {home.detailSection3.description}
                </p>

                <a
                  href="#!"
                  className="btn btn-primary-desat mb-6 mb-md-0 lift"
                >
                  Learn more <i className="fe fe-arrow-right ml-3"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-1" data-aos="fade-up">
              <div className="w-100 w-md-130 float-right mb-6 mb-md-0">
                <img
                  src={home.detailSection3.image.sourceUrl}
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h2
                className="font-weight-bold"
                dangerouslySetInnerHTML={{
                  __html: home.detailSection4.title,
                }}
              />
              <p className="font-size-lg text-muted mb-5">
                {home.detailSection3.description}
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="w-md-130">
                <img
                  src={home.detailSection3.image.sourceUrl}
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-dark">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <section className="py-8 py-md-11 bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <span className="badge badge-pill btn-success mb-4">
                <span className="h6 font-weight-bold text-uppercase">
                  {home.getStarted.text}
                </span>
              </span>

              <h1 className="display-4 text-white">{home.getStarted.title}</h1>

              <p className="font-size-lg text-muted mb-6 mb-md-8">
                {home.getStarted.subtitle}
              </p>

              <a
                href="https://themes.getbootstrap.com/product/landkit/"
                target="_blank"
                className="btn btn-success lift"
              >
                {home.getStarted.buttonText}{" "}
                <i className="fe fe-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
