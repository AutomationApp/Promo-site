import { useStaticQuery, graphql } from "gatsby";

export const usePrivacyQuery = () => {
  const privacy = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Product Tour" }) {
        productTour {
          productTourData {
            id
            title
            content
            image1 {
              sourceUrl
            }
            image2 {
              sourceUrl
            }
            image3 {
              sourceUrl
            }
            image4 {
              sourceUrl
            }
            faq {
              id
              areacontrol
              heading
              content
            }
          }
        }
      }
    }
  `);
  return privacy;
};
