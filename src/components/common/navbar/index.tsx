import React, { useState } from "react";
//@ts-ignore
import Brand from "../../../assets/img/brand.svg";
import { Link } from "gatsby";

const NavMenu = () => {
  const [dropDown1, setDropDown1] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropDown1(false);
    } else {
      setDropDown1(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropDown1(false);
    } else {
      setDropDown1(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Brand} className="navbar-brand-img" alt="..." />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setNavbarMenu(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${navbarMenu ? "show" : null}`}
          id="navbarCollapse"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavbarMenu(false)}
          >
            <i className="fe fe-x"></i>
          </button>

          <ul className="navbar-nav ml-auto">
            <li
              className="nav-item dropdown"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link className="nav-link dropdown-toggle" to="/product-tour">
                Product Tour
              </Link>

              <div
                className={`${
                  dropDown1
                    ? "dropdown-menu dropdown-menu-md show"
                    : "dropdown-menu dropdown-menu-md"
                }`}
                aria-labelledby="navbarLandings"
              >
                <div className="list-group list-group-flush">
                  <Link className="list-group-item" to="/product-tour">
                    <div className="icon icon-sm text-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M0 0h24v24H0z" />
                          <path
                            d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z"
                            fill="#335EEA"
                            opacity=".3"
                          />
                          <path
                            d="M11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z"
                            fill="#335EEA"
                          />
                          <rect
                            fill="#335EEA"
                            opacity=".3"
                            x="7"
                            y="10"
                            width="5"
                            height="2"
                            rx="1"
                          />
                          <rect
                            fill="#335EEA"
                            opacity=".3"
                            x="7"
                            y="14"
                            width="9"
                            height="2"
                            rx="1"
                          />
                        </g>
                      </svg>
                    </div>

                    <div className="ml-4">
                      <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                        Documentation
                      </h6>

                      <p className="font-size-sm text-gray-700 mb-0">
                        Customizing and building
                      </p>
                    </div>
                  </Link>

                  <Link className="list-group-item" to="/product-tour">
                    <div className="icon icon-sm text-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M0 0h24v24H0z" />
                          <rect
                            fill="#335EEA"
                            x="4"
                            y="4"
                            width="7"
                            height="7"
                            rx="1.5"
                          />
                          <path
                            d="M5.5 13h4a1.5 1.5 0 011.5 1.5v4A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-4A1.5 1.5 0 015.5 13zm9-9h4A1.5 1.5 0 0120 5.5v4a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 0113 9.5v-4A1.5 1.5 0 0114.5 4zm0 9h4a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4a1.5 1.5 0 011.5-1.5z"
                            fill="#335EEA"
                            opacity=".3"
                          />
                        </g>
                      </svg>
                    </div>

                    <div className="ml-4">
                      <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                        Components
                      </h6>

                      <p className="font-size-sm text-gray-700 mb-0">
                        Full list of components
                      </p>
                    </div>
                  </Link>
                  <Link className="list-group-item" to="/product-tour">
                    <div className="icon icon-sm text-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M0 0h24v24H0z" />
                          <path
                            d="M5.857 2h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0120 7.529v12.554c0 1.79-.02 1.917-1.857 1.917H5.857C4.02 22 4 21.874 4 20.083V3.917C4 2.127 4.02 2 5.857 2z"
                            fill="#335EEA"
                            opacity=".3"
                          />
                          <rect
                            fill="#335EEA"
                            x="6"
                            y="11"
                            width="9"
                            height="2"
                            rx="1"
                          />
                          <rect
                            fill="#335EEA"
                            x="6"
                            y="15"
                            width="5"
                            height="2"
                            rx="1"
                          />
                        </g>
                      </svg>
                    </div>

                    <div className="ml-4">
                      <h6 className="font-weight-bold text-uppercase text-primary mb-0">
                        Changelog
                      </h6>

                      <p className="font-size-sm text-gray-700 mb-0">
                        Keep track of changes
                      </p>
                    </div>

                    <span className="badge badge-pill badge-primary-soft ml-auto">
                      1.2.2
                    </span>
                  </Link>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/cases">
                Use cases
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="ml-auto flex">
            <a
              className="navbar-btn btn btn-sm btn-outline-primary lift mr-2"
              href="https://themes.getbootstrap.com/product/landkit/"
              target="_blank"
            >
              Sign in
            </a>
            <a
              className="navbar-btn btn btn-sm btn-primary lift"
              href="https://themes.getbootstrap.com/product/landkit/"
              target="_blank"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
