import React from "react";
import main_logo from "../../assets/main_logo.png";
import NewNavbar from "./NewNavbar";
import NewHero from "./NewLicenseHero/NewHero";
import Heading from "./NewComponent/Heading";

const NewLogin = () => {
  return (
    <div className="bg-[#F8FAFF]">
      <Heading />
      <div className="mt-4">
        <NewNavbar />
      </div>
      <div>
        <NewHero />
      </div>
    </div>
  );
};

export default NewLogin;
