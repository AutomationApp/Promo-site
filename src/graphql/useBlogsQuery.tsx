import { useStaticQuery, graphql } from "gatsby";

export const useBlogsQuery = () => {
  const blogs = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: [date], order: DESC }) {
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
      wpPage(title: { eq: "Knowledge center" }) {
        seo {
          title
          canonical
          metaDesc
        }
      }
    }
  `);
  return blogs;
};
