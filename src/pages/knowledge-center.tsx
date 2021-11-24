import React from "react";
import BlogsSection from "../components/blogs/index";
import Seo from "../components/common/seo";
import { useBlogsQuery } from "../graphql/useBlogsQuery";

const Blogs = () => {
  const { allWpPost, wpPage } = useBlogsQuery();

  return (
    <>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        pageUrl={wpPage.seo.canonical}
      />
      <BlogsSection allWpPost={allWpPost} />
    </>
  );
};

export default Blogs;
