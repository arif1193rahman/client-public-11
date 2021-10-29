import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {placeOrderId} = useParams();
    return (
        <div>
            <h2>This is Order {placeOrderId}</h2>
        </div>
    );
};

export default Booking;