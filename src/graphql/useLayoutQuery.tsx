import { useStaticQuery, graphql } from "gatsby";

export const useLayoutQuery = () => {
  const footerQuery = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu {
        menuItems {
          nodes {
            label
            path
            parentId
            childItems {
              nodes {
                path
                label
                menuFields {
                  description
                  slug
                  icon {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
      wpPage(title: { eq: "Footer" }) {
        footer {
          description
          firstMenuTitle
          secondMenuTitle
          title
          firstMenu {
            title
            url
          }
          secondMenu {
            title
            url
          }
        }
      }
      allWpPost(sort: { fields: [date], order: DESC }) {
        nodes {
          title
          date
          uri
        }
      }
    }
  `);
  return footerQuery;
};
