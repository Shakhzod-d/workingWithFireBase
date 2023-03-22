import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./TimeSlot.css";

const TimeSlot = () => {
  const { timeSlots } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClickItem = (itemId) => {
    const newTimeSlots = timeSlots.map((itemObj) => {
      if (itemObj.id === itemId) {
        return { ...itemObj, isOpen: true };
      } else {
        return itemObj;
      }
    });
    dispatch({ type: "ADD_TIME_SLOTS", payload: newTimeSlots });
  };

  const onClickTimeSlot = (id) => {
    // TODO: need to add some properities to specific object and modify then post back to fire store
    console.log(id);
  };

  if (timeSlots.length === 0) {
    return <h3>loading...</h3>;
  }

  return (
    <>
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
                  onClick={() => onClickTimeSlot(itemObj.id)}
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
