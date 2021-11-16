import { useStaticQuery, graphql } from "gatsby";

export const useHomePageQuery = () => {
  const pageData = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Home" }) {
        home {
          landingSection {
            title
            subtitle1
            subtitle2
            subtitle3
            landingImage {
              sourceUrl
            }
          }
          communicationHub {
            heading
            description
            points {
              title
              description
              image {
                sourceUrl
              }
            }
          }
          detailsSection {
            item {
              tag
              title
              description
              points {
                point1
                point2
                point3
                point4
              }
              image {
                sourceUrl
              }
            }
          }
          testimonials {
            title
            description
            testimonial {
              review
              author
              logo {
                sourceUrl
              }
              image {
                sourceUrl
              }
            }
          }
          demoForm {
            title
            subtitle
            image {
              sourceUrl
            }
          }
          pricing {
            title
            description
            pricingCard {
              tag
              price
              time
              packageIncludes {
                title
              }
            }
            priceCard2 {
              tag
              description
            }
          }
          automationPoints {
            title
            description
            icon {
              sourceUrl
            }
          }
        }
      }
    }
  `);
  return pageData;
};
