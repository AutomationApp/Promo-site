import React from "react";
import Seo from "../components/common/seo";
import ProductTourSection from "../components/product-tour";
import { useProductTourQuery } from "../graphql/useProductTourPageQuery";

const ProductTour = () => {
  const { wpPage } = useProductTourQuery();

  return (
    <>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <ProductTourSection wpPage={wpPage} />
    </>
  );
};

export default ProductTour;
