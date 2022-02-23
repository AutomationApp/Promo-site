import { useStaticQuery, graphql } from "gatsby";

export const usePreFooterPricingQuery = () => {
    const generalpricing = useStaticQuery(graphql`
        {
            allWpGlobalElement(filter: {title: {eq: "Prefooter pricing"}}) {
                nodes {
                    globalPricing {
                        prefooterPricing {
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
                                buttonText
                            }
                        }
                    }
                }
            }
        }
    `);
    return generalpricing;
};