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
            icon {
              sourceUrl
            }
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
            button
            buttonDestinationUrl
            faq {
              id
              areacontrol
              heading
              content
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
  return privacy;
};
