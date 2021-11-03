import React, { useEffect, useState } from "react";
import OrderDetails from "./OrderDetails/OrderDetails";

const MyOrders = () => {
  const [bookings, setBookings] = useState({});
  // useEffect(() => {
  //   fetch("https://scary-goblin-02267.herokuapp.com/booking")
  //     .then((res) => res.json())
  //     .then((data) => setBookings(data));
  // }, []);
  return(
       <div>
         <h1>This is my Your Order</h1>
           {/* {
                bookings.map(booking=><OrderDetails
                key={booking._id}
                booking={booking}
                >
                </OrderDetails>)
           } */}
       </div>
       );
};

export default MyOrders;
