import React from "react";
import moment from "moment";
import Person1 from "../../assets/img/avatars/avatar-1.jpg";
import { Link } from "gatsby";

const BlogItem = ({ blog }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex">
      <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
        <Link to={`/blog?slug=${blog.slug}`} className="card-img-top">
          <img
            src={blog.featured_image.size_full}
            alt="..."
            className="card-img-top"
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
        </Link>

        <a className="card-body" href="#!">
          <h3
            dangerouslySetInnerHTML={{
              __html: blog.title.rendered,
            }}
          ></h3>

          <p
            className="mb-0 text-muted"
            dangerouslySetInnerHTML={{
              __html: blog.excerpt.rendered,
            }}
          ></p>
        </a>

        <a className="card-meta mt-auto" href="#!">
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
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
