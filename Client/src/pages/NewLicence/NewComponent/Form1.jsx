import React, { useState } from "react";
import { MdEmail } from "react-icons/md";

const Form1 = () => {
  // State to store captcha
  const [captcha, setCaptcha] = useState(generateCaptcha());

  // Function to generate random captcha
  function generateCaptcha() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return captcha;
  }

  return (
    <div className="bg-white p-8">
      <form action="">
        <h2 className="font-bold mb-2">
          Enter your own Email (आफ्नो इमेल प्रविष्ट गर्नुहोस्)
        </h2>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            class="pl-10 py-2 pr-10 indent-6 w-full border rounded"
            required
          />
          <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500" />
        </div>
        <div className="mt-3">
          <h2 className="text-[#FF0029] font-bold">Important:</h2>
          <i className="text-[14px] font-medium">
            Please use the email registered with your name to sign up. You are
            not allowed to change it afterward. <br /> (यो अनलाईन फाराम भर्नका
            लागि प्रयोग गरिने इमेल पछि परिवर्तन गर्न नमिल्ने भएकोले आफ्नै नाममा
            रहेको इमेल मात्र प्रयोग गर्नुहोला ।)
          </i>
        </div>
        {/* Captcha section */}
        <div className="mt-10">
          <div className="mb-2 text-center bg-gradient-to-r from-white via-gray-300 to-gray-500 p-4 rounded-md w-[180px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <label className="font-medium text-black  text-2xl text-center">
              {captcha}
            </label>
          </div>
          <p className="font-bold mt-4 mb-7">
            Enter captcha (माथि चित्रमा देखिएका अक्षरहरू प्रविष्ट गर्नुहोस्।)
          </p>
          <input
            type="text"
            placeholder="Captcha"
            className="py-2 px-4 w-full border rounded text-gray-500"
            required
          />
        </div>
        <button className="bg-[#2460B9] p-3 w-full h-10 text-center mt-6 font-bold text-white rounded-lg">
          Next
        </button>
      </form>
    </div>
  );
};

export default Form1;
