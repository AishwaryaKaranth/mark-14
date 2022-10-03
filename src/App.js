import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [birthday, setBirthday] = useState("");
  const [isPalindrome, setIsPalindrome] = useState("");

  const changeHandler = (event) => {
    setBirthday(event.target.value);
  };

  const calculatePalindrome = (birthdayInt) => {
    for (let i = 0; i < birthdayInt.length / 2; i++) {
      if (birthdayInt[i] !== birthdayInt[birthdayInt.length - (i + 1)]) {
        setIsPalindrome(false);
        nextPalindrome(birthdayInt);
        return false;
      }
    }
    setIsPalindrome(true);
    return true;
  };

  const nextPalindrome = (birthdayInt) => {
    while (!isPalindrome) {
      birthdayInt++;
      if (!isPalindrome) {
        console.log(birthdayInt);
        break;
      }
    }
  };

  const clickHandler = () => {
    let birthdayInt = birthday.replace(/-/g, "");
    calculatePalindrome(birthdayInt);
  };

  return (
    <div className="App">
      <label>Enter your birthday</label>
      <input
        type="date"
        placeholder="Enter your birthday"
        value={birthday}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Submit</button>
      <h3>{birthday}</h3>
    </div>
  );
}
