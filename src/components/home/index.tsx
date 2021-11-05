import React from "react";
import HeroImg from "../../assets/img/home/home1.svg";
import Img1 from "../../assets/img/illustrations/illustration-4.png";
import Img2 from "../../assets/img/illustrations/illustration-8.png";
import Img3 from "../../assets/img/illustrations/illustration-7.png";
import Img4 from "../../assets/img/illustrations/illustration-6.png";
import Bg1 from "../../assets/img/photos/photo-1.jpg";
import detail1 from "../../assets/img/home/detail1.svg";
import detail2 from "../../assets/img/home/detail2.svg";
import detail3 from "../../assets/img/home/detail3.svg";
import Testimonials from "./testimonials";
import RequestDemo from "./request-demo";
import PricingSection from "./pricing";

const NewHome = () => {
  return (
    <>
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img
                src={HeroImg}
                className="img-fluid "
                alt="Simple E-commerce. Automation & CRM"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div
              className="col-12 col-md-7 col-lg-6 order-md-1"
              data-aos="fade-up"
            >
              <h1 className="display-3 text-center text-md-left">
                Simple <span className="text-primary">E-commerce</span>. <br />
                Automation & CRM
              </h1>

              <p className="lead text-center text-md-left color-green padding-none">
                Increase Revenue, win loyal customers -
                <span className="font-weight-bolder"> Automate</span>
              </p>
              <p className="lead text-center text-md-left color-blue padding-none">
                workflows with new levels of order
                <span className="font-weight-bolder"> Control</span>
              </p>
              <p className="lead text-center text-md-left color-orange padding-none mb-6">
                Personalise User Journeys with powerful
                <span className="font-weight-bolder"> CRM</span>
              </p>

              <div className="text-center text-md-left">
                <button className="btn btn-primary shadow lift mr-1">
                  Start for free
                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </button>
                <button className="btn btn-outline-primary lift ml-2">
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 pt-md-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="font-weight-bold">
                The hub for all your{" "}
                <span className="text-primary">communication and work</span>.
              </h2>

              <p className="font-size-lg text-muted mb-9">
                Landkit is where your team can come together to get stuff done.
                Chat, files, wikis, documentation, and more.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="row align-items-center mb-8" data-aos="fade-up">
                <div className="col-4 col-lg-5">
                  <img src={Img1} alt="Conversations" className="img-fluid" />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="font-weight-bold mb-2">Conversations</h3>

                  <p className="text-gray-700 mb-0">
                    Communicate with your team in public or private chats with
                    individuals or groups.
                  </p>
                </div>
              </div>

              <div className="row align-items-center mb-8" data-aos="fade-up">
                <div className="col-4 col-lg-5">
                  <img src={Img2} alt="Unified" className="img-fluid" />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="font-weight-bold mb-2">Unified</h3>

                  <p className="text-gray-700 mb-0">
                    Keep everything in one place and feel at peace and organized
                    rather than scattered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row align-items-center mb-8" data-aos="fade-up">
                <div className="col-4 col-lg-5">
                  <img src={Img3} alt="Analytics" className="img-fluid" />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="font-weight-bold mb-2">Analytics</h3>

                  <p className="text-gray-700 mb-0">
                    Keep track of what's happening in your company from a
                    centralized dashboard.
                  </p>
                </div>
              </div>

              <div className="row align-items-center mb-8" data-aos="fade-up">
                <div className="col-4 col-lg-5">
                  <img src={Img4} alt="Permissions" className="img-fluid" />
                </div>
                <div className="col-8 col-lg-7">
                  <h3 className="font-weight-bold mb-2">Permissions</h3>

                  <p className="text-gray-700 mb-0">
                    Control who has access to which projects and data through
                    our control panel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10 back1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <span className="badge badge-pill badge-success-soft mb-3">
                <span className="h6 text-uppercase">Automate</span>
              </span>

              <h2>
                Increase Revenue &
                <span className="text-success"> Win loyal customers</span>.
              </h2>

              <p className="font-size-lg text-gray-700 mb-6">
                Marketing Automation delivers great results when you stay
                relevant through personalised and well timed messaging. Long
                lasting customer engagement is strengthened through well-timed
                valuable communication
              </p>

              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success text-nowrap">Send Email & SMS</p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success mb-lg-0 text-nowrap">
                      Pre-defined recipes
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <span className="badge badge-rounded-circle badge-success-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </span>

                    <p className="text-success text-nowrap">
                      100+ triggering options
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-success-soft mr-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="text-success mb-0 text-nowrap">
                      Custom email templates
                    </p>
                  </div>
                </div>
              </div>
              <button className="btn btn-green shadow lift mt-8 px-6">
                Automation features
                <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
              </button>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <img
                  src={detail1}
                  alt="Automation features"
                  className="img-fluid mb-4 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10 bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6">
              <div className="row">
                <img
                  src={detail2}
                  alt="Automate"
                  className="img-fluid mb-4 rounded"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <span className="badge badge-pill badge-blue-soft mb-3">
                <span className="h6 text-uppercase">Overview</span>
              </span>

              <h2>
                Process orders,
                <span className="color-blue"> the way you should</span>.
              </h2>

              <p className="font-size-lg text-gray-700 mb-6">
                Business Process optimisation can improve workflows. With new
                levels of Order Control through you have easily accessible
                information and get to process orders and customers in a way
                that is 100% tailored to your business.
              </p>

              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-blue-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-blue text-nowrap">Auto filtration</p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-blue-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-blue mb-lg-0 text-nowrap">
                      Set views with data
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <span className="badge badge-rounded-circle badge-blue-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </span>

                    <p className="color-blue text-nowrap">
                      Save custom filtrations
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-blue-soft mr-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-blue mb-0 text-nowrap">
                      Filtering is knowledge
                    </p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary shadow lift mt-8 px-6">
                Automation features
                <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10 back2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <span className="badge badge-pill badge-orange-soft mb-3">
                <span className="h6 text-uppercase">CRM</span>
              </span>

              <h2>
                Improve understanding of customers
                <span className="color-orange"> & your business</span>.
              </h2>

              <p className="font-size-lg text-gray-700 mb-6">
                A CRM that is focused on E-commerce, automation & delivering
                personalised User Journeys from a lean CRM. , Analyse Customers,
              </p>

              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-orange-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-orange text-nowrap">
                      Set automatic tags
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-orange-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-orange mb-lg-0 text-nowrap">
                      Analyse customers
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <span className="badge badge-rounded-circle badge-orange-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </span>

                    <p className="color-orange text-nowrap">
                      Apply automation logic
                    </p>
                  </div>

                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-orange-soft mr-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>

                    <p className="color-orange mb-0 text-nowrap">Manage data</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-orange shadow lift mt-8 px-6">
                Automation features
                <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
              </button>
            </div>
            <div className="col-12 col-md-6 mt-5 md:mt-0">
              <div className="row">
                <img
                  src={detail3}
                  alt="A direct connection is a good connection"
                  className="img-fluid mb-4 rounded"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-10">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2>A direct connection is a good connection</h2>

              <p className="font-size-lg text-muted mb-7 mb-md-9">
                What really sets automation.app apart. You’ll speak directly to
                people who understands your business + helps you set up every
                part of Automation.app.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card card-row shadow-light-lg mb-6">
                <div className="row no-gutters">
                  <div className="col-12 col-md-6">
                    <div className="card-img-slider">
                      <div
                        className="card-img-left w-100 bg-cover"
                        style={{ backgroundImage: `url("${Bg1}")` }}
                      >
                        <img
                          src={Bg1}
                          alt="Company Logo"
                          className="img-fluid d-md-none invisible"
                        />
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
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 position-md-static">
                    <Testimonials />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RequestDemo />
      <PricingSection />
    </>
  );
};

export default NewHome;
