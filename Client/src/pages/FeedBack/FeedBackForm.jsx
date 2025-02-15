import React from "react";

import Nav1 from "../../components/Navbar/Nav1";

const FeedBackForm = () => {
  return (
    <div>
      <Nav1 />
      <div className="flex justify-center items-center w-full bg-white-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4">प्रतिक्रिया फारम</h1>
          <p className="text-black-600 mb-6">
            यदि तपाईंसँग हाम्रो लागि कुनै प्रतिक्रिया, प्रश्नहरू छन् भने कृपया
            हामीलाई support@dotm.gov.np मा लेख्नुहोस् वा निम्न फारम भर्नुहोस्।
          </p>

          <form className="">
            <div className="mb-4">
              <label
                className="block text-black-700 text-sm font-normal mb-2 text-[18px]"
                htmlFor="name"
              >
                नाम
              </label>
              <input
                type="text"
                id="name"
                placeholder="नाम"
                className="border border-black-300 p-2 rounded w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black-700 text-sm font-normal mb-2 text-[18px]"
                htmlFor="email"
              >
                ई-मेल
              </label>
              <input
                type="email"
                id="email"
                placeholder="ई-मेल"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black-700 text-sm font-normal mb-2 text-[18px]"
                htmlFor="contact"
              >
                सम्पर्क नम्बर
              </label>
              <input
                type="text"
                id="contact"
                placeholder="सम्पर्क नम्बर"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black-700 text-sm font-normal mb-2 text-[18px]"
                htmlFor="message"
              >
                सन्देश
              </label>
              <textarea
                id="message"
                placeholder="सन्देश"
                className="border border-gray-300 p-2 rounded w-full"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
            >
              पेश गर्नुहोस्
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBackForm;
