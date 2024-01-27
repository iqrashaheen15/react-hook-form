import React from "react";
import { Path, UseFormRegister, FieldValues } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";

interface InputProps {
  label: Path<FieldValues>;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
}

const TextInput: React.FC<InputProps> = ({ label, register, required }) => {
  return (
    <div className="p-5 flex gap-4 w-full">
      <div className="flex w-1/2">
        <label>{label}</label>
        {required && <LuAsterisk className="" />}
      </div>
      <div className="w-full">
        <input
          {...register(label, { required })}
          type="text"
          className="border p-2.5 rounded-sm"
          placeholder={`Enter ${label}`}
          aria-invalid={required ? "true" : "false"}
        />
      </div>
    </div>

    
  );
};

export default TextInput;
