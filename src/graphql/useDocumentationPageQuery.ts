import { useStaticQuery, graphql } from "gatsby";

export const useDocumentationPageQuery = () => {
    const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Documentation Twig" }) {
        content
        seo {
          title
          canonical
          metaDesc
        }
      }
    }
  `);
    return data;
};
