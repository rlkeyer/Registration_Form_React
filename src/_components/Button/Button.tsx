import React from "react";
import "./Button.scss";

type ButtonType = {
  onClick?: () => void;
  type?: "submit" | "button";
  id?: string;
};

export const Button: React.FC<ButtonType> = ({
  children,
  onClick,
  type = "button",
  id,
}) => {
  return (
    <button className="Button" type={type} onClick={onClick} id={id}>
      {children}
    </button>
  );
};
