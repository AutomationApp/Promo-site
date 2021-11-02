import React from "react";
import Illus from "../../assets/img/illustrations/illustration-1.png";

const RequestDemo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="py-10">
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
                          src={Illus}
                          alt="Time for a demo?"
                          className="img-fluid mb-3"
                          width="200px"
                        />
                      </div>

                      <h2 className="font-weight-bold text-center mb-1">
                        Time for a demo?
                      </h2>

                      <p className="font-size-lg text-center text-muted mb-6 mb-md-8">
                        A meeting to go over your requirements and solutions{" "}
                      </p>

                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-12 col-md-6">
                            <div className="form-label-group">
                              <input
                                type="text"
                                className="form-control form-control-flush"
                                id="registrationFirstName"
                                placeholder="First name"
                                required
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
                                required
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
                                required
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
                                required
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
    </>
  );
};

export default RequestDemo;
