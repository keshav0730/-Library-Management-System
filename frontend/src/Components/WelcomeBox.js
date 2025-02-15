import React from "react";
import "./WelcomeBox.css";

function WelcomeBox() {
  return (
    <div className="welcome-box">
      <p className="welcome-title">📚 WELCOME TO THE LIBRARY</p>
      <p className="welcome-message">
        <span className="highlight">Feed Your Brain</span>
        <br />
        <span className="welcome-submessage">📖 Grab A Book & Start Reading</span>
      </p>
    </div>
  );
}

export default WelcomeBox;
