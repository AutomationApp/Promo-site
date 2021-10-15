import { useStaticQuery, graphql } from "gatsby";

export const useHomePageQuery = () => {
  const pageData = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Home" }) {
        home {
          homeHeroSection {
            title
            subtitle
            image {
              sourceUrl
            }
            description
            button2
            button1
          }
          automationSection {
            title
            description
            images {
              sourceUrl
            }
            points {
              point
            }
          }
          detailSection1 {
            title
            description
            image {
              sourceUrl
            }
          }
          detailSection2 {
            title
            description
            image {
              sourceUrl
            }
          }
          detailSection3 {
            title
            description
            image {
              sourceUrl
            }
          }
          detailSection4 {
            title
            description
            image {
              sourceUrl
            }
          }
          getStarted {
            title
            text
            subtitle
            buttonText
          }
        }
      }
    }
  `);
  return pageData;
};
