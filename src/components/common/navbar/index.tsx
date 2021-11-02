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
        <Link className="navbar-brand" to="/">
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
