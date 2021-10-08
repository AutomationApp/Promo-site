import React, { useEffect, useState } from "react";
import axios from "axios";
import CurveShape from "../common/curve-shape";
import Img from "../../assets/img/covers/cover-13.jpg";
import BlogItem from "./blog-item";
import LoadingSpinner from "../common/loading-spinner";

const BlogsSection = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    const res = allBlogs.filter((proj) =>
      Object.values(proj)
        .join(" ")
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );

    setBlogs(res);
  };

  useEffect(() => {
    const url =
      "https://wordpress-638795-2187391.cloudwaysapps.com/wp-json/wp/v2/posts";
    axios
      .get(url)
      .then((res) => {
        setAllBlogs(res.data);
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <section
            data-jarallax
            data-speed=".8"
            className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax"
            style={{ backgroundImage: `url("${Img}")` }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-7 text-center">
                  <h1 className="display-2 font-weight-bold text-white">
                    Our Newsroom
                  </h1>

                  <p className="lead mb-0 text-white-75">
                    Keep up to date with what we're working on! Landkit is an
                    ever evolving theme with regular updates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <CurveShape />

          <section className="mt-n6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <form className="rounded shadow mb-4">
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text border-0 pr-1">
                          <i className="fe fe-search"></i>
                        </span>
                      </div>

                      <input
                        type="text"
                        className="form-control border-0 px-1"
                        aria-label="Search our blog..."
                        placeholder="Search our blog..."
                        onKeyDown={onSearch}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />

                      <div className="input-group-append">
                        <span className="input-group-text border-0 py-0 pl-1 pr-3">
                          <a
                            className="btn btn-sm btn-primary"
                            href="blog-search.html"
                          >
                            Search
                          </a>
                        </span>
                      </div>
                    </div>
                  </form>

                  <div className="row align-items-center">
                    <div className="col-auto">
                      <h6 className="font-weight-bold text-uppercase text-muted mb-0">
                        Tags:
                      </h6>
                    </div>
                    <div className="col ml-n5">
                      <a
                        className="badge badge-pill badge-secondary-soft"
                        href="blog-search.html"
                      >
                        <span className="h6 text-uppercase">Design</span>
                      </a>
                      <a
                        className="badge badge-pill badge-secondary-soft"
                        href="blog-search.html"
                      >
                        <span className="h6 text-uppercase">Product</span>
                      </a>
                      <a
                        className="badge badge-pill badge-secondary-soft"
                        href="blog-search.html"
                      >
                        <span className="h6 text-uppercase">UX</span>
                      </a>
                      <a
                        className="badge badge-pill badge-secondary-soft"
                        href="blog-search.html"
                      >
                        <span className="h6 text-uppercase">Resources</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-7 pt-md-10">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="mb-0">Popular Stories</h3>

                  <p className="mb-5 text-muted">
                    Here’s what’s big in the past week!
                  </p>
                </div>
              </div>
              <div className="row">
                {blogs.map((item) => (
                  <BlogItem key={item.id} blog={item} />
                ))}
              </div>
              <div className="row justify-content-center py-7 py-md-10">
                <div className="col-12 col-md-9 col-lg-8 col-xl-7">
                  <a
                    href="#!"
                    className="btn btn-block btn-outline-gray-300 d-flex align-items-center"
                  >
                    <span className="mx-auto">Load more</span>
                    <i className="fe fe-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BlogsSection;
