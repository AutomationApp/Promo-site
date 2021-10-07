import React from "react";
import BlogSection from "../components/blog";

const Blog = ({ location }) => {
  const slug = location.search.substring(6);
  return (
    <>
      <BlogSection slug={slug} />
    </>
  );
};

export default Blog;
