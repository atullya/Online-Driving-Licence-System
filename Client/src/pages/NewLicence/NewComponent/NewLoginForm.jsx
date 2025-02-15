import React from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";

const NewLoginForm = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-12 gap-1  ">
        <Form1 />
        <Form2 />
      </div>
    </div>
  );
};

export default NewLoginForm;
