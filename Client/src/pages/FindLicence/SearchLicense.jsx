import React, { useState } from "react";
import Heading from "../NewLicence/NewComponent/Heading";
import NewNavbar from "../NewLicence/NewNavbar";

const SearchLicense = () => {
  const [dob, setDob] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you may want to do some validation checks and API request here
    console.log("Date of Birth:", dob);
    console.log("License Number:", licenseNumber);
    console.log("Captcha Input:", captchaInput);
  };
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
    <div>
      <Heading />
      <div className="mt-2">
        <NewNavbar />

        <div className="bg-blue-50 p-20 rounded-md shadow-md">
          <h1 className="text-xl font-bold mb-5 text-left">
            Smart-Card License Search
          </h1>
          <form onSubmit={handleSubmit} className="">
            <div className="flex justify-between items-center gap-8">
              {" "}
              <div className="mb-4 w-full">
                <label className="block text-gray-700" htmlFor="dob">
                  Date of Birth
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="mt-1 p-2 h-12 border rounded-md w-full"
                  placeholder="YYYY-MM-DD"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700" htmlFor="license-number">
                  License Number
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="license-number"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  className="mt-1 p-2 h-11 border rounded-md w-full"
                  placeholder="XX-XX-XXXXXXXX"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="mb-2 text-center bg-gradient-to-r from-white via-gray-300 to-gray-500 p-4 rounded-md w-[180px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <label className="font-medium text-black  text-2xl text-center">
                  {captcha}
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="captcha-input">
                Enter Captcha
              </label>
              <input
                type="text"
                id="captcha-input"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Captcha"
              />
            </div>

            <button className="bg-blue-600 w-full mt-2 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
              Search License
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchLicense;
