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
          <img src={data.menuFields.icon.sourceUrl} alt="icon" />
        </div>

        <div className="ml-4">
          <h6 className="font-weight-bold text-uppercase text-primary mb-0">
            {data.label}
          </h6>

          <p className="font-size-sm text-gray-700 mb-0">
            {data.menuFields.description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default CustomDropdownItem;
