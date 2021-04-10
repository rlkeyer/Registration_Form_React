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
        <div>
          <span className="RegistrationContainer__account">
            Already have an account?{" "}
          </span>
          <a
            href="https://apps.availity.com/availity/web/public.elegant.login"
            className="RegistrationContainer__signin"
          >
            Sign in
          </a>
        </div>
      </div>
      <div className="RegistrationContainer__body">
        <RegistrationForm />
      </div>
    </div>
  );
};
