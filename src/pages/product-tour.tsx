import React from "react";
import Seo from "../components/common/seo";
import ProductTourSection from "../components/product-tour";
import { useProductTourQuery } from "../graphql/useProductTourPageQuery";
import Layout from "../components/common/layout/layout";

const ProductTour = () => {
  const { wpPage } = useProductTourQuery();

  return (
    <Layout>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <ProductTourSection wpPage={wpPage} />
    </Layout>
  );
};

export default ProductTour;
