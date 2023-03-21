import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {
  const [value, onChange] = useState(new Date());

  const onClickDay = () => {
      console.log(value);

  }

  return (
    <div>
      <Calendar onClickDay={onClickDay} value={value} />
    </div>
  );
}   