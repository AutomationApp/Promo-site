import React, { useState } from "react";
import { Link } from "gatsby";
import CustomDropdownItem from "./navbar/dropdown-item";

//@ts-ignore
import Brand from "../../assets/img/brand.svg";

const NavCRM = ({ navLinks, landingSection, bgColor }) => {
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

  const handleScrollIntoView = (sectionId) => {
    const titleElement = document.getElementById(sectionId);
    titleElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="cusNavbar navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand opacity-0" title="Home" to="/">
            <img src={Brand} className="navbar-brand-img" alt="Brand Logo" />
          </Link>
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
      <section
        className="heroBackground cmrLanding pt-4 pt-md-11"
        style={{ backgroundColor: bgColor, height: "auto" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 order-md-2">
              {landingSection.landingImage && (
                <img
                  src={landingSection?.landingImage?.sourceUrl}
                  alt="ImgHome"
                  className="img-fluid mb-6 mb-md-0"
                />
              )}
            </div>
            <div className="col-12 col-md-7 order-md-1">
              <h1
                  className="display-4"
                  dangerouslySetInnerHTML={{ __html: landingSection?.title }}
              />
              <p
                className="lead mb-0"
                dangerouslySetInnerHTML={{ __html: landingSection?.subtitle }}
              />
              <div className="text-center text-md-left pt-5">
                {landingSection.button1 && (
                  <Link to="https://app.automation.app/register">
                    <button className="btn btn-primary shadow lift mr-1">
                      {landingSection?.button1}
                      <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                    </button>
                  </Link>
                )}
                {landingSection.button2 && (
                  <button
                    className="btn btn-outline-primary lift ml-2"
                    onClick={() => handleScrollIntoView("demo")}
                  >
                    {landingSection?.button2}
                  </button>
                )}
              </div>

            </div>
          </div>
          <div className="container-fluid">
            <div className="row mt-10">
              {landingSection?.points?.map((item, index) => (
                <div className="col-12 col-lg-3 p-0" key={index}>
                  <div className="d-flex">
                    <div className="badge badge-rounded-circle badge-dark-soft mt-1 mr-4">
                      <i className="fe fe-check"></i>
                    </div>
                    <p className="text-dark p-0">{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavCRM;
