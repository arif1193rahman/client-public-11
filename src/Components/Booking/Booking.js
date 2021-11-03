import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../LogIn/Hooks/useAuth";
import './Booking.css';

const Booking = () => {
  const { user } = useAuth();
  const { placeOrderId } = useParams();
  const [saveUser, setSaveUser] = useState([]);

  console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Address manu

  const onSubmit = (data) => {
    // data.name=saveUser?.name;
    // data.price= saveUser.price;
    fetch(`https://scary-goblin-02267.herokuapp.com/booking`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result)=>{
      // console.log("sub,it" ,result);
      if (result.insertedId) {
        
        alert("Yehhh , You are added")
        reset()
      }});
        
    
    };

   
// set Details
  useEffect(() => {
    fetch(`https://scary-goblin-02267.herokuapp.com/services/${placeOrderId}`)
    .then(res=>res.json())
    .then(data=>setSaveUser(data))
  },[placeOrderId])

 
  return (
    <div className="row container p-5">
      <div className="col-lg-6 col-sm-12">
        <h2>Confirm Your Order...</h2>
        <h1>To</h1>
        <p className="booking-section"><u>{saveUser?.name}</u></p>
        <p>{saveUser?.details}</p> 
      </div>
      <div className="col-lg-6 col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2"
            // placeholder="Name"
            defaultValue={user?.displayName}
            {...register("Name")}
          />
          <input
            className="p-2 m-2"
            // placeholder="Name"
            defaultValue={user?.email}
            {...register("email")}
          />
          <input
            type="text"
            className="p-2 m-2"
            defaultValue={saveUser?.name}
            // placeholder="+880"
            {...register("name")}
          />

          <input
            type="number"
            className="p-2 m-2"
            defaultValue={saveUser.price}
            {...register("price")}
          />
          <br />

          <input
            type="text"
            className="p-2 m-2"
            placeholder="Your City"
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
