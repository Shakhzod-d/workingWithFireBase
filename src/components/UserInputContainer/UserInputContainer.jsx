import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";

import { Input } from "@mui/joy";
import { Button } from "@mui/joy";
import { db } from "../../firebase";

import "./UserInputContainer.css";

const UserInputContainer = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const eventUserCollectionRef = collection(db, "eventUserInfo");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const newEventUserInfo = {
      name,
      email,
      phone,
      selectValue,
    };

    if (!name || !email || !phone || !selectValue) {
      window.alert("Need to fill all fields with at least 3 chars!");
    } else if (
      name.length > 2 &&
      email.length > 2 &&
      phone.length > 2 &&
      selectValue.length > 2
    ) {
      // POST user info to the firebase
      try {
        await addDoc(eventUserCollectionRef, newEventUserInfo);
        navigate("/invite");
      } catch (err) {
        console.error(err);
      }
    }

    setName("");
    setEmail("");
    setPhone("");
    setSelectValue("");
  };

  return (
    <div className="userInputContainer">
      <h2>Enter Details</h2>
      <br />
      <label htmlFor="meetings">Name*</label>
      <Input
        size="lg"
        variant="outlined"
        color="primary"
        className="nameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="meetings">Email*</label>
      <Input
        size="lg"
        variant="outlined"
        color="primary"
        className="nameInput"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="meetings">Phone number*</label>
      <Input
        size="lg"
        variant="outlined"
        color="primary"
        className="nameInput"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />

      <label htmlFor="cars">What is the purpose of the meeting?*</label>
      <br />
      <select
        className="options"
        value={selectValue || ""}
        onChange={(e) => setSelectValue(e.target.value)}
        name="cars"
        id="cars"
      >
        <option value="select">Select...</option>
        <option value="startup">
          I need startup product development consulting
        </option>
        <option value="Partnership">B2B Partnership</option>
        <option value="interviewee">I am an interviewee</option>
        <option value="other">Other</option>
      </select>

      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Button
          color="primary"
          onClick={handleSubmit}
          size="lg"
          variant="solid"
        >
          Schedule meeting
        </Button>
      </div>
    </div>
  );
};

export default UserInputContainer;
