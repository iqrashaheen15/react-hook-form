"use client";
import { LuAsterisk } from "react-icons/lu";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import TextInput from "./components/TextInput";
import NumberInput from "./components/NumberInput";
// import EmailInputFields from "./components/EmailInputFields";
import SelectInputField from "./components/SelectInputField";
import RadioInput from "./components/RadioInput";

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => console.log("Clicked");

  const selectOption: string[] = [
    "Pakistan",
    "India",
    "Canada",
    "America",
    "China",
  ];

  return (
    <section className="flex justify-center min-h-full mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border w-1/2 bg-[#DCF2F1]"
      >
        <div className="flex justify-center my-6">
          <h1 className="text-3xl font-bold">React Hook Form</h1>
        </div>

        {/* ----------------TextInputFieldComponent---------------------- */}
        <TextInput label="FirstName" register={register} required />
        <div className="ml-64">
          {errors.FirstName?.type === "required" && (
            <p role="alert" className="text-red-500 text-[12px]">
              FirstName is required
            </p>
          )}
        </div>

        {/* ----------------TextInputFieldComponent---------------------- */}
        <TextInput label="LastName" register={register} required />
        <div className="ml-64">
          {errors.LastName?.type === "required" && (
            <p role="alert" className="text-red-500 text-[12px]">
              LastName is required
            </p>
          )}
        </div>

        {/* ----------------NumberInputFieldComponent---------------------- */}
        <NumberInput label="Contact" register={register} required />
        <div className="ml-64">
          {errors.Contact?.type === "required" && (
            <p role="alert" className="text-red-500 text-[12px]">
              Contact is required
            </p>
          )}
        </div>

        {/* ----------------NumberInputFieldComponent---------------------- */}
        <NumberInput label="Price" register={register} required />
        <div className="ml-64">
          {errors.Price?.type === "required" && (
            <p role="alert" className="text-red-500 text-[12px]">
              Price is required
            </p>
          )}
        </div>

        {/* ----------------EmailInputFieldComponent---------------------- */}

        {/* <EmailInputFields label="Email" register={register} required />
        <div className="ml-64">
          {errors.Email?.type === "required" && (
            <p role="alert" className="text-red-500 text-[12px]">
              Email is required
            </p>
          )}
        </div> */}

        {/* ----------------RadioInputFieldComponent---------------------- */}
        <RadioInput label="Gender" register={register} required />
        <div className="ml-64">
          {errors.Gender?.type === "required" && (
            <p role="alert" className="text-red-500 text-[12px]">
              Gender is required
            </p>
          )}
        </div>
        {/* ----------------SelectInputFieldComponent---------------------- */}

        <SelectInputField
          label="Country"
          register={register}
          required
          options={selectOption}
        />
        <div className="ml-64">
          {errors.Country?.type === "required" && (
            <p role="alert" className="text-red-500 text-[12px]">
              Country is required
            </p>
          )}
        </div>

        {/* Submit button */}
        <div>
          <button className="submit px-6 bg-blue-700 text-white py-3 rounded-md float-end m-5">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
