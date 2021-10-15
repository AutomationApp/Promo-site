import React from "react";
import Fb from "../assets/img/icons/social/facebook.svg";
import Twitter from "../assets/img/icons/social/twitter.svg";
import BG from "../assets/img/covers/cover-8.jpg";
import moment from "moment";
// import { FacebookShareButton, TwitterShareButton } from "react-share";
import CurveShape from "../components/common/curve-shape";
import { graphql } from "gatsby";

const BlogSection = ({ data }) => {
  const { wpPost } = data;

  return (
    <>
      <section
        data-jarallax
        data-speed=".8"
        className="py-12 py-md-15 bg-cover jarallax"
        style={{ backgroundImage: `url("${BG}")` }}
      />
      <CurveShape />

      <section className="py-7 py-md-9 border-bottom border-gray-300" id="info">
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
              <h1
                className="display-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: wpPost.title,
                }}
              />

              <p
                className="lead mb-7 text-center text-muted"
                dangerouslySetInnerHTML={{
                  __html: wpPost.excerpt,
                }}
              />

              <div className="row align-items-center py-5 border-top border-bottom">
                <div className="col-auto">
                  <div className="avatar avatar-lg">
                    <img
                      src={wpPost.author.node.avatar.url}
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                </div>
                <div className="col ml-n5">
                  <h6 className="text-uppercase mb-0">
                    {wpPost.author.node.name}
                  </h6>

                  <time
                    className="font-size-sm text-muted"
                    dateTime="2019-05-20"
                  >
                    Published on {moment(wpPost.date).format("MMM DD YYYY")}
                  </time>
                </div>
                <div className="col-auto">
                  <span className="h6 text-uppercase text-muted d-none d-md-inline mr-4">
                    Share:
                  </span>

                  <ul className="d-inline list-unstyled list-inline list-social">
                    <li className="list-inline-item list-social-item mr-3">
                      {/* <FacebookShareButton
                        url={`${wpPost.uri}`}
                        quote={wpPost.title}
                        // quote={"フェイスブックはタイトルが付けれるようです"}
                        // hashtag={"#hashtag"}
                        className="Demo__some-network__share-button"
                      >
                      </FacebookShareButton> */}
                      <img alt="fb" src={Fb} className="social-icons" />
                    </li>
                    <li className="list-inline-item list-social-item mr-3">
                      {/* <TwitterShareButton
                        title={wpPost.title}
                        url={`${wpPost.uri}`}
                      >
                      </TwitterShareButton> */}
                      <img
                        alt="twitter"
                        src={Twitter}
                        className="social-icons"
                      />
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
                  src={wpPost.featuredImage.node.sourceUrl}
                  alt="..."
                />

                {/* <figcaption className="figure-caption text-center">
                  This is a caption on this photo for reference
                </figcaption> */}
              </figure>

              <p
                dangerouslySetInnerHTML={{
                  __html: wpPost.content,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;

export const query = graphql`
  query PostById($id: String) {
    wpPost(id: { eq: $id }) {
      id
      uri
      title
      excerpt
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
    }
  }
`;
