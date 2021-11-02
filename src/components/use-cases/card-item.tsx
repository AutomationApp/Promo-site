import React from "react";

const CardItem = ({ data }) => {
  return (
    <div className="col-12 col-md-4 text-center">
      <div className="mb-3">
        <img
          src={data.image}
          width="150px"
          alt={data.title}
          className="img-fluid"
        />
      </div>

      <h3>{data.title}</h3>

      <p className="text-muted mb-6 mb-md-0">{data.content}</p>
    </div>
  );
};

export default CardItem;
