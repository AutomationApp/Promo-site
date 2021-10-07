import React from "react";
//@ts-ignore
import Img1 from "../../assets/img/illustrations/illustration-4.png";
//@ts-ignore
import Img2 from "../../assets/img/illustrations/illustration-8.png";
//@ts-ignore
import Img3 from "../../assets/img/illustrations/illustration-7.png";
//@ts-ignore
import Img4 from "../../assets/img/illustrations/illustration-6.png";
//@ts-ignore
import ContactImg from "../../assets/img/illustrations/illustration-1.png";

const UseCasesSection = () => {
  return (
    <>
      <section className="py-10 py-md-14 bg-dark" id="welcome">
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
                <stop offset="1" stop-color="currentColor" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="display-2 font-weight-bold text-white">
                Teamwork Made Easy.
              </h1>

              <p className="lead text-white mb-8">
                Forward-thinking businesses use Landkit to create collaborative
                workspaces for their projects.
              </p>

              <a href="#!" className="btn btn-white shadow lift">
                Create your workspace
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
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

      <section className="pt-8 pt-md-10" id="about">
        <div className="container">
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

      <section className="py-8 py-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-5" data-aos="fade-up">
              <h2 className="font-weight-bold">
                Replace your microservices <br />
                <span className="text-success">with one simple app</span>.
              </h2>

              <p className="font-size-lg text-gray-700">
                Using our single innovative platform you can remove all your
                communication dependencies and the messy rat's nest of email,
                calls, texts, wikis, and apps you currently have.
              </p>

              <div className="col-12 col-md-auto">
                <a href="overview.html" className="btn btn-primary shadow lift">
                  Get started
                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 offset-lg-1">
              <div
                className="card card-border border-success shadow-lg mb-5"
                data-aos="fade-up"
              >
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          Unlimited users. One price.
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          We don't charge per seat, just per service.
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check"></i>
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          Guaranteed 100% uptime
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Our server network never goes down.
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check"></i>
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          Lifetime storage *
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          We store all your data forever. No extra charge.
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check"></i>
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          256-bit encryption
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Keep your communication and data safe.
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-size-sm text-center text-gray-500 mb-0">
                * Limited to the life of the company
              </p>
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
      <section className="py-11 bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div
                className="card card-border border-primary shadow-light-lg"
                data-jarallax-element="-40"
              >
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-12 col-xl-11">
                      <div className="text-center">
                        <img
                          src={ContactImg}
                          alt="..."
                          className="img-fluid mb-3"
                          style={{ width: "200px" }}
                        />
                      </div>

                      <h2 className="font-weight-bold text-center mb-1">
                        Schedule a demo with us
                      </h2>

                      <p className="font-size-lg text-center text-muted mb-6 mb-md-8">
                        We can help you solve company communication.
                      </p>

                      <form>
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <div className="form-label-group">
                              <input
                                type="text"
                                className="form-control form-control-flush"
                                id="registrationFirstName"
                                placeholder="First name"
                              />
                              <label htmlFor="registrationFirstName">
                                First name
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-label-group">
                              <input
                                type="text"
                                className="form-control form-control-flush"
                                id="registrationLastName"
                                placeholder="Last name"
                              />
                              <label htmlFor="registrationLastName">
                                Last name
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <div className="form-label-group">
                              <input
                                type="email"
                                className="form-control form-control-flush"
                                id="registrationEmail"
                                placeholder="Email"
                              />
                              <label htmlFor="registrationEmail">Email</label>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-label-group">
                              <input
                                type="password"
                                className="form-control form-control-flush"
                                id="registrationPassword"
                                placeholder="Password"
                              />
                              <label htmlFor="registrationPassword">
                                Password
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <button className="btn btn-block btn-primary mt-3 lift">
                              Request a demo
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
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

export default UseCasesSection;
