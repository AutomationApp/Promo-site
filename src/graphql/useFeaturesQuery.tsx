import { useStaticQuery, graphql } from "gatsby";

export const useFeaturesQuery = () => {
  const features = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Features" }) {
        features {
          heroSection {
            title
            subtitle
            description
          }
          imagesGallery {
            sourceUrl
          }
          automationEngine {
            title
            description
            image {
              sourceUrl
            }
            icon {
              sourceUrl
            }
          }
          easyIntegration {
            title
            description
            image {
              sourceUrl
            }
            icon {
              sourceUrl
            }
          }
          clientLists {
            title
            description
            image {
              sourceUrl
            }
            icon {
              sourceUrl
            }
          }
          userManagement {
            title
            description
            image {
              sourceUrl
            }
            icon {
              sourceUrl
            }
          }
        }
      }
    }
  `);
  return features;
};
