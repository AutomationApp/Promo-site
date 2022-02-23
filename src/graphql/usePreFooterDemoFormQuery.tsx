import { useStaticQuery, graphql } from "gatsby";

export const usePreFooterDemoFormQuery = () => {
    const demoform = useStaticQuery(graphql`
        {
            allWpGlobalElement(filter: {title: {eq: "Prefooter DemoForm"}}) {
                nodes {
                    globalDemoForm {
                        demoForm {
                            title
                            subtitle
                            buttonText
                            image {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        }
    `);
    return demoform;
};