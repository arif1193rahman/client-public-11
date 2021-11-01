import React from "react";
import { Link } from "react-router-dom";

const AllService = ({ service }) => {
  const { name, details, clinic, _id,img} = service;
  return (
    <div className="col-lg-6">
      <h3>{name}</h3>
      <p>{details}</p>
      <p>{clinic}</p>
      <img src={img} alt="" />
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-warning">Book</button>
      </Link>
    </div>
  );
};

export default AllService;
