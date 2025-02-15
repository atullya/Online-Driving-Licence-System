import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div>
      <div className="grid grid-cols-3   gap-10 p-14 text-white cursor-pointer">
        <Link to={"/login"}>
          <div className="bg-[#006EAF] p-10 flex flex-col items-center gap-3  hover:transform hover:scale-102 transition-all duration-300 ease-in-out   ">
            <i class="fa-4x fa-regular fa-id-card"></i>
            <p className=" ">अनलाईन सवारी चालक अनुमतिपत्र प्रणाली</p>
          </div>
        </Link>
        <div className="bg-[#006EAF] p-10 flex flex-col items-center gap-3  hover:transform hover:scale-102 transition-all duration-300 ease-in-out   ">
          <i class="fa fa-solid fa-car fa-4x"></i>
          <p>अनलाइन सवारी दर्ता प्रणाली</p>
        </div>
        <div className="bg-[#006EAF] p-10 flex flex-col items-center gap-3  hover:transform hover:scale-102 transition-all duration-300 ease-in-out   ">
          <i class="fa-solid fa-barcode fa-4x"></i>
          <p>इम्बोस्ड नम्बर प्लेट प्रणाली</p>
        </div>
        <Link to={"/licensecheck"}>
          <div className="bg-[#006EAF] p-10 flex flex-col items-center gap-3  hover:transform hover:scale-102 transition-all duration-300 ease-in-out   ">
            <i class="fa-solid fa-magnifying-glass fa-4x"></i>
            <p>स्मार्ट कार्ड लाईसेन्स विवरण खोज्नुहोस</p>
          </div>
        </Link>
        <div className="bg-[#006EAF] p-10 flex flex-col items-center gap-3  hover:transform hover:scale-102 transition-all duration-300 ease-in-out   ">
          <i class="fa-solid fa-credit-card fa-4x"></i>
          <p>ऐन, नियम, निर्देशिका</p>
        </div>
        <Link to={"/feedback"}>
          <div className="bg-[#006EAF] p-10 flex flex-col items-center gap-3  hover:transform hover:scale-102 transition-all duration-300 ease-in-out   ">
            <i class="fa-solid fa-comments fa-4x"></i>
            <p>गुनासो, सुझाब र प्रतिक्रिया</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Feature;
