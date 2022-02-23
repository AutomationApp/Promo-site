import { useStaticQuery, graphql } from "gatsby";

export const usePreFooterUSPsQuery = () => {
    const generalusp = useStaticQuery(graphql`
        {
            allWpGlobalElement(filter: {title: {eq: "Prefooter USPs"}}) {
                nodes {
                    globalUsps {
                        stepsData {
                            title
                            id
                            description
                            icon {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        }
    `);
    return generalusp;
};