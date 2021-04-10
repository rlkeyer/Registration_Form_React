import React, { useState } from "react";
import { TextInput } from "../TextInput";
import { ReactComponent as MedicalLogo } from "../../undraw_medicine.svg";
import "./RegistrationForm.scss";
import { Button } from "../Button";

export const RegistrationForm = ({
  onSubmit,
}: {
  onSubmit: (val: boolean) => void;
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [npiNumber, setNpiNumber] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // ability to add custom validation logic for each input
  const validation = {
    validFirstName: !!firstName.length,
    validLastName: !!lastName.length,
    validNpiNumber: !!npiNumber.length,
    validAddress: !!address.length,
    validPhone: !!phone.length,
    validEmail: !!email.length,
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    const {
      validFirstName,
      validLastName,
      validNpiNumber,
      validAddress,
      validPhone,
      validEmail,
    } = validation;
    if (
      validFirstName &&
      validLastName &&
      validNpiNumber &&
      validAddress &&
      validPhone &&
      validEmail
    ) {
      const data = {
        firstName,
        lastName,
        npiNumber,
        address,
        phone,
        email,
      };
      console.log({ formData: data });
      onSubmit(true);
    } else {
      console.log("Please complete all fields to continue");
      onSubmit(false);
    }
    e.preventDefault();
  };
  return (
    <div className="RegistrationForm">
      <form className="RegistrationForm__inputs" onSubmit={handleSubmit}>
        <div className="RegistrationForm__title">
          Create your Availity account
        </div>
        <div className="RegistrationForm__grid">
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
          <label>
            NPI Number:
            <TextInput
              value={npiNumber}
              onChange={(e) => {
                // only allow numbers in NPI input
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value))
                  setNpiNumber(e.target.value);
              }}
            />
          </label>
          <label>
            Address:
            <TextInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <label>
            Phone Number:
            <TextInput
              value={phone}
              onChange={(e) => {
                // only allow numbers in Phone input
                const re = /^[0-9\b]*$/;
                if (re.test(e.target.value)) setPhone(e.target.value);
              }}
            />
          </label>
          <label>
            Email:
            <TextInput
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <Button type="submit">Create Account</Button>
      </form>
      <div className="RegistrationForm__medical-logo">
        <MedicalLogo className="RegistrationForm__svg" />
      </div>
    </div>
  );
};
