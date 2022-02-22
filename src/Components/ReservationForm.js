import React from "react";

const ReservationForm = ({ restaurant }) => {
  let personCount = 0;
  let name = "";
  let mobileNumber = "";

  return (
    <form className="reservation-form">
      <h3>Make A Reservation at {restaurant.name}!</h3>
      <img src={restaurant.image} />
      <input placeholder="Enter Your Name" />
      <input placeholder="Enter Your Phone Number" />
      <h4>Number of People</h4>
      <button>-</button>
      {personCount}
      <button>+</button>
      <button>Submit</button>
    </form>
  );
};

export default ReservationForm;
