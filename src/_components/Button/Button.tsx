import React from "react";
import "./Button.scss";

type ButtonType = {
  onClick?: () => void;
  type?: "submit" | "button";
};

export const Button: React.FC<ButtonType> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button className="Button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};
