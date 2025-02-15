import React from "react";
import main_logo from "../../assets/main_logo.png";
import nepalgif from "../../assets/nepalgif.gif";
import { IoMdHome } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
const Nav1 = () => {
  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between items-center gap-20">
          <img
            clas
            src={main_logo}
            alt="Logo of Passport department"
            className="h-[80px] w-[90px]"
          />
          <div className="text-[#D42C2C] text-center leading-tight">
            <p className="font-bold text-[17px]">नेपाल सरकार</p>
            <p className="font-bold text-[17px]">
              भौतिक पूर्वाधार तथा यातायात मन्त्रालय
            </p>
            <p className="font-bold text-[24px]">यातायात व्यवस्था विभाग</p>
          </div>

          <img className="h-20" src={nepalgif} alt="Nepal Flag" />
        </div>
      </div>
      <div className="p-1">
        <div className="w-full bg-[#006EAF] p-4 cursor-pointer">
          <ul className="flex justify-between text-white items-center">
            <Link to={"/"}>
              <li className="flex text-2xl items-center hover:text-red-500">
                <IoMdHome />
              </li>
            </Link>
            <li className="flex gap-3 hover:text-red-500">
              संगठन <p className="text-[12px]">▼</p>
            </li>
            <li className="flex gap-3 hover:text-red-500">
              विद्युतीय सेवाहरु <p className="text-[12px]">▼</p>
            </li>
            <li className="flex gap-3 hover:text-red-500">
              सवारी चालक अनुमतिपत्र <p className="text-[12px]">▼</p>
            </li>
            <li className="flex gap-3 hover:text-red-500">
              सवारी साधन <p className="text-[12px]">▼</p>
            </li>
            <li className="flex gap-3 hover:text-red-500">
              डाउनलोड <p className="text-[12px]">▼</p>
            </li>
            <li className="flex gap-3 hover:text-red-500">
              प्रकाशन <p className="text-[12px]">▼</p>
            </li>
            <li className="flex gap-3 hover:text-red-500">
              फोटो ग्यालरी <p className="text-[12px]">▼</p>
            </li>
            <li className="flex gap-3 hover:text-red-500">
              बारम्बार सोधिने प्रश्नहरू <p className="text-[12px]">▼</p>
            </li>
            <li className="flex gap-3 hover:text-red-500">
              कार्यालयहरु <p className="text-[12px]">▼</p>
            </li>
            <li className="flex hover:text-red-500 text-2xl ">
              <IoMdSettings />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav1;
