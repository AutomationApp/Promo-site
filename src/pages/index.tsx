import React from "react";
import LayoutBlank from "../components/common/layout/layout-blank";
import Seo from "../components/common/seo";
import DetailsSection from "../components/home";
import { useHomePageQuery } from "../graphql/useHomeQuery";

// markup
const IndexPage = () => {
  const { wpPage } = useHomePageQuery();

  return (
    <LayoutBlank>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <DetailsSection home={wpPage.home} />
    </LayoutBlank>
  );
};

export default IndexPage;
