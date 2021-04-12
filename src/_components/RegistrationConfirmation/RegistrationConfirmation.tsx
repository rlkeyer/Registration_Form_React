import React from "react";
import { Button } from "..";
import "./RegistrationConfirmation.scss";

export const RegistrationConfirmation = () => {
  return (
    <div className="RegistrationConfirmation">
      <div className="RegistrationConfirmation__text">
        Thank you for registering! You will receive a confirmation email
        shortly.
      </div>
      <Button
        onClick={() =>
          (window.location.href =
            "https://apps.availity.com/availity/web/public.elegant.login")
        }
        id="RegistrationConfirmation__signin"
      >
        Sign In
      </Button>
    </div>
  );
};
