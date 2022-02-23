import { useStaticQuery, graphql } from "gatsby";

export const usePreFooterCaseStudeiesQuery = () => {
    const casestudies = useStaticQuery(graphql`
        {
            allWpGlobalElement(filter: {title: {eq: "Prefooter CaseStudies"}}) {
                nodes {
                    globalCaseStudies {
                        prefooterCasestudies {
                            title
                            description
                            itemTitle
                            itemDescription
                            itemButton
                            caseStudies {
                                title
                                description
                                image {
                                    sourceUrl
                                    date
                                    author {
                                        node {
                                            avatar {
                                                url
                                            }
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    return casestudies;
};