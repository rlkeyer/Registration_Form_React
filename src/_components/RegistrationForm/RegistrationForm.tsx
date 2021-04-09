import React, { useState } from "react";
import "./RegistrationForm.scss";
import logo from "./availity_logo.png";
import { TextInput } from "../TextInput";
import { ReactComponent as MedicalLogo } from "../../undraw_medicine.svg";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
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
          <div>Create your Availity account</div>
          <div className="RegistrationForm__form-container">
            <div>
              <TextInput
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="RegistrationForm__medical-logo">
              <MedicalLogo className="svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
