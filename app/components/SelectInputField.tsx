import React from "react";
import { Path, UseFormRegister, FieldValues } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";

interface InputProps {
  label: Path<FieldValues>;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  options: Array<string>
 
}

const SelectInputField: React.FC<InputProps> = ({
  
  label,
  register,
  required,
  options
}) => {
  return (
    <>
      <div className="flex">
        <label className="p-1">{label}</label>
        <LuAsterisk className="" />
      </div>
      <div className="w-full">
        <select
          {...register(label, { required })}
          className={`text-input w-full p-3 border border-gray-300 rounded `}
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectInputField;
