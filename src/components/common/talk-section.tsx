import React from "react";

const TalkSection = (e) => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group mb-5">
                    <label htmlFor="contactName">Full name</label>

                    <input
                      type="text"
                      className="form-control"
                      id="contactName"
                      placeholder="Full name"
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
                    ></textarea>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkSection;
