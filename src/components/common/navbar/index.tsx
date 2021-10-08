import React, { useState } from "react";
//@ts-ignore
import Brand from "../../../assets/img/brand.svg";
import { Link } from "gatsby";
import { DropdownData } from "../../../utils/constants";
import CustomDropdownItem from "./dropdown-item";

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

  const changeNavbarState = () => {
    setNavbarMenu(false);
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
            <li
              className="nav-item dropdown"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                className="nav-link dropdown-toggle"
                onClick={() => setNavbarMenu(false)}
                to="/product-tour"
              >
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
                  {DropdownData.map((item) => (
                    <CustomDropdownItem
                      key={item.id}
                      data={item}
                      navState={changeNavbarState}
                    />
                  ))}
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => setNavbarMenu(false)}
                to="/cases"
              >
                Use cases
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => setNavbarMenu(false)}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => setNavbarMenu(false)}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blogs"
                onClick={() => setNavbarMenu(false)}
                className="nav-link"
              >
                Blogs
              </Link>
            </li>
          </ul>

          <div className="ml-auto flex">
            <Link
              to="https://automation.app/app/login"
              className="navbar-btn btn btn-sm btn-outline-primary lift mr-2"
              target="_blank"
              onClick={() => setNavbarMenu(false)}
            >
              Sign in
            </Link>
            <Link
              to="https://automation.app/app/register"
              className="navbar-btn btn btn-sm btn-primary lift"
              target="_blank"
              onClick={() => setNavbarMenu(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
