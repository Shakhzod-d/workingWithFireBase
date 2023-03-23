import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function MyCalendar() {
  const [value, setValue] = useState(new Date());
  const timeSlotsCollectionRef = collection(db, "timeSlots");
  const dispatch = useDispatch();

  const onClickDay = (date) => {
    setValue(date);
    getUsers();
    const eventTime = `${dayNames[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`;
    // console.log(date.getFullYear());
    const currentTime = {
      eventTime,
      currentYear: date.getFullYear()
    }
    dispatch({type: "UPDATE_EVENT_TIME", payload: currentTime});
  };

  const getUsers = async () => {
    const data = await getDocs(timeSlotsCollectionRef);
    const timeSlots = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({ type: "ADD_TIME_SLOTS", payload: timeSlots });
  };

  return (
    <div className="calendar-container">
      <h2>Select a Date & Time</h2>
      <br />
      <Calendar onChange={onClickDay} value={value} />
    </div>
  );
}
