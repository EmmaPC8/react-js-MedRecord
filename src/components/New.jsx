// New.jsx

import { useState } from 'react';
import FormBody from './Form';
import { createRecord } from '../lib/api/record';
import { useNavigate } from 'react-router-dom';

function New() {
  // State to hold the record's data
  const [value, setValue] = useState({});
  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new value for the corresponding input field
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Check if the required fields are filled
        if (!value.name) {
          // Display an alert message to the user
          window.alert('Please Enter Your Name');
          return; // Stop the function execution if fields are not filled
        }
        if(!value.course) {
            // Display an alert message to the user
            window.alert('Please Enter Your Course');
            return; // Stop the function execution if fields are not filled
        }
        if( !value.allergy) {
            // Display an alert message to the user
            window.alert('Please Enter Your Allergy');
            return; // Stop the function execution if fields are not filled
        }
        if( !value.title) {
            // Display an alert message to the user
            window.alert('Please Enter Your Title');
            return; // Stop the function execution if fields are not filled
        }
      // Create a new record using the provided data
      await createRecord(value);
      // Navigate back to the main list after successful submission
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>NEW</h1>
      {/* Render the form component with appropriate props */}
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Add"
      />
    </div>
  );
}

export default New;