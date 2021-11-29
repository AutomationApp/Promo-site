import { useStaticQuery, graphql } from "gatsby";

export const useObjectBladePageQuery = () => {
    const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Object Blade" }) {
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
