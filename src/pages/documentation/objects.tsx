import React from "react";
import Seo from "../../components/common/seo";
import Layout from "../../components/common/layout/layout";
import { useObjectBladePageQuery } from "../../graphql/useObjectBladePageQuery";

const Privacy = () => {
  const { wpPage } = useObjectBladePageQuery();

  return (
    <Layout>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <section className="py-9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-10 col-xl-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: wpPage.content,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
