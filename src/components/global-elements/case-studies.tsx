import { Link } from "gatsby";
import React from "react";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
import Slider from "react-slick";
import GlobalCaseStudyItem from "./case-studies-item";
import { usePreFooterCaseStudeiesQuery } from "../../graphql/usePreFooterCaseStudiesQuery";

const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    // autoplaySpeed: 5000,
    // speed: 2000,
    // initialSlide: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const CaseStudySection = () => {
    // global case studies
    const {allWpGlobalElement} = usePreFooterCaseStudeiesQuery();
    const caseStudies = allWpGlobalElement.nodes[0].globalCaseStudies.prefooterCasestudies;

    return (
        <section className="pt-8 pb-8">
            {caseStudies?.title && caseStudies?.description && (
                <div className="container">
                    <div className="row justify-content-center mt-10">
                        <div className="col-12 col-md-10 col-lg-8 text-center">
                            <h2>{caseStudies.title}</h2>

                            <p className="font-size-lg text-muted mb-7 mb-md-9">
                                {caseStudies.description}
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center mb-5">
                        <div className="col-12 col-md">
                            <h3 className="mb-0">{caseStudies.itemTitle}</h3>

                            <p className="mb-0 text-muted">{caseStudies.itemDescription}</p>
                        </div>
                        <div className="col-12 col-md-auto">
                            {/* <a
                                href="#!"
                                className="btn btn-sm btn-outline-gray-300 d-none d-md-inline"
                            >
                                {caseStudies.itemButton}
                            </a> */}
                        </div>
                    </div>

                    <Slider {...settings}>
                        {caseStudies.caseStudies.map((item) => (
                        <GlobalCaseStudyItem key={item.id} data={item} />
                        ))}
                    </Slider>
                </div>
            )}
      </section>
    );
};

export default CaseStudySection;