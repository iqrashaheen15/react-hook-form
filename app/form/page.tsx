"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import TextInputField from "../components/TextInputField";
import SelectInputField from "../components/SelectInputField";
import RadioInput from "../components/RadioInput";
import ErrorComponents from "../components/ErrorComponents";

const PAGE = () => {
  const methods = useForm();
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

  const selectCategory: string[] = [
    "Pakistan",
    "India",
    "Canada",
    "America",
    "China",
  ];
  return (
    <section className="min-w-full">
      <div className="overflow-auto container mx-auto rounded-md shadow bg-white px-20 py-8 mt-10">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-6">
              <div className="relative w-1/2">
                <TextInputField
                  id="FirstName"
                  label="FirstName"
                  type="text"
                  register={methods.register}
                  required
                />
                <ErrorComponents
                  label="FirstName"
                  register={methods.register}
                />
              </div>

              <div className="relative w-1/2">
                <TextInputField
                  id="LastName"
                  label="LastName"
                  type="text"
                  register={methods.register}
                  required
                />

                <ErrorComponents label="LastName" register={methods.register} />
              </div>
            </div>

            <div className="flex flex-row gap-6 mt-10">
              <div className="relative w-1/2">
                <TextInputField
                  id="Email"
                  label="Email"
                  type="email"
                  register={methods.register}
                  required
                />
                <ErrorComponents label="LastName" register={methods.register} />
              </div>

              <div className="relative w-1/2">
                <TextInputField
                  id="Password"
                  label="Password"
                  type="password"
                  register={methods.register}
                  required
                />

                <ErrorComponents label="Password" register={methods.register} />
              </div>
            </div>

            <div className="flex flex-row gap-6 mt-10">
              <div className="relative w-1/2">
                <SelectInputField
                  label="Country"
                  register={methods.register}
                  required
                  options={selectOption}
                />

                <ErrorComponents label="Country" register={methods.register} />
              </div>

              <div className="relative w-1/2">
                <SelectInputField
                  label="Category"
                  register={methods.register}
                  required
                  options={selectCategory}
                />

                <ErrorComponents label="Category" register={methods.register} />
              </div>
            </div>

            <div className="flex flex-row gap-6 mt-10">
              <div className="flex w-1/2">
                <label className="p-1">Gender</label>
                <RadioInput label="Male" register={register} />
                <RadioInput label="Female" register={register} />
              </div>
            </div>

            {/* Submit button */}
            <div>
              <button className="submit px-6 bg-blue-700 text-white py-3 rounded-md float-end m-5">
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default PAGE;
