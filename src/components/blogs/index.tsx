import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import CurveShape from "../common/curve-shape";
import Img from "../../assets/img/covers/cover-13.jpg";
import BlogItem from "./blog-item";
import { useBlogsCategoriesQuery } from "../../graphql/useBlogsCategoriesQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CaseStudyItem from "./case-studies-item";
import PrevArrow from "../common/PrevArrow";
import NextArrow from "../common/NextArrow";
import { useCaseStudiesQuery } from "../../graphql/useCaseStudiesQuery";

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

const BlogsSection = ({ allWpPost }) => {
  const { allWpCategory } = useBlogsCategoriesQuery();
  const { allWpCaseStudy } = useCaseStudiesQuery();

  const [blogs, setBlogs] = useState(allWpPost.nodes);
  const allBlogs = allWpPost.nodes;
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const { nodes } = allWpCategory;

  const projectsPerPage = 12;
  const offset = pageNumber * projectsPerPage;

  let pageCount = Math.ceil(blogs.length / projectsPerPage);

  const changePage = ({ selected: selectedPage }: any) => {
    setPageNumber(selectedPage);
    window.scrollTo(0, 500);
  };

  const onSearch = () => {
    const res = allBlogs.filter((proj) =>
      Object.values(proj)
        .join(" ")
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );

    setBlogs(res);
    setPageNumber(0);
  };
  const onCategoryChange = async (id) => {
    console.log(allBlogs);
    const res = await allBlogs.filter(
      (blog) => blog.categories.nodes[0].id === id
    );
    setPageNumber(0);
    setBlogs(res);
  };

  return (
    <>
      <section
        data-jarallax
        data-speed=".8"
        className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax"
        style={{ backgroundImage: `url("${Img}")` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h1 className="display-2 font-weight-bold text-white">
                Knowledge center
              </h1>

              <p className="lead mb-0 text-white-75">
                Learn how to improve your business with Automation.app
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurveShape />

      <section className="mt-n6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="rounded shadow mb-4">
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text border-0 pr-1">
                      <i className="fe fe-search"></i>
                    </span>
                  </div>

                  <input
                    type="text"
                    className="form-control border-0 px-1"
                    aria-label="Search our knowledge center and helpdesk ..."
                    placeholder="Search our knowledge center and helpdesk ..."
                    onKeyDown={onSearch}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />

                  <div className="input-group-append">
                    <span className="input-group-text border-0 py-0 pl-1 pr-3">
                      <a
                        className="btn btn-sm btn-primary"
                        href="blog-search.html"
                      >
                        Search
                      </a>
                    </span>
                  </div>
                </div>
              </form>

              <div className="row align-items-center">
                <div className="col-auto">
                  <h6 className="font-weight-bold text-uppercase text-muted mb-0">
                    Categories:
                  </h6>
                </div>
                <div className="col ml-n5">
                  {nodes.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onCategoryChange(item.id)}
                      className="badge badge-pill badge-secondary-soft cursor-pointer"
                    >
                      <span className="h6 text-uppercase">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-7 pt-md-10">
        <div className="container">
          <div className="row">
            {blogs.slice(offset, offset + projectsPerPage).map((item) => (
              <BlogItem key={item.id} blog={item} />
            ))}
          </div>

          <div className="row justify-content-center py-7 py-md-10">
            <div className="">
              {pageCount === 0 ? (
                <p>No blogs to show</p>
              ) : (
                <ReactPaginate
                  initialPage={0}
                  breakLabel={<a href="">...</a>}
                  pageCount={pageCount}
                  forcePage={pageNumber}
                  onPageChange={changePage}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  containerClassName={"pagination"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-7 pt-md-10">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md">
              <h3 className="mb-0">Case Studies</h3>

              <p className="mb-0 text-muted">In-depth looks at our work.</p>
            </div>
            <div className="col-12 col-md-auto">
              <a
                href="#!"
                className="btn btn-sm btn-outline-gray-300 d-none d-md-inline"
              >
                View all
              </a>
            </div>
          </div>

          <Slider {...settings}>
            {allWpCaseStudy.nodes.map((item) => (
              <CaseStudyItem key={item.id} data={item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BlogsSection;
