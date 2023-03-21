import React from 'react'
import TimeSlot from '../TimeSlot/TimeSlot'

import "./TimeSlotContainer.css";

const TimeSlotContainer = ({timeSlots}) => {


  if(timeSlots.length === 0){
    return <p className='loading'>loading...</p>
  }
    // console.log(timeSlots);
  return (
    <div className='timeSlotContainer'>
        <ul className='aviableTimeContainer'>
            {timeSlots?.map((itemObj) => {
                return <TimeSlot key={itemObj.id} {...itemObj} />
            })}
        </ul>
    </div>
  )
}

export default TimeSlotContainer