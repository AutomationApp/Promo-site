import { useStaticQuery, graphql } from "gatsby";

export const useHomePageQuery = () => {
  const pageData = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Home" }) {
        home {
          heroSection {
            heading
            description
            heroImage {
              sourceUrl
            }
          }
        }
      }
    }
  `);
  return pageData;
};
