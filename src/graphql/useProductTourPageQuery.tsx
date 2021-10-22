import { useStaticQuery, graphql } from "gatsby";

export const useProductTourQuery = () => {
  const privacy = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Product Tour" }) {
        productTour {
          stepsData {
            id
            title
            description
          }
          productTourData {
            id
            title
            content
            slug
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
