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
