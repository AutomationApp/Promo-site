import React from "react";
//@ts-ignore
import Img4 from "../../assets/img/illustrations/illustration-6.png";
//@ts-ignore
import ContactImg from "../../assets/img/illustrations/illustration-1.png";
import CurveShape from "../common/curve-shape";
import { AutomationData } from "../../utils/constants";
import CardItem from "./card-item";
import TalkSection from "../common/talk-section";

const UseCasesSection = () => {
  return (
    <>
      <section className="py-12 bg-dark" id="welcome">
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
              <p className="lead text-white">AUTOMATE WHATEVER YOU WANT</p>
              <h1 className="display-2 font-weight-bold text-white mb-5">
                Use Cases
              </h1>
              <p className="lead text-white">
                Marketing • Sales • Follow-ups • Internal Processes
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurveShape />

      <section className="py-8 py-md-10" id="about">
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

          <div className="row">
            {AutomationData.map((item) => (
              <CardItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-md-6 col-lg-5" data-aos="fade-up">
              <h2 className="font-weight-bold">
                Build lasting automations
                <br />
                <span className="text-success">with one simple app</span>.
              </h2>

              <p className="font-size-lg text-gray-700">
                Using Automation.app you can streamline communication and build
                a set of structured flows that runs a large part of your daily
                business.
              </p>

              <div className="col-12 col-md-auto">
                <a href="overview.html" className="btn btn-primary shadow lift">
                  Get started
                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1 mt-5 mt-md-0">
              <div
                className="card card-border border-success shadow-lg mb-5"
                data-aos="fade-up"
              >
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          No-code Automation Platform
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Simple complete solution for handling orders,
                          customers and automate workflows
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check"></i>
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          Automation Actions for Everything
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Multidepartment flow support. Automate business
                          processes and build marketing automation
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check"></i>
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          User-first Development
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Your needs are our command. Send us an email to get
                          your feature online
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check"></i>
                      </div>
                    </div>
                    <div className="list-group-item d-flex align-items-center">
                      <div className="mr-auto">
                        <p className="font-weight-bold mb-1">
                          Enhanced Business Overview
                        </p>

                        <p className="font-size-sm text-muted mb-0">
                          Role based data access for teams with views and
                          segmentation for orders and clients
                        </p>
                      </div>

                      <div className="badge badge-rounded-circle badge-success-soft ml-4">
                        <i className="fe fe-check"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TalkSection />
    </>
  );
};

export default UseCasesSection;
