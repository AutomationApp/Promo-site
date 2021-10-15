import { useStaticQuery, graphql } from "gatsby";

export const usePricingQuery = () => {
  const pageData = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Pricing" }) {
        id
        title
        pricing {
          pricingHeroSection {
            title
            subtitle
          }
          pricing {
            starter {
              title
              price
              per
              buttonText
              points {
                point
              }
            }
            growth {
              title
              price
              per
              buttonText
              points {
                point
              }
            }
            premium {
              title
              price
              per
              buttonText
              points {
                point
              }
            }
          }
          bodySection {
            title
            subtitle
            description
          }
          faqs {
            title
            subtitle
            faqs {
              question
              answer
            }
          }
        }
      }
    }
  `);
  return pageData;
};
