import { useStaticQuery, graphql } from "gatsby";

export const useTermsQuery = () => {
  const terms = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "terms" }) {
        content
        seo {
          title
          canonical
          metaDesc
        }
      }
    }
  `);
  return terms;
};
