import React from "react";
import Fb from "../assets/img/icons/social/facebook.svg";
import Twitter from "../assets/img/icons/social/twitter.svg";
import moment from "moment";
import { graphql } from "gatsby";
import Seo from "../components/common/seo";
import Layout from "../components/common/layout/layout";

const BlogSection = ({ data }) => {
  const { wpPost } = data;
  console.log(wpPost);

  return (
    <Layout>
      <Seo
        title={wpPost.seo.title}
        description={wpPost.seo.metaDesc}
        pageUrl={wpPost.seo.canonical}
        imageUrl={wpPost.featuredImage ? wpPost.featuredImage.node.sourceUrl : ""}
      />

      <section className="py-7 py-md-9 border-bottom border-gray-300" id="info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1
                className="display-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: wpPost.title,
                }}
              />

              <div
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
                      alt={wpPost.author.node.name}
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
                  src={wpPost.featuredImage ? wpPost.featuredImage.node.sourceUrl : ""}
                  alt={wpPost.title}
                />

                {/* <figcaption className="figure-caption text-center">
                  This is a caption on this photo for reference
                </figcaption> */}
              </figure>

              <div
                dangerouslySetInnerHTML={{
                  __html: wpPost.content,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
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
      seo {
        title
        canonical
        metaDesc
      }
    }
  }
`;
