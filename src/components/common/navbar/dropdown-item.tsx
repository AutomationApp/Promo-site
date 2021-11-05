import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const CustomDropdownItem = ({ data, navState }) => {
  return (
    <>
      <AnchorLink
        to={`/product-tour#${data.menuFields.slug}`}
        title={data.label}
        className="list-group-item"
        //@ts-ignore
        onClick={() => navState()}
      >
        <div className="icon icon-sm text-primary">
          <img src={data.menuFields.icon.sourceUrl} alt={data.label} />
        </div>

        <div className="ml-4">
          <h6 className="font-weight-bold text-uppercase text-primary mb-0">
            {data.label}
          </h6>

          <p className="font-size-sm text-gray-700 mb-0">
            {data.menuFields.description}
          </p>
        </div>
      </AnchorLink>
    </>
  );
};

export default CustomDropdownItem;
