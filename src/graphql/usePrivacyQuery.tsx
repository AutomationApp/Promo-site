import { useStaticQuery, graphql } from "gatsby";

export const usePrivacyQuery = () => {
  const privacy = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "privacy" }) {
        content
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
