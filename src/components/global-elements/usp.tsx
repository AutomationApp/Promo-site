import { Link } from "gatsby";
import React from "react";
import { usePreFooterUSPsQuery } from "../../graphql/usePreFooterUSPsQuery";

const USPSection = () => {
    // global usps elements
    const {allWpGlobalElement} = usePreFooterUSPsQuery();
    const automationPoints = allWpGlobalElement.nodes[0].globalUsps.stepsData;

    return (
        <section className="pt-15 pb-12 bg-dark">
            {automationPoints && (
                <div className="container pt-8">
                    <div className="row">
                        {automationPoints?.map((item) => (
                            <div className="col-12 col-md-4 mt-md-8">
                                <div className="d-flex">
                                    {item?.icon?.sourceUrl && (
                                    <div className="">
                                        <img src={item.icon.sourceUrl} alt={item.title} className="svgwhiteInvert" />
                                    </div>
                                    )}
                                    <div className="ml-5">
                                    <h4 className="text-white">{item.title}</h4>

                                    <p className="text-muted mb-6 mb-md-0">
                                        {item.description}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default USPSection;