"use client";
import React from "react";
import FloatingLabelInput from "../components/FloatingLabelInput";

const Page = () => {
  return (
    <section className="flex justify-center min-h-full bg-slate-600">
      <div className=" p-20 rounded-md bg-white m-20 w-full">
        <FloatingLabelInput id="username" label="Username" type="text" />
        <FloatingLabelInput id="email" label="Email" type="email" />
        <FloatingLabelInput id="password" label="Password" type="password" />
        <FloatingLabelInput id="contact" label="Contact" type="tel" />
      </div>
    </section>
  );
};

export default Page;
