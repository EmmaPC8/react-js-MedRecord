import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRecord, getDetail } from '../lib/api/record';
import FormBody from './Form';

function Edit() {
  // State to hold the actor's data for editing
  const [value, setValue] = useState({
    name: '',
    course: '',
    allergy:'',
    medication: false,
    title:'',
  });

  // Extract the URL parameters using useParams
  const query = useParams();
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch record details when the component mounts or the query changes
  useEffect(() => {
    fetchData(query);
  }, [query]);

  // Function to fetch actor details for editing
  const fetchData = async (query) => {
    try {
      const response = await getDetail(query.id);
      const { name, course, allergy, medication, title } = response.data;
      // Set the fetched data in the state for editing
      setValue({
        name,
        course, 
        allergy, 
        medication: false, 
        title,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new value for the corresponding input field
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Function to handle form submission for updating actor
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
      // Update the record's details using the provided data
      await updateRecord(query.id, value);
      // Navigate back to the main list after successful update
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit</h1>
      {/* Render the form component with appropriate props */}
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Update"
      />
    </div>
  );
}

export default Edit;