import React from "react";
import { useForm } from "react-hook-form";
import LogIn from "../LogIn/LogIn";

const AddEvents = () => {
  const { user } = LogIn();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //   add New data
  const onSubmit = (data) => {
    fetch("https://scary-goblin-02267.herokuapp.com/addEvents", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <h1 className="mt-5 text-center text-info">Add Events</h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="p-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("title")}
                placeholder="Title"
                className="p-2 m-2 w-100"
              />

              <input
                {...register("title")}
                placeholder="price"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              {/* <br />
              <select {...register("EventColor")} className="p-2 m-2 w-100">
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
                <option value="black">black</option>
              </select>
              <br /> */}

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Add-Event"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
