import React from "react";
import { Button } from "../Button/Button";
import "./RegistrationConfirmation.scss";

export const RegistrationConfirmation = () => {
  return (
    <div className="RegistrationConfirmation">
      <div>
        Thank you for registering! You will receive a confirmation email
        shortly.
      </div>
      <Button
        onClick={() =>
          (window.location.href =
            "https://apps.availity.com/availity/web/public.elegant.login")
        }
      >
        Sign In
      </Button>
    </div>
  );
};
