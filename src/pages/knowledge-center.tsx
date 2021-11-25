import React from "react";
import BlogsSection from "../components/blogs/index";
import Seo from "../components/common/seo";
import { useBlogsQuery } from "../graphql/useBlogsQuery";
import Layout from "../components/common/layout/layout";

const Blogs = () => {
  const { allWpPost, wpPage } = useBlogsQuery();

  return (
    <Layout>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <BlogsSection allWpPost={allWpPost} />
    </Layout>
  );
};

export default Blogs;
