import React from "react";
import "./Button.scss";

type ButtonType = {
  onClick?: () => void;
  type?: "submit" | "button";
  id?: string;
  className?: string;
};

export const Button: React.FC<ButtonType> = ({
  children,
  onClick,
  type = "button",
  id,
  className,
}) => {
  return (
    <button
      className={`Button ${className ? className : ""}`}
      type={type}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
};
