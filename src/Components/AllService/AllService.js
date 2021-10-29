import React from 'react';
import { Link } from 'react-router-dom';

const AllService = ({service}) => {
    const {name, details, clinic, id} = service;
    return (
        
            <div className="col-lg-6">
                    <h3>{name}</h3>
                    <p>{details}</p>
                    <p>{clinic}</p>
                    <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Check</button>
            </Link>
            </div>
    
    );
};

export default AllService;