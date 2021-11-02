import React, { useEffect, useState } from "react";
import OrderDetails from "./OrderDetails/OrderDetails";

const MyOrders = () => {
  const [bookings, setBookings] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return(
       <div>
           {
                bookings.map(booking=><OrderDetails
                key={booking._id}
                booking={booking}
                >
                </OrderDetails>)
           }
       </div>
       );
};

export default MyOrders;
