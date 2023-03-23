import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

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
    const test = `${dayNames[value.getDay()]} ${months[value.getMonth()]} `;
    console.log(test);
  };

  const getUsers = async () => {
    const data = await getDocs(timeSlotsCollectionRef);
    const timeSlots = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({ type: "ADD_TIME_SLOTS", payload: timeSlots });
  };

  return (
    <div>
      <Calendar onChange={onClickDay} value={value} />

      {console.log(value.getDay())}
    </div>
  );
}
