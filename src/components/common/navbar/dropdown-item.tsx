import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const CustomDropdownItem = ({ data, navState }) => {
  const handleScrollIntoView = (sectionId) => {
    const titleElement = document.getElementById(sectionId);
    titleElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnchorLink
        to={`/product-tour#${data.menuFields.slug}`}
        title="Our team"
        className="list-group-item"
        //@ts-ignore
        onClick={() => navState()}
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
      </AnchorLink>
    </>
  );
};

export default CustomDropdownItem;
