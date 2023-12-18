import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getList } from '../lib/api/record';

function Report() {
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

  // Filter records where "Medication" is null
  const nullMedicationRecords = dataList.filter((item) => item.medication === null);

  return (
    <div className="container">
      <h1>Reports</h1>
      <button className="btn btn-primary" onClick={() => navigate('/')}>
        Back
      </button>
      <div className="card-deck mt-3">
        {nullMedicationRecords.map((item) => (
          <div className="card mb-3" style={{ width: '18rem' }} key={item.id}>
            <div className="card-body">
              <h6 className="card-title">Student {item.name} from course {item.course} does not have their {item.title} medication currently in their possession.</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Report;