import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllService from '../AllService/AllService';
import './OurServices.css'

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`https://scary-goblin-02267.herokuapp.com/services`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="total-card mt-5">
            <h2>This is our service</h2>
            <div className="row m-4">
                    {
                        services.map(service=><AllService 
                            service={service}
                            key={service.id}
                            ></AllService>)
                    }
            </div>
        </div>
    );
};

export default OurServices;