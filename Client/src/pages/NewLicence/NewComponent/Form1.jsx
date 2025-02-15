import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form1 = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [email, setEmail] = useState("atulmzn2@gmail.com");
  const [captchaText, setCaptchaText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const getOTP = async () => {
    try {
      setIsLoading(true);

      // Validate the CAPTCHA before proceeding
      // if (captchaText !== captcha) {
      //   toast.warn("Captcha doesn't match");
      //   return;
      // }

      // Make a POST request to get the OTP
      let res = await axios.post("http://localhost:5000/api/mail/otp", {
        email,
      });

      console.log("OTP Response:", res.data);

      if (res.data.success) {
        localStorage.setItem("email", email); // Store the email in localStorage
        navigate("/otppage");
      } else {
        toast.error(
          res.data.error || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.log("Error during OTP request:", err);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getOTP();
  };

  return (
    <div className="bg-white p-8">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold mb-2">
          Enter your own Email (आफ्नो इमेल प्रविष्ट गर्नुहोस्)
        </h2>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 py-2 pr-10 indent-1 w-full border rounded"
            required
          />
          <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500" />
        </div>

        <div className="mt-3">
          <h2 className="text-[#FF0029] font-bold">Important:</h2>
          <i className="text-[14px] font-medium">
            Please use the email registered with your name to sign up. You are
            not allowed to change it afterward.
          </i>
        </div>

        {/* Captcha section */}
        <div className="mt-10">
          <div className="mb-2 text-center bg-gradient-to-r from-white via-gray-300 to-gray-500 p-4 rounded-md w-[180px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <label className="font-medium text-black text-2xl text-center">
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
            value={captchaText}
            onChange={(e) => setCaptchaText(e.target.value)}
          />
        </div>

        {isLoading ? (
          <button
            type="submit"
            className="bg-[#2460B9] p-3 w-full h-10 text-center mt-6 font-bold text-white rounded-lg"
            disabled
          >
            Please Wait.........
          </button>
        ) : (
          <button
            type="submit"
            className="bg-[#2460B9] p-3 w-full h-10 text-center mt-6 font-bold text-white rounded-lg"
          >
            Next
          </button>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form1;
