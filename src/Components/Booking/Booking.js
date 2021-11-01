import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFirebase from "../LogIn/Hooks/useFirebase";
import { useForm } from "react-hook-form";
import axios from "axios";

const Booking = () => {
  const { user } = useFirebase();
  const { placeOrderId } = useParams();
  const [booking, setBooking] = useState([]);
  const [singleBooking, setSingleBooking] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Address manu

  const onSubmit = data => {
      console.log(data)
    axios.post('http://localhost:5000/booking',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('Yehhh , You are added')
            reset();
        }
       
    })
    };











//   const onSubmit = (data) => {
//     fetch("https://scary-goblin-02267.herokuapp.com/addEvents", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => console.log(result));
//     console.log(data);
//   };

  useEffect(() => {
    fetch("/singleBooking.json")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  useEffect(() => {
    const detailsBooking = booking?.find(
      (booking) => booking.id == placeOrderId
    );
    setSingleBooking(detailsBooking);
  }, [booking]);

  return (
    <div className="row container p-5">
      <div className="col-lg-6 col-sm-12">
        <h2>This is Order {placeOrderId}</h2>
        <p>{singleBooking?.name}</p>
        <p>{singleBooking?.details}</p>
      </div>
      <div className="col-lg-6 col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2"
            defaultValue="test"
            placeholder="Name"
            {...register("example")}
          />
          {/* <input
                    type="text"
                    className="p-2 m-2"
                    defaultValue="Name"
                    {...register("userName", { required: true })} */}
          {/* /> */}
          {/* <br />
                  <input
                    type="email"
                    className="p-2 m-2"
                    // defaultValue={user.email}
                    {...register("userEmail", { required: true })}
                  />
                  <br /> */}
          {/* <input
                    type="text"
                    className="p-2 m-2"
                    // defaultValue={}
                    {...register("destinationName", { required: true })}
                  />
                  <br /> */}

          <input
            type="text"
            className="p-2 m-2"
            defaultValue="Address"
            {...register("price", { required: true })}
          />
          <br />
          {/* <input
                    className="p-2 m-2"
                    placeholder="Address"
                    // {...register("address", { required: true })}
                  />
                  <br /> */}
          <input
            className="p-2 m-2"
            placeholder="City"
            {...register("city", { required: true })}
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input
            className="w-50 mx-auto px-3 py3 bg-secondary fw-bold fs-5  text-white btn "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Booking;
