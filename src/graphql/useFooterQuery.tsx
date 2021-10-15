import { useStaticQuery, graphql } from "gatsby";

export const useFooterQuery = () => {
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
      allWpPost {
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
