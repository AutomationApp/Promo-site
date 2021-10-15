import { useStaticQuery, graphql } from "gatsby";

export const usePrivacyQuery = () => {
  const privacy = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "privacy" }) {
        content
      }
    }
  `);
  return privacy;
};
