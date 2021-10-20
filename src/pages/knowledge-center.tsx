import React from "react";
import BlogsSection from "../components/blogs/index";
import Seo from "../components/common/seo";

const Blogs = () => {
  return (
    <>
      <Seo title="Knowledge center" />
      <BlogsSection />
    </>
  );
};

export default Blogs;
