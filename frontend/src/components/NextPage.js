import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Make sure to import useNavigate
import './NextPage.css';

const NextPage = () => {
  const navigate = useNavigate(); // <-- Initialize useNavigate hook
  const [searchRadius, setSearchRadius] = useState(10);
  const [sortBy, setSortBy] = useState('distance');
  const [isAvailableNow, setIsAvailableNow] = useState(false);
  const [isCertified, setIsCertified] = useState(false);
  const [services, setServices] = useState({
    construction: false,
    renovation: false,
  });
  
  // Toggle service selection
  const toggleService = (service) => {
    setServices((prevServices) => ({
      ...prevServices,
      [service]: !prevServices[service],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your search functionality here
    console.log({
      searchRadius,
      sortBy,
      isAvailableNow,
      isCertified,
      services,
    });
    navigate('/contractors-results'); // <-- Use the navigate function here
  };

  return (
    <div className="next-page-container">
      <form onSubmit={handleSubmit} className="filter-form">
        <h1>Find Farmhouse Contractors</h1>

        <div className="service-options">
          <label>
            <input
              type="checkbox"
              checked={services.construction}
              onChange={() => toggleService('construction')}
            />
            Construction
          </label>
          <label>
            <input
              type="checkbox"
              checked={services.renovation}
              onChange={() => toggleService('renovation')}
            />
            Renovation
          </label>
        </div>
        
        <label className="search-radius">
          Search radius: {searchRadius} km
          <input
            type="range"
            min="1"
            max="50"
            value={searchRadius}
            onChange={(e) => setSearchRadius(e.target.value)}
          />
        </label>

        <div className="dropdown-group">
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="distance">Distance</option>
            <option value="reviews">Reviews</option>
            <option value="price">Price</option>
          </select>
        </div>

        <label>
          <input
            type="checkbox"
            checked={isAvailableNow}
            onChange={() => setIsAvailableNow(!isAvailableNow)}
          />
          Available Now
        </label>
        
        <label>
          <input
            type="checkbox"
            checked={isCertified}
            onChange={() => setIsCertified(!isCertified)}
          />
          Certified Contractors Only
        </label>

        <button type="submit" className="search-button">
          Search Contractors
        </button>
      </form>
    </div>
  );
};

export default NextPage;
