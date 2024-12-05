import React, { useState } from 'react';

const UserProfileForm = () => {
  // Initialize the state with default values for personalInfo and address
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
    },
    address: {
      street: '',
      city: '',
      zipCode: '',
    }
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.'); // Split name to get section and field

    // Update the state with the nested structure
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  // Handle form submission (just for demonstration purposes)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Profile Form</h2>

      {/* Personal Information */}
      <fieldset>
        <legend>Personal Information</legend>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="personalInfo.name"
            value={formData.personalInfo.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="personalInfo.email"
            value={formData.personalInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
      </fieldset>

      {/* Address Information */}
      <fieldset>
        <legend>Address Information</legend>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            placeholder="Enter your street"
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            name="address.zipCode"
            value={formData.address.zipCode}
            onChange={handleChange}
            placeholder="Enter your zip code"
          />
        </div>
      </fieldset>

      {/* Submit Button */}
      <button type="submit">Submit</button>

      {/* Displaying form data as the user types */}
      <div>
        <h3>Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </form>
  );
};

export default UserProfileForm;
