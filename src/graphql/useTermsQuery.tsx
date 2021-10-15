import { useStaticQuery, graphql } from "gatsby";

export const useTermsQuery = () => {
  const terms = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "terms" }) {
        content
      }
    }
  `);
  return terms;
};
