// List.jsx

import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteRecord, getList } from '../lib/api/record';

function List() {
  // State to hold the list of records
  const [dataList, setDataList] = useState([]);
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch the list of records when the component mounts
  useEffect(() => {
    fetchList();
  }, []);

  // Function to fetch the list of records from the API
  const fetchList = async () => {
    try {
      const response = await getList();
      setDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the deletion of an actor
  const handleDelete = async (item) => {
    try {
      // Delete the actor from the API
      await deleteRecord(item.id);
      // Remove the deleted item from the dataList state
      setDataList((prevDataList) => prevDataList.filter((dataItem) => dataItem.id !== item.id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Records</h1>
      {/* Button to navigate to the "Add Record" page */}
      <button className="btn btn-primary" onClick={() => navigate('/new')}>
        Add
      </button>
      <button className="btn btn-danger" onClick={() => navigate('/report')}>
        Reports on student without medication
      </button>
      <div className="card-deck mt-3">
        {/* Map through the list of records and display them */}
        {dataList.map((item) => (
          <div className="card mb-3" style={{ width: '18rem' }} key={item.id}>
            <div className="card-body">
              <h5 className="card-title">Name: {item.name}</h5>
              <h6 className="card-text text-muted">Course: {item.course}</h6>
              <h6 className="card-text text-muted">Allergy: {item.allergy}</h6> 
              {/*will state weather the medication for the recorded allergy is availble or not */}
              {item.medication ? (<h6 className="card-text text-muted">Medication: In Stock {item.medication}</h6>) : (<h6 className="card-text text-muted">Medication: Not Available</h6>)}
              <h6 className="card-text text-muted">Title of Medication: {item.title}</h6>
              {/* Link to navigate to the "Edit Actor" page */}
              <Link to={`/edit/${item.id}`} className="btn btn-primary me-2">
                Edit
              </Link>
              {/* Button to delete the actor */}
              <button className="btn btn-danger" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;