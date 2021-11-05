import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="flickity-button flickity-prev-next-button next sliderButton"
      type="button"
      aria-label="Next"
      onClick={onClick}
    >
      <svg className="flickity-button-icon" viewBox="0 0 100 100">
        <path
          d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
          className="arrow"
          transform="translate(100, 100) rotate(180) "
        ></path>
      </svg>
    </button>
  );
};

export default NextArrow;
