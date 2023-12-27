import { useState } from "react";

import "@/assets/css/input.scss";

import { InputProps } from "@/utils/type";

const Input:React.FC<InputProps> = ({ type, label, value }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <input
        className={`input ${inputValue ? "has-value" : ""}`}
        type={type}
        value={inputValue}
        onChange={handleInputChange}
      />
      <label className="label">{label}</label>
    </div>
  );
};

export default Input;
