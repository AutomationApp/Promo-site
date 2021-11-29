import React from "react";
import Seo from "../../components/common/seo";
import Layout from "../../components/common/layout/layout";
import { useDocumentationPageQuery } from "../../graphql/useDocumentationPageQuery";

const Privacy = () => {
  const { wpPage } = useDocumentationPageQuery();

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
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
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
