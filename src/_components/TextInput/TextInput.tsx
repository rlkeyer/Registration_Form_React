import React from "react";
import "./TextInput.scss";

export const TextInput = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  return (
    <div className="TextInput">
      <input
        className="TextInput__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
