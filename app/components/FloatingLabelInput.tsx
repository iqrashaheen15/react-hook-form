import React, { useState } from "react";

interface InputProps {
    label: string
    id:string
    type:string
  }
const FloatingLabelInput: React.FC<InputProps>  = ({ id, label, type}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");
  
    const handleInputChange = (e:any) => {
      setInputValue(e.target.value);
    };
  return (
    <div className="relative mb-6 w-1/2">
      <input
        type={type}
        id={id}
        required
        value={inputValue}
        onChange={handleInputChange}
        className="text-input w-full p-3 border border-gray-300 rounded"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={id}
        className={`text-label transition absolute top-3 left-1 ${
          isFocused || inputValue ? "text-sm text-gray-600" : ""
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default FloatingLabelInput