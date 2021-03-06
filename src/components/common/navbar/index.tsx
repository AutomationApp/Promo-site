import React, { useState } from "react";
//@ts-ignore
import Brand from "../../../assets/img/brand.svg";
import { Link } from "gatsby";
import CustomDropdownItem from "./dropdown-item";

const NavMenu = ({ navLinks }) => {
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
        <Link className="navbar-brand" title="Home" to="/">
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
                      item.childItems.nodes.length > 0
                        ? "nav-item dropdown"
                        : "nav-item"
                    }
                    key={item.id}
                    onMouseEnter={
                      item.childItems.nodes.length > 0 ? onMouseEnter : null
                    }
                    onMouseLeave={
                      item.childItems.nodes.length > 0 ? onMouseLeave : null
                    }
                  >
                    <Link
                      className={
                        item.childItems.nodes.length > 0
                          ? "nav-link dropdown-toggle"
                          : "nav-link"
                      }
                      onClick={changeNavbarState}
                      title={item.label}
                      to={item.path}
                    >
                      {item.label}
                    </Link>
                    {item.childItems.nodes.length > 0 ? (
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
  );
};

export default NavMenu;
