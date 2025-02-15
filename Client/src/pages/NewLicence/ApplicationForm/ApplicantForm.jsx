// ApplicantForm.js
import React, { useState } from "react";
import "./ApplicantForm.css";
import upload_image from "../../../assets/upload_image.png";
const ApplicantForm = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantNameDevnagari: "",
    gender: "",
    bloodGroup: "",
    identityMark: "",
    trainingInstitute: "",
    relationshipWithGuardian: "",
    guardianFirstName: "",
    guardianMiddleName: "",
    guardianLastName: "",
  });
  const defaultImage = upload_image; // Set your default image path
  const [frontImage, setFrontImage] = useState(defaultImage);
  const [backImage, setBackImage] = useState(defaultImage);

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isSameAsPermanent, setIsSameAsPermanent] = useState(false);

  const handleCheckboxChange = () => {
    setIsSameAsPermanent(!isSameAsPermanent);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-red-600 mb-4">
        Your Details are NOT FOUND from Citizenship Information Management
        System of Ministry of Home Affairs (MOHA), Check citizenship issue
        district as pradesh
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">
          B. Applicant Details (आवेदकको विवरण)
        </h3>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              नाम (देवनागरीमा) *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="नाम (देवनागरीमा)"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              बीवको नाम (देवनागरीमा) *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="बीवको नाम (देवनागरीमा)"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              घर (देवनागरीमा) *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="घर (देवनागरीमा)"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Gender (लिङ्ग) *
            </label>
            <select className="border border-gray-300 rounded-md p-2 w-full">
              <option value="">Gender (लिङ्ग)</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Blood Group (रक्त समूह) *
            </label>
            <select className="border border-gray-300 rounded-md p-2 w-full">
              <option value="">Blood Group (रक्त समूह)</option>
              <option value="a+">A+</option>
              <option value="o+">O+</option>
              <option value="b+">B+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Identity Mark (पहिचान चिन्ह) *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Identity Mark"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Profession (पेशा) *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Other"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Education (शिक्षा) *
            </label>
            <select className="border border-gray-300 rounded-md p-2 w-full">
              <option value="">Select your latest educational degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Training Institute (तालिम दिने संस्था) *
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Training Institute"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">
          C. Guardian / Witness Information (अभिभावक विवरण)
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Relationship (आवेदकसँगको नाता) *
            </label>
            <select className="border border-gray-300 rounded-md p-2 w-full">
              <option value="">Select relationship with guardian</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Guardian/Witness First Name (English)
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Guardian/Witness Middle Name (English)
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Middle Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Guardian/Witness Last Name (English)
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">
          D. Permanent Address (नागरिकताको अनुसार स्थायी ठेगाना)
        </h2>

        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              name="address-type"
              value="zonal"
              className="mr-2"
            />
            Zonal (क्षेत्रीय अनुसार)
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="address-type"
              value="provincial"
              className="mr-2"
            />
            Provincial (प्रादेशिक अनुसार)
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-2">
            <label className="block ">Zonal (क्षेत्रीय अनुसार)</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Mechi"
            />
          </div>

          <div className="mb-2">
            <label className="block mb-1">
              Rural / Urban Municipality (गाउँ / नगर पालिका)
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Gauriganj"
            />
          </div>

          <div className="mb-1">
            <label className="block mb-1">Tole (टोले)</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Gauriganj"
            />
          </div>

          <div className="">
            <label className="block mb-1">District (जिल्ला)</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Jhapa</option>
              {/* Add more options */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Ward No. (बडा नं.)</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="03"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">
          E. Current Address (हालको ठेगाना)
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-1">
            <label className="block mb-1">Province (प्रदेश)</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select Province</option>
              {/* Add more options */}
            </select>
          </div>

          <div className="mb-1">
            <label className="block mb-1">
              Rural / Urban Municipality (गाउँ / नगर पालिका)
            </label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select Rural/Urban Municipality</option>
              {/* Add more options */}
            </select>
          </div>

          <div className="mb-1">
            <label className="block mb-1">District (जिल्ला)</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select District</option>
              {/* Add more options */}
            </select>
          </div>

          <div className="mb-1">
            <label className="block mb-1">Ward No. (बडा नं.)</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Ward Number"
            />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={isSameAsPermanent}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label>Same as Permanent Address (स्थायी ठेगाना जस्तै)</label>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">
          F. Citizenship Certificate (नागरिकता प्रमाणपत्र)
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {/* Front Side Upload */}
          <div className="mb-1">
            <label className="block mb-1">
              Front Side of Citizenship (नागरिकताको अगाडि पक्ष)
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded"
              onChange={(e) => handleImageUpload(e, setFrontImage)}
            />

            <img
              src={frontImage}
              alt="Front Side"
              className="mt-2  object-cover border"
            />
          </div>

          {/* Back Side Upload */}
          <div className="mb-1">
            <label className="block mb-1">
              Back Side of Citizenship (नागरिकताको पछाडि पक्ष)
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded"
              onChange={(e) => handleImageUpload(e, setBackImage)}
            />
            <img
              src={backImage}
              alt="Back Side"
              className="mt-2 object-cover border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantForm;
