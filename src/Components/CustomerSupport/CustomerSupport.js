import React from "react";
import "./CustomerSupport.css";

const CustomerSupport = () => {
  return (
    <div>
      <h2 className="customer-head">
        Customer <span>service</span> portal
      </h2>
      <div className="row customer-section">
        <div className="col-8">
            <h1 className="customer-first">24/7 <span>Customer Support</span></h1>
          <h6>
            Our outstanding customer support is available 24 hours a day, 7 days
            a week.
          </h6>
          <p>
            Service channels: Phone , email, and online chat. Our phone based
            customer support is available 24/7. If you contact us by email or
            online chat, we will get back to you as soon as we can.
          </p>

          <button className="btn btn-success">Contract Us</button>
        </div>
        <div className="col-4 customer-image">
          <div>
              <img src="https://i.ibb.co/8b82Dsq/girl-talking-phone-looking-her-watch-formal-dress-50008846.jpg" alt="" />
          </div>
          <div>
              <img src="https://i.ibb.co/5RBwPGc/images.jpg" alt="" />
          </div>
          <div>
              <img src="https://i.ibb.co/w4dVSBf/portrait-asian-businesswoman-isolated-on-260nw-307563272.jpg" alt="" />
          </div>
          <div>
              <img src="https://i.ibb.co/mTL9kJ4/man-formal-suit-man-formal-suit-white-background-107682590.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
// https://i.ibb.co/8b82Dsq/girl-talking-phone-looking-her-watch-formal-dress-50008846.jpg
// https://i.ibb.co/5RBwPGc/images.jpg
// https://i.ibb.co/w4dVSBf/portrait-asian-businesswoman-isolated-on-260nw-307563272.jpg
