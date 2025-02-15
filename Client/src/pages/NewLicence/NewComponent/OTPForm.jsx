import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const OTPForm = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState("");

  const handleOPT = (e) => {
    e.preventDefault();
    if (otp === "") {
      toast.warn("Please enter the OTP");
      return;
    }
    checkOTP();
  };

  let checkOTP = async () => {
    try {
      // Retrieve the email from localStorage
      const email = localStorage.getItem("email");

      if (!email) {
        toast.error("No email found! Please try again.");
        return;
      }

      if (!otp) {
        toast.error("Please enter the OTP!");
        return;
      }

      // Make the POST request to verify OTP
      let res = await axios.post(
        "http://localhost:5000/api/mail/verify-otp",
        { email, otp },
        { headers: { "Content-Type": "application/json" } }
      );

      // Debug: Log the response from the server
      console.log("Response from server:", res.data);

      // Handle the server response based on its structure
      if (res.data?.message) {
        toast.success(res.data.message); // Success message from server
        navigate("/option");
      } else if (res.data?.error) {
        toast.error(res.data.error); // Specific error message from server
      } else {
        toast.error("Unexpected response format. No message received.");
      }
    } catch (error) {
      // Debug: Log error details in case of failure
      console.error("Error in checkOTP:", error);

      // Check if the error is related to OTP validation
      if (error.response?.data?.error) {
        toast.error(error.response.data.error); // Show specific OTP error
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    }
  };

  return (
    <div className="bg-white p-8">
      <form onSubmit={handleOPT}>
        <h2 className="font-bold mb-2">
          Enter your OTP (आफ्नो OTP प्रविष्ट गर्नुहोस्)
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Check OTP in your email inbox"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="pl-10 py-2 pr-10 indent-1 w-full border rounded"
            required
          />
        </div>

        <div className="mt-3">
          <h2 className="text-[#FF0029] font-bold">Important:</h2>
          <i className="text-[14px] font-medium">
            Check Email for OTP No.
            <br />
            Please Note: Same OTP is used to Login Multiple times.
          </i>
        </div>

        <button
          type="submit"
          className="bg-[#2460B9] p-3 w-full h-10 text-center mt-6 font-bold text-white rounded-lg"
        >
          Next
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default OTPForm;
