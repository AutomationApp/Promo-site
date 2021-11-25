import React, { useState } from "react";
import { Link } from "gatsby";
import CustomDropdownItem from "./navbar/dropdown-item";

const NavBlank = ({ navLinks, landingSection }) => {
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

  const changeNavbarState = () => {
    setNavbarMenu(false);
  };

  return (
    <>
      <nav className="cusNavbar navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="true"
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
              aria-expanded="true"
              aria-label="Toggle navigation"
              onClick={() => setNavbarMenu(false)}
            >
              <i className="fe fe-x"></i>
            </button>

            <ul className="navbar-nav ml-auto">
              {navLinks.map((item) => (
                <>
                  {item.parentId === null ? (
                    <li
                      className={
                        item.label === "Product Tour"
                          ? "nav-item dropdown"
                          : "nav-item"
                      }
                      key={item.id}
                      onMouseEnter={
                        item.label === "Product Tour" ? onMouseEnter : null
                      }
                      onMouseLeave={
                        item.label === "Product Tour" ? onMouseLeave : null
                      }
                    >
                      <Link
                        className={
                          item.label === "Product Tour"
                            ? "nav-link dropdown-toggle"
                            : "nav-link"
                        }
                        onClick={changeNavbarState}
                        title={item.label}
                        to={item.path}
                      >
                        {item.label}
                      </Link>
                      {item.label === "Product Tour" ? (
                        <div
                          className={`${
                            dropDown1
                              ? "dropdown-menu dropdown-menu-md show"
                              : "dropdown-menu dropdown-menu-md"
                          }`}
                          aria-labelledby="navbarLandings"
                        >
                          <div className="list-group list-group-flush">
                            {item.childItems.nodes.map((childItem) => (
                              <CustomDropdownItem
                                key={childItem.id}
                                data={childItem}
                                navState={changeNavbarState}
                              />
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </li>
                  ) : null}
                </>
              ))}
            </ul>

            <div className="ml-auto flex">
              <Link
                to="https://app.automation.app/login"
                className="navbar-btn btn btn-sm mr-2"
                title="Sign In"
                style={{ color: "#506690" }}
                onClick={() => setNavbarMenu(false)}
              >
                Sign in
              </Link>
              <Link to="https://app.automation.app/register">
                <button className="navbar-btn btn btn-sm btn-primary lift">
                  Start for free
                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="heroBackground">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1
                className="display-3 text-center text-md-left"
                dangerouslySetInnerHTML={{ __html: landingSection.title }}
              />
              <p
                className="lead text-center text-md-left color-green padding-none"
                dangerouslySetInnerHTML={{ __html: landingSection.subtitle1 }}
              />
              <p
                className="lead text-center text-md-left color-blue padding-none"
                dangerouslySetInnerHTML={{ __html: landingSection.subtitle2 }}
              />
              <p
                className="lead text-center text-md-left color-orange padding-none mb-6"
                dangerouslySetInnerHTML={{ __html: landingSection.subtitle3 }}
              />

              <div className="text-center text-md-left">
                <Link to="https://app.automation.app/register">
                  <button className="btn btn-primary shadow lift mr-1">
                    {landingSection.button1}
                    <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                  </button>
                </Link>
                <Link to="https://app.automation.app/register">
                  <button className="btn btn-outline-primary lift ml-2">
                    {landingSection.button2}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBlank;