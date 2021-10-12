import React from "react";
import moment from "moment";
import { Link } from "gatsby";

const BlogItem = ({ blog }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex mt-5">
      <Link
        to={`/blog?slug=${blog.slug}`}
        className="card-img-top text-decoration-none"
      >
        <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
          <img
            src={blog.featured_image.size_full}
            alt="..."
            className="card-img-top "
            height="250px"
          />

          <div className="position-relative">
            <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
              <svg
                viewBox="0 0 2880 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <div className="card-body">
            <h3
              dangerouslySetInnerHTML={{
                __html: blog.title.rendered,
              }}
            />

            <p
              className="mb-0 text-muted"
              dangerouslySetInnerHTML={{
                __html: blog.excerpt.rendered.slice(3, 95) + "...",
              }}
            />
          </div>

          <div className="card-meta mt-auto">
            <hr className="card-meta-divider" />

            <div className="avatar avatar-sm mr-2">
              <img
                src={blog.author.author_avatar}
                alt="..."
                className="avatar-img rounded-circle"
              />
            </div>

            <h6 className="text-uppercase text-muted mr-2 mb-0">
              {blog.author.author_name}
            </h6>

            <p className="h6 text-uppercase text-muted mb-0 ml-auto">
              <time dateTime="2019-05-02">
                {moment(blog.date).format("MMM d")}
              </time>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
