import React, { useEffect, useState } from "react";
import axios from "axios";
import Insta from "../.././assets/img/icons/social/instagram.svg";
import Fb from "../.././assets/img/icons/social/facebook.svg";
import Twitter from "../.././assets/img/icons/social/twitter.svg";
import BG from "../.././assets/img/covers/cover-8.jpg";
import CurveShape from "../common/curve-shape";
import LoadingSpinner from "../common/loading-spinner";
import moment from "moment";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const BlogSection = ({ slug }) => {
  const [blog, setBlog] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://wordpress-638795-2187391.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${slug}`;
    axios
      .get(url)
      .then((res) => {
        setBlog(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <>
      {loading ? (
        <LoadingSpinner height="100vh" />
      ) : (
        <>
          <section
            data-jarallax
            data-speed=".8"
            className="py-12 py-md-15 bg-cover jarallax"
            style={{ backgroundImage: `url("${BG}")` }}
          />
          <CurveShape />

          <section
            className="py-7 py-md-9 border-bottom border-gray-300"
            id="info"
          >
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <a
                    href="#info"
                    className="btn btn-white btn-rounded-circle shadow mt-n11 mt-md-n13"
                    data-toggle="smooth-scroll"
                  >
                    <i className="fe fe-arrow-down"></i>
                  </a>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                  <h1 className="display-4 text-center">
                    {blog.title.rendered}
                  </h1>

                  <p
                    className="lead mb-7 text-center text-muted"
                    dangerouslySetInnerHTML={{
                      __html: blog.excerpt.rendered,
                    }}
                  />

                  <div className="row align-items-center py-5 border-top border-bottom">
                    <div className="col-auto">
                      <div className="avatar avatar-lg">
                        <img
                          src={blog.author.author_avatar}
                          alt="..."
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="col ml-n5">
                      <h6 className="text-uppercase mb-0">
                        {blog.author.author_name}
                      </h6>

                      <time
                        className="font-size-sm text-muted"
                        dateTime="2019-05-20"
                      >
                        Published on {moment(blog.date).format("MMM DD YYYY")}
                      </time>
                    </div>
                    <div className="col-auto">
                      <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                        Share:
                      </span>

                      <ul className="d-inline list-unstyled list-inline list-social">
                        <li className="list-inline-item list-social-item mr-3">
                          <FacebookShareButton
                            url={`${location.href}`}
                            quote={blog.title.rendered}
                            // quote={"フェイスブックはタイトルが付けれるようです"}
                            // hashtag={"#hashtag"}
                            className="Demo__some-network__share-button"
                          >
                            <img alt="fb" src={Fb} className="social-icons" />
                          </FacebookShareButton>
                        </li>
                        <li className="list-inline-item list-social-item mr-3">
                          <TwitterShareButton
                            title={blog.title.rendered}
                            url={`${location.href}`}
                          >
                            <img
                              alt="twitter"
                              src={Twitter}
                              className="social-icons"
                            />
                          </TwitterShareButton>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-6 pt-md-8 pb-10">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                  <figure className="figure mb-7">
                    <img
                      className="figure-img img-fluid rounded lift lift-lg w-100"
                      src={blog.featured_image.size_full}
                      alt="..."
                    />

                    <figcaption className="figure-caption text-center">
                      This is a caption on this photo for reference
                    </figcaption>
                  </figure>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: blog.content.rendered,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BlogSection;
