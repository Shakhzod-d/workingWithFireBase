import React from 'react'

import "./TimeSlot.css";

const TimeSlot = ({id, time, isOpen}) => {
  const [clickedItemID, setID] = React.useState("");

  const onClickItem = (itemId) => {
    setID(itemId);
    
    if(id === clickedItemID){
      console.log(1);
    }
  }
  console.log(clickedItemID);

  return (
    <li onClick={() => onClickItem(id)}>{time}</li>
  )
}

export default TimeSlot