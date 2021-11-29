import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestDemo = ({ demoForm }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("fullname", name);
    data.append("email", email);
    data.append("message", message);

    const url = `${process.env.GATSBY_API_URL}/wp-json/contact-form-7/v1/contact-forms/27/feedback`;

    axios
      .post(url, data)
      .then(({ data }: any) => {
        if (data.status === "mail_sent") {
          toast.success("Success!");
        } else {
          toast.error("failed!");
        }
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <section id="demo" className="py-10">
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
                          src={demoForm.image.sourceUrl}
                          alt="Time for a demo?"
                          className="img-fluid mb-3"
                          width="200px"
                        />
                      </div>

                      <h2 className="font-weight-bold text-center mb-1">
                        {demoForm.title}
                      </h2>

                      <p className="font-size-lg text-center text-muted mb-6 mb-md-8">
                        {demoForm.subtitle}
                      </p>

                      <form onSubmit={handleSubmit}>
                        {loading ? (
                          <div className="row h-100 justify-content-center align-items-center">
                            <div className="spinner-grow" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="row">
                              <div className="col-12 col-md-6">
                                <div className="form-label-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="contactName"
                                    placeholder="Full name"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                  />
                                  <label htmlFor="contactName">Full name</label>
                                </div>
                              </div>
                              <div className="col-12 col-md-6">
                                <div className="form-label-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="contactEmail"
                                    placeholder="hello@domain.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                  <label htmlFor="contactEmail">Email</label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className="form-label-group">
                                  <textarea
                                    className="form-control"
                                    id="contactMessage"
                                    placeholder="Tell us what we can help you with!"
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                  />
                                  <label htmlFor="contactMessage">
                                    What can we help you with?
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <button className="btn btn-block btn-primary mt-3 lift">
                                  {demoForm.buttonText}
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    </>
  );
};

export default RequestDemo;
