import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
var time = today.getHours();

const customStyles = {
  // color: "red"
};
// if (time >= 0 && time <= 12) {
//   customStyles.color = "red";
// } else if (time > 12 && time <= 18) {
//   customStyles.color = "green";
// } else {
//   customStyles.color = "blue";
// }

const handleText = () => {
  if (time >= 0 && time <= 12) {
    customStyles.color = "red";
    return "Good Morning";
  } else if (time > 12 && time <= 18) {
    customStyles.color = "green";
    return "Good Afternoon";
  } else {
    customStyles.color = "blue";
    return "Good Evening";
  }
};

ReactDOM.render(
  <h1 style={customStyles}>{handleText()}</h1>,
  document.getElementById("root")
);
