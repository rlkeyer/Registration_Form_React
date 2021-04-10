import React, { useState } from "react";
import "./RegistrationContainer.scss";
import logo from "./availity_logo.png";
import { RegistrationForm } from "../RegistrationForm";

export const RegistrationContainer = () => {
  return (
    <div className="RegistrationContainer">
      <div className="RegistrationContainer__header">
        <img
          alt="availity logo"
          src={logo}
          className="RegistrationContainer__logo"
        />
        <div>Already have an account? Log in</div>
      </div>
      <div className="RegistrationContainer__body">
        <div className="RegistrationContainer__title">
          Create your Availity account
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};
