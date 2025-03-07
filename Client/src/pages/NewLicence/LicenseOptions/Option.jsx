import React, { useState } from "react";
import Heading from "../NewComponent/Heading";
import { useNavigate } from "react-router-dom";

const Option = () => {
  const [status, setStatus] = useState("");
  const navigate = useNavigate("");
  let handleForm = (e) => {
    e.preventDefault();
    if (status == "one") {
      alert("gogod");
    }
  };
  return (
    <div>
      <Heading />
      <div className="flex flex-col items-center justify-center mt-8 gap-6">
        <h1 className="font-bold text-[20px]">
          Do You Have Nepalese Driving License? ( के तपाईसँग नेपाली ड्राइभिङ
          लाइसेन्स छ ?)
        </h1>
        <form
          action=""
          onSubmit={handleForm}
          className="flex flex-col gap-6 text-[18px] font-normal ml-18"
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="licenseStatus"
              onChange={(e) => setStatus("one")}
            />{" "}
            <p>
              No, I don't have Nepalese Driving License ( होइन, मसँग नेपाली
              ड्राइभिङ लाइसेन्स छैन)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" name="licenseStatus" />{" "}
            <p>
              Yes, I have Nepalese Driving License ( हो, मसँग नेपाली ड्राइभिङ
              लाइसेन्स छ)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" name="licenseStatus" />{" "}
            <p>
              No, I don't have Nepalese Driving License, But given Biometric /
              Exam in office ( होइन, मसँग नेपाली ड्राइभिङ लाइसेन्स छैन, तर
              कार्यालयमा बायोमेट्रिक/परीक्षा दिएँ)
            </p>
          </div>
          <button
            type="submit"
            className="bg-[#225AAD] w-full p-2 rounded-lg text-white font-semibold text-[16px]"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Option;
