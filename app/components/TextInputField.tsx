"use client";
import React, { useState } from "react";
import { Path, UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps {
  label: Path<FieldValues>;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  id: string;
  type: string;
}

const TextInputField: React.FC<InputProps> = ({
  id,
  label,
  type,
  register,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  
  return (
    <div>
      <input
        {...register(label, { required })}
        type={type}
        id={id}
        className={`text-input w-full p-3 border border-gray-300 rounded `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        
      />
      <label
        htmlFor={id}
        className={`text-label transition absolute top-3 left-1 ${
          isFocused || isFilled ? "text-sm text-gray-600" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInputField;
