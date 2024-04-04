// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import NextPage from './components/NextPage'; 
import ContractorsList from './components/ContractorsList';
import ContractorsResultsPage from './components/ContractorsResultsPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contractors-list" element={<ContractorsList />} />
          <Route path="/next-page" element={<NextPage />} /> 
          <Route path="/contractors-results" element={<ContractorsResultsPage />} />

          {}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
