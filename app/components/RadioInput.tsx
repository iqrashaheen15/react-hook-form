import React from "react";
import { Path, UseFormRegister, FieldValues } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";

interface InputProps {
  label: Path<FieldValues>;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
}

const RadioInput: React.FC<InputProps> = ({ label, register, required }) => {
  return (
    
      <div className="mt-2 pl-6">
        <input type="radio" {...register(label, { required })} />
        <label className="pl-2">{label}</label>
      </div>
    
  );
};

export default RadioInput;
