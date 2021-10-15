import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TalkSection = (e) => {
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
    <section className="pt-8 pt-md-11 pb-8 pb-md-14">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="font-weight-bold">Let us hear from you directly!</h2>

            <p className="font-size-lg text-muted mb-7 mb-md-9">
              We always want to hear from you! Let us know how we can best help
              you and we'll do our very best.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-10">
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
                      <div className="form-group mb-5">
                        <label htmlFor="contactName">Full name</label>

                        <input
                          type="text"
                          className="form-control"
                          id="contactName"
                          placeholder="Full name"
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group mb-5">
                        <label htmlFor="contactEmail">Email</label>

                        <input
                          type="email"
                          className="form-control"
                          id="contactEmail"
                          placeholder="hello@domain.com"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mb-7 mb-md-9">
                        <label htmlFor="contactMessage">
                          What can we help you with?
                        </label>

                        <textarea
                          className="form-control"
                          id="contactMessage"
                          placeholder="Tell us what we can help you with!"
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <button type="submit" className="btn btn-primary lift">
                        Send message
                      </button>
                    </div>
                  </div>
                </>
              )}
            </form>
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
  );
};

export default TalkSection;
