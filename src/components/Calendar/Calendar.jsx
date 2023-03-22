import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());
  const timeSlotsCollectionRef = collection(db, "timeSlots");
  const dispatch = useDispatch();

  const onClickDay = () => {
    // console.log(value);
    getUsers();
  };

  const getUsers = async () => {
    const data = await getDocs(timeSlotsCollectionRef);
    const timeSlots = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({ type: "ADD_TIME_SLOTS", payload: timeSlots });
  };

  return (
    <div>
      <Calendar onClickDay={onClickDay} value={value} />
    </div>
  );
}
