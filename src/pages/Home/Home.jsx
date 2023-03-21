import React from 'react';
import { db } from '../../firebase';
import {
  collection,
  getDocs,
} from "firebase/firestore";

import MyCalendar from '../../components/Calendar/Calendar'
import TimeSlotContainer from '../../components/TimeSlotContainer/TimeSlotContainer';
import UserInfoAside from '../../components/UserInfoAside/UserInfoAside';

import "./Home.css";

const Home = () => {
  const [timeSlots, setTimeSlots] = React.useState([]);
  const timeSlotsCollectionRef = collection(db, "timeSlots");

  React.useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(timeSlotsCollectionRef);
      setTimeSlots(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);


  return (
    <div className='container'>
      <div className='app'>
        <UserInfoAside />
        <MyCalendar />
        <TimeSlotContainer timeSlots={timeSlots} />
      </div>
    </div>
  )
}

export default Home