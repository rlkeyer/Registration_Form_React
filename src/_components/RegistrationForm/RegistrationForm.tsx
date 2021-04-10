import React, { useState } from "react";
import { TextInput } from "../TextInput";
import { ReactComponent as MedicalLogo } from "../../undraw_medicine.svg";
import "./RegistrationForm.scss";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [npiNumber, setNpiNumber] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="RegistrationForm">
      <div className="RegistrationForm__inputs">
        <div className="RegistrationForm__inputs-names">
          <label>
            First Name:
            <TextInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <TextInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <div className="RegistrationForm__inputs-names">
          <label>
            NPI Number:
            <TextInput
              value={npiNumber}
              onChange={(e) => setNpiNumber(e.target.value)}
            />
          </label>
          <label>
            Address:
            <TextInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
        <div className="RegistrationForm__inputs-names">
          <label>
            Phone Number:
            <TextInput
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            Email:
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <button className="RegistrationForm__inputs-submit" type="submit">
          Create Account
        </button>
      </div>
      <div className="RegistrationForm__medical-logo">
        <MedicalLogo className="svg" />
      </div>
    </div>
  );
};
