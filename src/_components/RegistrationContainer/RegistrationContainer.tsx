import React, { useState } from "react";
import "./RegistrationContainer.scss";
import logo from "./availity_logo.png";
import { RegistrationForm } from "../RegistrationForm";
import { RegistrationConfirmation } from "../RegistrationConfirmation";

export const RegistrationContainer = () => {
  const [validRegistration, setValidRegistration] = useState(false);
  return (
    <div className="RegistrationContainer">
      <div className="RegistrationContainer__header">
        <img
          alt="availity logo"
          src={logo}
          className="RegistrationContainer__logo"
        />
        {!validRegistration && (
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
        )}
      </div>
      <div className="RegistrationContainer__body">
        {validRegistration ? (
          <RegistrationConfirmation />
        ) : (
          <RegistrationForm onSubmit={(val) => setValidRegistration(val)} />
        )}
      </div>
    </div>
  );
};
