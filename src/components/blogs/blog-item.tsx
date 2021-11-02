import React from "react";
import moment from "moment";
import { Link } from "gatsby";

const BlogItem = ({ blog }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex mt-5">
      <Link to={blog.uri} className="card-img-top text-decoration-none">
        <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
          <img
            src={blog.featuredImage.node.sourceUrl}
            alt={blog.title}
            className="card-img-top "
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
                __html: blog.title,
              }}
            />

            <p
              className="mb-0 text-muted"
              dangerouslySetInnerHTML={{
                __html: blog.excerpt,
              }}
            />
          </div>

          <div className="card-meta mt-auto">
            <hr className="card-meta-divider" />

            <div className="avatar avatar-sm mr-2">
              <img
                src={blog.author.node.avatar.url}
                alt={blog.author.node.name}
                className="avatar-img rounded-circle"
              />
            </div>

            <h6 className="text-uppercase text-muted mr-2 mb-0">
              {blog.author.node.name}
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
