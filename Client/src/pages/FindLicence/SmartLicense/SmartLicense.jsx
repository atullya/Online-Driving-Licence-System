import React from "react";
import Heading from "../../NewLicence/NewComponent/Heading";
import NewNavbar from "../../NewLicence/NewNavbar";
import smart from "../../../assets/smart.png";
import main_logo from "../../../assets/main_logo.png";
const SmartLicense = () => {
  return (
    <div>
      <Heading />
      <div className="mt-2">
        <NewNavbar />
      </div>
      {/* <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between border-b p-4 bg-blue-500">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Nepal.svg/2048px-Flag_of_Nepal.svg.png"
            alt="Nepal Flag"
            className="w-10 h-10"
          />
          <h2 className="text-white text-lg font-bold">DRIVING LICENSE</h2>
          <img src={main_logo} alt="Nepal Emblem" className="w-10 h-10" />
        </div>
        <div className="flex p-4">
          <div className="flex-shrink-0">
            <img
              src="https://i.imgur.com/ZZuhU5N.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
          </div>
          <div className="ml-4">
            <p className="font-semibold">Name: ATULLYA MAHARJAN</p>
            <p>Parent/Spouse: BHAIRAJ MAHARJAN</p>
            <p>Citizenship: 27-01-78-03719</p>
            <p>Date of Birth: 2002-12-08</p>
            <p>Passport No: </p>
            <p>Address: Khaupa 04, Nagarjun, Kathmandu, Bagmati Province</p>
            <p>Issue Date: 2023-12-17</p>
            <p>Expiry Date: 2028-12-16</p>
            <p>Blood Group: A+</p>
            <p>Category: A</p>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <span>Issued By:</span>
          <span>Signature of Holder:</span>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500">03-06-88996903</p>
        </div>
      </div> */}
      <div>
        <div className="relative mt-4">
          <img src={smart} alt="" className="w-210 h-120 m-auto" />
          <div className="absolute top-36 left-120">
            <p className="font-bold text-[16px]">ATULLYA MAHARJAN</p>
          </div>
          <div className="absolute top-42 left-139">
            <p className="font-bold text-[16px]">BHAIRAJ MAHARJAN</p>
          </div>
          <div className="absolute top-49 left-130">
            <p className="font-bold text-[16px]"> 27-01-78-03719</p>
          </div>
          <div className="absolute top-56 left-134">
            <p className="font-bold text-[16px]"> 2002-12-08</p>
          </div>
          <div className="absolute top-69 left-124">
            <p className="font-bold text-[16px]">
              {" "}
              Address: Khaupa 04, Nagarjun, Kathmandu, Bagmati Province
            </p>
          </div>
          <div className="absolute top-75 left-130">
            <p className="font-bold text-[16px]"> 2023-12-17</p>
          </div>
          <div className="absolute top-82 left-133">
            <p className="font-bold text-[16px]"> A+</p>
          </div>
          <div className="absolute top-75 left-220">
            <p className="font-bold text-[16px]"> 2028-12-16</p>
          </div>
          <div className="absolute top-82 left-218">
            <p className="font-bold text-[16px]"> A</p>
          </div>
          <div className="absolute top-28 left-228">
            <img src={main_logo} alt="" className="h-34 w-36" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartLicense;
