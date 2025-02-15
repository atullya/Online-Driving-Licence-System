import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewLogin from "./pages/NewLicence/NewLogin.jsx";
import Option from "./pages/NewLicence/LicenseOptions/Option.jsx";
import Details from "./pages/NewLicence/Details/Details.jsx";
import ApplicantForm from "./pages/NewLicence/ApplicationForm/ApplicantForm.jsx";
import SearchLicense from "./pages/FindLicence/SearchLicense.jsx";
import SmartLicense from "./pages/FindLicence/SmartLicense/SmartLicense.jsx";
import FeedBackForm from "./pages/FeedBack/FeedBackForm.jsx";
import OTPpage from "./pages/NewLicence/NewComponent/OTPpage.jsx";
const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <NewLogin />,
  },
  {
    path: "option",
    element: <Option />,
  },
  {
    path: "question",
    element: <Details />,
  },
  {
    path: "question1",
    element: <ApplicantForm />,
  },
  {
    path: "licensecheck",
    element: <SearchLicense />,
  },
  {
    path: "smartlicense",
    element: <SmartLicense />,
  },
  {
    path: "feedback",
    element: <FeedBackForm />,
  },
  {
    path: "otppage",
    element: <OTPpage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={allRoutes} />
  </StrictMode>
);
