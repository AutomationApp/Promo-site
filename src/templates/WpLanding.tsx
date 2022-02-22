import { graphql } from "gatsby";
import React from "react";
import LayoutCRM from "../components/common/layout/layout-crm";
import CompleteDetails from "../components/crm";
import Seo from "../components/common/seo";

const LandingPage = ({ data }) => {
  const {
    wpLandingPage: { crm, seo },
  } = data;
  console.log(crm, "I am CRdddM");
  return (
    <LayoutCRM dataHeader={crm.crmLandingSection} bgColor={crm.bgcolor}>
      <Seo
        title={seo.title}
        description={seo.metaDesc}
        pageUrl={seo.canonical}
      />
      <CompleteDetails crm={crm} />
    </LayoutCRM>
  );
};

export default LandingPage;

export const query = graphql`
  query LandingPageById($id: String) {
    wpLandingPage(id: { eq: $id }) {
      seo {
        title
        metaDesc
        canonical
      }
      crm {
        bgcolor
        crmLandingSection {
          subtitle
          button1
          button2
          points {
            description
          }
          title
          landingImage {
            sourceUrl
          }
        }
        features {
          heading
          description
          image {
            sourceUrl
          }
          button
        }
        caseStudies {
          title
          description
        }
        demoForm {
          title
          buttonText
          image {
            sourceUrl
          }
          subtitle
        }
        pricing {
          title
          description
          pricingCard {
            tag
            price
            time
            packageIncludes {
              title
            }
            buttonText
          }
          priceCard2 {
            tag
            description
          }
        }
        automationPoints {
          title
          description
          icon {
            sourceUrl
          }
        }
      }
    }
  }
`;
