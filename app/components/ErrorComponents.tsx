import React from 'react';
import { UseFormRegister, FieldValues, useForm, FormProvider,useFormContext } from 'react-hook-form';

interface InputProps {
  label: string;
  register: UseFormRegister<FieldValues>;
}

const ErrorComponent: React.FC<InputProps> = ({ label, register }) => {
  const { formState: { errors } } = useFormContext(); // Using useFormContext instead

  return (
    <div>
      {errors[label]?.type === 'required' && (
        <p role="alert" className="text-red-500 text-[12px]">
          {label} is required
        </p>
      )}
    </div>
  );
};

export default ErrorComponent;
