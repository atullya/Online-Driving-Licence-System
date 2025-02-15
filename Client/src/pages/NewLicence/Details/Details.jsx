import React, { useState } from "react";

const Details = () => {
  const [districtType, setDistrictType] = useState("");
  const zones = ["Zone 1", "Zone 2", "Zone 3", "Zone 4"];
  const provinces = [
    "Province 1",
    "Province 2",
    "Province 3",
    "Province 4",
    "Province 5",
    "Province 6",
    "Province 7",
  ];
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">
        Please check and enter your details correctly. You will not be allowed
        to modify the details later.
      </h2>

      <form className="space-y-4">
        <h3 className="text-xl font-semibold">
          A. Citizenship Details (नागरिकता विवरण)
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              First Name in English (पहिलो नाम):
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="middleName" className="block mb-1">
              Middle Name in English (बीचको नाम):
            </label>
            <input
              type="text"
              id="middleName"
              placeholder="Middle Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-1">
              Last Name in English (अन्तिम नाम): *
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="dob" className="block mb-1">
              Date of Birth (B.S.) (जन्म मिति बि.स.): *
            </label>
            <input
              type="date"
              id="dob"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="citizenshipNo" className="block mb-1">
              Citizenship No (नागरिकता नं.):(Enter English Number)
            </label>
            <input
              type="text"
              id="citizenshipNo"
              placeholder="Eg: 37-02"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">
              Issued District (जारी जिल्ला): *
            </label>
            <div className="flex flex-col">
              <div className="flex gap-5">
                <div className="flex items-center mb-1">
                  <input
                    type="radio"
                    id="zonal"
                    name="district"
                    value="zonal"
                    onChange={() => setDistrictType("zonal")}
                    className="mr-2"
                  />
                  <label htmlFor="zonal">Zonal (अञ्चल)</label>
                </div>
                <div className="flex items-center mb-1">
                  <input
                    type="radio"
                    id="provincial"
                    name="district"
                    value="provincial"
                    onChange={() => setDistrictType("provincial")}
                    className="mr-2"
                  />
                  <label htmlFor="provincial">Provincial (प्रदेश)</label>
                </div>
              </div>
              <div>
                {districtType && (
                  <div className="">
                    <label className="block mb-1">
                      {districtType === "zonal"
                        ? "Select Zone (क्षेत्र चयन गर्नुहोस्):"
                        : "Select Province (प्रदेश चयन गर्नुहोस्):"}
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded">
                      {(districtType === "zonal" ? zones : provinces).map(
                        (item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="issuedDate" className="block mb-1">
              Issued Date (जारी मिति): *
            </label>
            <input
              type="date"
              id="issuedDate"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email (ईमेल):
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            BACK
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
