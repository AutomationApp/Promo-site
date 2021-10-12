import { Link } from "gatsby";
import React from "react";
//@ts-ignore
import Brand from "../../../assets/img/brand.svg";
import moment from "moment";

const Footer = ({ footerData, blogs }) => {
  return (
    <footer className="py-8 py-md-11 bg-gray-200">
      <div className="container-xl">
        <div className="row footerRow">
          <div className="col-12 col-sm-6 col-md-2">
            <img
              src={Brand}
              alt="..."
              className="footer-brand img-fluid mb-2"
            />
          </div>

          <div className="col-12 col-sm-6 col-md-2">
            <h4 className="font-weight-bold text-uppercase text-gray-700">
              {footerData.acf.first_menu_title}
            </h4>

            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              {footerData.acf.first_menu.map((item) => (
                <li className="mb-3">
                  <Link to={item.url} className="text-reset">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-weight-bold text-uppercase text-gray-700 mt-5">
              {footerData.acf.second_menu_title}
            </h4>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              {footerData.acf.second_menu.map((item) => (
                <li className="mb-3">
                  <Link to={item.url} className="text-reset">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-4 offset-lg-0">
            <h4 className="font-weight-bold text-uppercase text-gray-700">
              RECENT POSTS
            </h4>

            <ul className="list-unstyled text-muted mb-0">
              {blogs.slice(0, 5).map((item) => (
                <li className="mb-3">
                  <Link to={`/blog?slug=${item.slug}`} className="text-primary">
                    {item.title.rendered}
                  </Link>
                  <br />
                  {moment(item.date).format("MMM DD YYYY")}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <h4 className="font-weight-bold text-uppercase text-gray-700">
              {footerData.acf.title}
            </h4>

            <ul className="list-unstyled text-muted mb-0">
              <p>{footerData.acf.description}</p>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
