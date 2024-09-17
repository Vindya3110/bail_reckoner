import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import LawyerPage from './components/LawyerPage';
import PrisonerPage from './components/PrisonerPage';
import JudgePage from './components/JudgePage';
import BailForm from './components/BailForm';
import ViewDetails from './components/ViewDetails';

function App() {
  const [userType, setUserType] = useState('');
  const [userName, setUserName] = useState('');
  const [submittedForms, setSubmittedForms] = useState([]); // Track submitted forms

  const handleFormSubmit = (formData) => {
    // Add new form data to the existing array of forms
    setSubmittedForms((prevForms) => [...prevForms, formData]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar userType={userType} />
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/lawyer" element={<LawyerPage lawyerName={userName} lawyerId="L12345" />} />
          <Route path="/prisoner" element={<PrisonerPage lawyerName={userName} />} />
          <Route path="/view-details" element={<ViewDetails />} />
          <Route path="/judge" element={<JudgePage judgeName={userName} submittedForm={submittedForms} />} />
          {/* <Route path="/judge" element={<JudgePage submittedForm={submittedForms} />} /> Pass submitted forms to JudgePage */}
          <Route path="/bail-form" element={<BailForm onFormSubmit={handleFormSubmit} />} /> {/* Capture form submit */}
        </Routes>
      </div>
    </Router>
  );

  function handleLogin(type, name) {
    setUserType(type);
    setUserName(name);
  }
}

export default App;







