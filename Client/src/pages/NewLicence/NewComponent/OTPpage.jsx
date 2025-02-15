import React from "react";
import Heading from "./Heading";
import Form2 from "./Form2";
import OTPForm from "./OTPForm";

const OTPpage = () => {
  return (
    <div>
      <Heading />
      <div className="grid grid-cols-2 p-12 gap-1  ">
        <OTPForm />
        <Form2 />
      </div>
    </div>
  );
};

export default OTPpage;
