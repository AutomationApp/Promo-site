import { useStaticQuery, graphql } from "gatsby";

export const useCustomPostQuery = () => {
    const terms = useStaticQuery(graphql`
    {
      allWpRedirect {
        nodes {
          slug
          redirects {
            redirectsUrl
          }
        }
      }
    }
  `);
    return terms;
};
