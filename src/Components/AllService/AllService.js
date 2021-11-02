import React from "react";
import { Link } from "react-router-dom";
import './AllService.css';

const AllService = ({ service }) => {
  const { name, details, _id,img, price} = service;
  return (
    <div className="col-lg-6 image">
      <h3 className="service-name">{name}</h3>
      <p>{details}</p>
      <p>Price: ${price}</p>
      <img src={img} alt="" />
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-warning mt-3">Book</button>
      </Link>
    </div>
  );
};

export default AllService;
