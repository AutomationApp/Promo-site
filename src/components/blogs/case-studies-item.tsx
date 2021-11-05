import React from "react";
import Img1 from "../../assets/img/photos/photo-26.jpg";
import Img2 from "../../assets/img/photos/photo-1.jpg";
import AvatarImg from "../../assets/img/avatars/avatar-2.jpg";

const CaseStudyItem = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card card-row shadow-light-lg mb-6">
          <div className="row no-gutters">
            <div className="col-12 col-md-6">
              <div className="card-img-slider">
                <div
                  className="card-img-left w-100 bg-cover"
                  style={{ backgroundImage: `url("${Img1}")` }}
                >
                  <img
                    src={Img1}
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
                  ></path>
                </svg>
              </div>
            </div>
            <div className="col-12 col-md-6 position-static">
              <div className="position-static flickity-enabled is-draggable">
                <div
                  className="flickity-viewport"
                  style={{ height: "375px", touchAction: "pan-y" }}
                >
                  <div className="flickity-slider">
                    <div className="w-100 is-selected">
                      <a className="card-body" href="#!">
                        <h3>
                          Spending Time Outside the Office with Coworkers Is
                          Great for Productivity.
                        </h3>

                        <p className="mb-0 text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Duis nec condimentum quam. Fusce pellentesque
                          faucibus lorem at viverra. Integer at feugiat odio. In
                          placerat euismod risus proin erat purus.
                        </p>
                      </a>

                      <div className="card-meta mt-auto">
                        <hr className="card-meta-divider" />

                        <div className="avatar avatar-sm mr-2">
                          <img
                            src={AvatarImg}
                            alt="Person"
                            className="avatar-img rounded-circle"
                          />
                        </div>

                        <h6 className="text-uppercase text-muted mr-2 mb-0">
                          Adolfo Hess
                        </h6>

                        <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                          <time dateTime="2019-05-02">May 02</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyItem;
