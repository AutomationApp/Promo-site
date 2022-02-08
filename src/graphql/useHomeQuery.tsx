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
            button1
            button2
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
              buttonText
            }
          }
          caseStudieshome {
            title
            description
            itemTitle
            itemDescription
            itemButton
          }
          demoFormhome {
            title
            subtitle
            buttonText
            image {
              sourceUrl
            }
          }
          pricingHome {
            title
            description
            pricingCard {
              tag
              price
              time
              packageIncludes {
                title
              }
              buttonText
            }
            priceCard2 {
              tag
              description
              buttonText
            }
          }
          automationPointshome {
            title
            description
            icon {
              sourceUrl
            }
          }
        }
        seo {
          title
          canonical
          metaDesc
        }
      }
    }
  `);
  return pageData;
};
