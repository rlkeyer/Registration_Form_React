import React from "react";
import "./RegistrationForm.scss";
import logo from "./availity_logo.png";

export const RegistrationForm = () => {
  return (
    <div className="RegistrationForm">
      <div className="RegistrationForm__form">
        <div className="RegistrationForm__header">
          <img
            alt="availity logo"
            src={logo}
            className="RegistrationForm__logo"
          />
          <div>Already have an account? Log in</div>
        </div>
        <div className="RegistrationForm__body">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
