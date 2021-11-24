import React from "react";
import Seo from "../components/common/seo";
import PricingSection from "../components/pricing";
import { usePricingQuery } from "../graphql/usePricingQuery";

const Pricing = () => {
  const { wpPage } = usePricingQuery();

  return (
    <>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <PricingSection wpPage={wpPage} />
    </>
  );
};

export default Pricing;
