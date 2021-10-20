import { useStaticQuery, graphql } from "gatsby";

export const useBlogsQuery = () => {
  const blogs = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          title
          excerpt
          date
          uri
          categories {
            nodes {
              name
              slug
              id
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `);
  return blogs;
};
