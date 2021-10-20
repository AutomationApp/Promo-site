import { useStaticQuery, graphql } from "gatsby";

export const useBlogsCategoriesQuery = () => {
  const query = useStaticQuery(graphql`
    {
      allWpCategory {
        nodes {
          name
          id
          slug
        }
      }
    }
  `);
  return query;
};
