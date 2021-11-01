import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllService from '../AllService/AllService';

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`https://scary-goblin-02267.herokuapp.com/services`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2>this is our service {services.length}</h2>
            <div className="row">
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