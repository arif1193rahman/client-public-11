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

  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://scary-goblin-02267.herokuapp.com//booking", data)
    .then((res) => {
      if (res.data.insertedId) {
        alert("Yehhh , You are added");
        reset();
      }
    });
  };

  useEffect(() => {
    fetch("/https://scary-goblin-02267.herokuapp.com/booking")
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
        <h2>Confirm Your Order...</h2>
        {/* <p>{placeOrderId?.name}</p> */}
        {/* <p>{singleBooking?.details}</p>  */}
      </div>
      <div className="col-lg-6 col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2"
            placeholder="Name"
            {...register("Name")}
          />
          <input
                    type="number"
                    className="p-2 m-2"
                    // defaultValue="+880"
                     placeholder="+880"
                    {...register("Contract-Number", { required: true })}
          /> 

          <input
            type="number"
            className="p-2 m-2"
            // defaultValue="price"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <br />

          <input
            type="text"
            className="p-2 m-2"
            placeholder="City"
            {...register("City", { required: true })}
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
