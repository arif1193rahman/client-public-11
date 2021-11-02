import React from "react";
import "./Adventure.css";

const Adventure = () => {
  return (
    <div className="mt-5">
      <h2 className="adventure-main m-4">This is <span>your</span> Adventure <span>PART</span></h2>
      <div className="row adventure">
        <div className="col-6 adventure-first">
          <img
            src="https://i.ibb.co/FD4nMfj/shutterstock-428626417.jpg"
            alt=""
          />
        </div>
        <div className="col-6">
          <h1 className="adventure-second-head"><span>WORlD</span> IS <span>YOURS</span></h1>
          <br />
          <h3>Learn More About Adventure</h3>
          <p>EXPLORE OUR ECO AND ADVENTURE TRAVEL ITINERARIES!</p>
          <p>
            <span className="adventure-text">
              After the long, dreary winter we just had, filled with dark days
              and frigid temps, we all deserve a vacation of some sort. This
              could mean jet-setting someplace breathtakingly beautiful—making
              your Instagram stories the thing to watch—or just escaping to
              somewhere close by for a relaxing getaway.None of this would be
              quite like paradise, however, if you find yourself in these
              less-than-ideal situations: losing your passport, dealing with
              broken luggage, or even finding yourself stranded somewhere
              dangerous with a dead phone.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
