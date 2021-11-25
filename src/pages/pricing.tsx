import React from "react";
import Seo from "../components/common/seo";
import PricingSection from "../components/pricing";
import { usePricingQuery } from "../graphql/usePricingQuery";
import Layout from "../components/common/layout/layout";

const Pricing = () => {
  const { wpPage } = usePricingQuery();

  return (
    <Layout>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <PricingSection wpPage={wpPage} />
    </Layout>
  );
};

export default Pricing;
