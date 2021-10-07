import React from "react";
//@ts-ignore
import Img1 from "../../assets/img/photos/photo-10.jpg";
//@ts-ignore
import Img2 from "../../assets/img/photos/photo-12.jpg";
//@ts-ignore
import Img3 from "../../assets/img/photos/photo-9.jpg";
//@ts-ignore
import Img4 from "../../assets/img/photos/photo-11.jpg";
//@ts-ignore
import detail1 from "../../assets/img/home/detail1.jpg";
//@ts-ignore
import detail2 from "../../assets/img/home/detail2.jpg";
//@ts-ignore
import detail3 from "../../assets/img/home/detail3.jpg";
//@ts-ignore
import detail4 from "../../assets/img/home/detail4.jpg";

const DetailsSection = () => {
  return (
    <>
      <section className="py-10 bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <h2>
                Create powerful automations to
                <span className="text-success"> enhance your business</span>.
              </h2>

              <p className="font-size-lg text-gray-700 mb-6">
                Your new E-commerce automation engine. Letting you get
                everything done - automatically.
              </p>

              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success">Send SMS & emails</p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success mb-lg-0">
                      Trigger advanced flows
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </span>

                    <p className="text-success">Customise order overviews</p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mr-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success mb-0">
                      Automate almost anything
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 mt-8 mr-n5" data-aos="fade-up">
                  <img
                    src={Img1}
                    alt="..."
                    className="img-fluid mb-4 rounded"
                  />

                  <img src={Img2} alt="..." className="img-fluid rounded" />
                </div>
                <div className="col-6" data-aos="fade-up" data-aos-delay="100">
                  <img
                    src={Img3}
                    alt="..."
                    className="img-fluid mb-4 rounded"
                  />

                  <img src={Img4} alt="..." className="img-fluid rounded" />
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
                <h2 className="font-weight-bold">
                  <span className="text-primary">WooCommerce</span> 5 Minute
                  Installation
                </h2>

                <p className="font-size-lg text-muted mb-5">
                  Prebuilt integrations lets you get started quickly. From
                  installation to the first automated process, takes as little
                  as 10 minutes with partner systems like WooCommerce. After
                  installation of Automation.app Woo plugin we can automatically
                  sync your orders, clients and more.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-1" data-aos="fade-up">
              <div className="w-100 w-md-130 float-right mb-6 mb-md-0">
                <img src={detail1} className="img-fluid" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h2 className="font-weight-bold">Automation Engine</h2>

              <p className="font-size-lg text-muted mb-5">
                Automate communication, deliver relevant messages using purchase
                information, lifecycle stage, and more. Works well for both
                marketing automation and business process automation.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="w-md-130">
                <img src={detail2} className="img-fluid" alt="..." />
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
                <h2 className="font-weight-bold">List Orders and Clients</h2>

                <p className="font-size-lg text-muted mb-5">
                  Segmentation and order listing is key to lean flows and
                  automation in any E-commerce. With the simple segment
                  filtering, you'll create conditions in no time that lists
                  orders of any specific type. Giving your Automation.app
                  interface a 100% custom interface. Letting you create any list
                  of orders and clients.
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
                <img src={detail3} className="img-fluid" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h2 className="font-weight-bold">Built for Teamwork</h2>

              <p className="font-size-lg text-muted mb-5">
                Invite colleagues and assign tasks to each other - for example,
                you can collaborate with the accounting team, let them have a
                list of orders that might cause complexity or be stopped later
                in the process. - Team setup gives you control over user roles
                and lets each employee build personal automations and segments.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="w-md-130">
                <img src={detail4} className="img-fluid" alt="..." />
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
                  NO CREDIT CARD REQUIRED
                </span>
              </span>

              <h1 className="display-4 text-white">Get started today</h1>

              <p className="font-size-lg text-muted mb-6 mb-md-8">
                Start growing your business with effortless automation.
              </p>

              <a
                href="https://themes.getbootstrap.com/product/landkit/"
                target="_blank"
                className="btn btn-success lift"
              >
                Try it free <i className="fe fe-arrow-right"></i>
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
