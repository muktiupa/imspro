import { useState } from 'react';
import Sidebarx from '@/components/common/Sidebarx';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
    addresslineone: '',
    addresslinetwo: '',
    city: '',
    state: '',
    pincode: '',
    permAddressLineOne: '',
    permAddressLineTwo: '',
    permCity: '',
    permState: '',
    permPincode: '',
    qualification: '',
    document: null,
    sameAsCurrentAddress: false,
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
        ...(name === 'sameAsCurrentAddress' && checked && {
          permAddressLineOne: prev.addresslineone,
          permAddressLineTwo: prev.addresslinetwo,
          permCity: prev.city,
          permState: prev.state,
          permPincode: prev.pincode,
        }),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        ...(name.startsWith('address') && prev.sameAsCurrentAddress && {
          permAddressLineOne: prev.addresslineone,
          permAddressLineTwo: prev.addresslinetwo,
          permCity: prev.city,
          permState: prev.state,
          permPincode: prev.pincode,
        }),
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, document: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Sidebarx />
      <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4 flex">
                <div className="w-[60%] pr-3 ">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="text"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Gender</label>
                  <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-indigo-500 text-white rounded-md"
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Address</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Current Address</label>
                <input
                  type="text"
                  name="addresslineone"
                  value={formData.addresslineone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Address line 1"
                  required
                />
                <input
                  type="text"
                  name="addresslinetwo"
                  value={formData.addresslinetwo}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Address line 2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4 flex">
                <div className="w-[60%] pr-3 ">
                  <label className="block text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">PIN code</label>
                  <input
                    type="number"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Permanent Address</label>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="sameAsCurrentAddress"
                    checked={formData.sameAsCurrentAddress}
                    onChange={handleChange}
                  />
                  <label className="block text-gray-700 pl-3">
                    Same as Current Address
                  </label>
                </div>
                <input
                  type="text"
                  name="permAddressLineOne"
                  value={formData.permAddressLineOne}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Address line 1"
                  required
                  disabled={formData.sameAsCurrentAddress}
                />
                <input
                  type="text"
                  name="permAddressLineTwo"
                  value={formData.permAddressLineTwo}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Address line 2"
                  required
                  disabled={formData.sameAsCurrentAddress}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="permCity"
                  value={formData.permCity}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  disabled={formData.sameAsCurrentAddress}
                />
              </div>
              <div className="mb-4 flex">
                <div className="w-[60%] pr-3 ">
                  <label className="block text-gray-700">State</label>
                  <input
                    type="text"
                    name="permState"
                    value={formData.permState}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={formData.sameAsCurrentAddress}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">PIN code</label>
                  <input
                    type="number"
                    name="permPincode"
                    value={formData.permPincode}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={formData.sameAsCurrentAddress}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 mr-4 bg-gray-500 text-white rounded-md"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-indigo-500 text-white rounded-md"
              >
                Next
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Educational Qualifications</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Upload Pass Certificiat</label>
                <input
                  type="file"
                  name="document"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Upload Admit Card 10 or 10+2 </label>
                <input
                  type="file"
                  name="document"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Upload Profile Picture</label>
                <input
                  type="file"
                  name="document"
                  onChange={handleFileChange}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 mr-4 bg-gray-500 text-white rounded-md"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Register;
