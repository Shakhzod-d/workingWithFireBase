import React from "react";
import { useSelector } from "react-redux";
import TimeSlot from "../TimeSlot/TimeSlot";

import "./TimeSlotContainer.css";

const TimeSlotContainer = () => {
  const { timeSlots } = useSelector((state) => state);

  if(timeSlots.length === 0){
    return;
  }

  return (
    <div className="timeSlotContainer">
      <ul className="aviableTimeContainer">
        <TimeSlot />
      </ul>
    </div>
  );
};

export default TimeSlotContainer;
