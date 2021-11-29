import { useStaticQuery, graphql } from "gatsby";

export const useCasesPageQuery = () => {
  const pageData = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Use Cases" }) {
        useCases {
          casesHeroSection {
            tag
            title
            subtitle
          }
          services {
            title
            subtitle
            image {
              sourceUrl
            }
          }
          detailSection {
            title
            description
            buttonText
            casesPoints {
              title
              description
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
