import React from "react";
import main_logo from "../../../assets/main_logo.png";
const Heading = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 mt-2">
        <img
          src={main_logo}
          alt="Government of Nepal"
          className="h-[80px] w-[90px]"
        />
        <div className="odl--container--logo--content">
          <p>Government of Nepal</p>
          <p style={{ fontSize: "14px" }} className="text-[#4D87C4] font-bold">
            Ministry of Physical Infrastructure and Transport
          </p>
          <p style={{ fontSize: "16px" }} className="font-bold ">
            Department of Transport Management
          </p>
          <p style={{ fontSize: "18px" }} className="text-[#D01E29] font-bold">
            Online Driving License System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
