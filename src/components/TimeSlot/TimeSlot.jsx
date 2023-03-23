import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./TimeSlot.css";

const TimeSlot = () => {
  const { timeSlots, eventTime } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickItem = (itemId) => {
    const newTimeSlots = timeSlots.map((itemObj) => {
      if (itemObj.id === itemId) {
        // item title
        dispatch({ type: "UPDATE_MEETING_HOUR", payload: itemObj.time });
        return { ...itemObj, isOpen: true };
      } else {
        return { ...itemObj, isOpen: false };
      }
    });
    dispatch({ type: "ADD_TIME_SLOTS", payload: newTimeSlots });
  };

  const onClickTimeSlot = () => {
    navigate("/userDetails");
  };


  return (
    <>
      <h3>{eventTime}</h3>
      {timeSlots?.map((itemObj) => {
        return (
          <li
            className={`li ${!itemObj.isOpen ? "hover" : ""}`}
            onClick={() => onClickItem(itemObj.id)}
            key={itemObj.id}
          >
            <p className={itemObj.isOpen ? "changeStyleP" : ""}>
              {itemObj.time}
            </p>
            <div className={itemObj.isOpen ? "btnContainer" : ""}>
              {itemObj.isOpen && (
                <button
                  onClick={() => onClickTimeSlot()}
                  className="confirmBtn"
                >
                  confirm
                </button>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};

export default TimeSlot;
