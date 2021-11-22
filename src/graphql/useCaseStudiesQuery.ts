import { useStaticQuery, graphql } from "gatsby";

export const useCaseStudiesQuery = () => {
  const privacy = useStaticQuery(graphql`
    {
      allWpCaseStudy {
        nodes {
          id
          title
          date
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          caseStudies {
            caseStudies {
              title
              description
              image {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);
  return privacy;
};
