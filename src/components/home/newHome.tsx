import React from "react";
import HeroImg from "../../assets/img/home/home1.png";
import Img1 from "../../assets/img/illustrations/illustration-4.png";
import Img2 from "../../assets/img/illustrations/illustration-8.png";
import Img3 from "../../assets/img/illustrations/illustration-7.png";
import Img4 from "../../assets/img/illustrations/illustration-6.png";
import Bg1 from "../../assets/img/photos/photo-1.jpg";
import detail1 from "../../assets/img/home/detail1.png";
import Testimonials from "./testimonials";

const NewHome = () => {
  return (
    <>
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img
                src={HeroImg}
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
                <a
                  href="overview.html"
                  className="btn btn-primary shadow lift mr-1"
                >
                  Start for free
                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </a>
                <a
                  href="docs/index.html"
                  className="btn btn-outline-primary lift ml-2"
                >
                  Book a demo
                </a>
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
                  <img src={Img1} alt="..." className="img-fluid" />
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
                  <img src={Img2} alt="..." className="img-fluid" />
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
                  <img src={Img3} alt="..." className="img-fluid" />
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
                  <img src={Img4} alt="..." className="img-fluid" />
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
                <img
                  src={detail1}
                  alt="..."
                  className="img-fluid mb-4 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pt-md-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2>Our customers are our biggest fans.</h2>

              <p className="font-size-lg text-muted mb-7 mb-md-9">
                We don't like to brag, but we don't mind letting our customers
                do it for us. Here are a few nice things folks have said about
                our themes over the years.
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
                          alt="..."
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
    </>
  );
};

export default NewHome;
