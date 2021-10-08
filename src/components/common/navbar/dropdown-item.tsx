import React from "react";
import { Link } from "gatsby";

const CustomDropdownItem = ({ data, navState }) => {
  return (
    <>
      <Link
        className="list-group-item"
        onClick={() => navState()}
        to="/product-tour"
      >
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
            {data.title}
          </h6>

          <p className="font-size-sm text-gray-700 mb-0">{data.subtitle}</p>
        </div>
      </Link>
    </>
  );
};

export default CustomDropdownItem;
