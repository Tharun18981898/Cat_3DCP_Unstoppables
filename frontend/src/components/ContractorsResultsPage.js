import React, { useEffect, useState } from 'react';
import './ContractorsResultsPage.css';
import { useLocation } from 'react-router-dom'; // <-- Import useLocation


const ContractorsResultsPage = () => {
  const [contractors, setContractors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImageForContractor = (name) => {
    const images = {
      'L&T Pvt Limited': '/L&T.jpg',
      'Precision Planning': '/PP.jpg',
      'SC2': '/SC2.jpg',
      'Caterpillar': '/caterpillar-logo.png',
    };
    return process.env.PUBLIC_URL + (images[name] || '/default-logo.png');
  };

  useEffect(() => {
    const fetchContractors = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3001/api/companies');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setContractors(data);
      } catch (error) {
        console.error('Failed to fetch contractors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContractors();
  }, []);

  const displayYesNo = (value) => {
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    } else if (typeof value === 'string') {
      // Assuming the string is either "Yes" or "No"
      return value;
    }
  };

  return (
    <div className="contractors-results-page">
      <h1>Contractors Results</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : contractors.length > 0 ? (
        contractors.map((contractor) => (
          <div key={contractor._id} className="contractor-card">
            <img
              src={getImageForContractor(contractor.name)}
              alt={contractor.name}
              style={{ width: '250px', height: 'auto' }}
            />
            <h2>{contractor.name}</h2>
            <p>Type: {contractor.type}</p>
            <p>Location: {contractor.location}</p>
            <p>Pincode: {contractor.pincode}</p>
            <p>Available: {contractor.available}</p> {/* Directly display 'Yes' or 'No' */}
            <p>Certified: {contractor.certified}</p>
            <p>Rating: {contractor.rating}</p>
            <p>Virtual Consultations: {contractor.virtualConsultations}</p>
          </div>
        ))
      ) : (
        <p>No contractors found.</p>
      )}
    </div>
  );
};

export default ContractorsResultsPage;

