import React, { useState } from 'react';

function PrisonerForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    crime_type: '',
    imprisonment_duration_served: '',
    caseNumber: '',
    name: '',
    bailBond: '',
    suretyBond: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="crime_type"
        placeholder="Crime Type"
        value={formData.crime_type}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="imprisonment_duration_served"
        placeholder="Imprisonment Duration Served (in years)"
        value={formData.imprisonment_duration_served}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="caseNumber"
        placeholder="Case Number"
        value={formData.caseNumber}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name of Undertrial"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="bailBond"
        placeholder="Bail Bond (Rs.)"
        value={formData.bailBond}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="suretyBond"
        placeholder="Surety Bond (Rs.)"
        value={formData.suretyBond}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}


export default PrisonerForm;
