import React from "react";
import TimeSlot from "../TimeSlot/TimeSlot";

import "./TimeSlotContainer.css";

const TimeSlotContainer = () => {
  return (
    <div className="timeSlotContainer">
      <ul className="aviableTimeContainer">
        <TimeSlot />
      </ul>
    </div>
  );
};

export default TimeSlotContainer;
