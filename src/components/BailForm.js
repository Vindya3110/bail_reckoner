// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import { useNavigate } from 'react-router-dom';

// function BailForm({ onFormSubmit }) {
//   const [formData, setFormData] = useState({
//     crimeType: '',
//     imprisonmentDurationServed: '',
//     caseNumber: '',
//     undertrialName: '',
//     imprisonmentServedYears: '',
//     bailBond: '',
//     suretyBond: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     generatePDF(); // Generate PDF first

//     // Pass the form data to App.js via the onFormSubmit callback
//     onFormSubmit(formData);

//     // Navigate back to PrisonerPage with formData
//     navigate('/prisoner', { state: { formData } });
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.text('Bail Application Form', 10, 10);
//     doc.text(`Crime Type: ${formData.crimeType}`, 10, 20);
//     doc.text(`Imprisonment Duration Served: ${formData.imprisonmentDurationServed}`, 10, 30);
//     doc.text(`Case Number: ${formData.caseNumber}`, 10, 40);
//     doc.text(`Name of Undertrial: ${formData.undertrialName}`, 10, 50);
//     doc.text(`Imprisonment Served in Years: ${formData.imprisonmentServedYears}`, 10, 60);
//     doc.text(`Bail Bond (in Rs.): ${formData.bailBond}`, 10, 70);
//     doc.text(`Surety Bond (in Rs.): ${formData.suretyBond}`, 10, 80);
//     doc.save(`${formData.undertrialName}_Bail_Application.pdf`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Apply for Bail</h2>
//       <label>
//         Crime Type:
//         <input type="text" name="crimeType" value={formData.crimeType} onChange={handleChange} required />
//       </label>
//       <label>
//         Imprisonment Duration Served:
//         <input type="text" name="imprisonmentDurationServed" value={formData.imprisonmentDurationServed} onChange={handleChange} required />
//       </label>
//       <label>
//         Case Number:
//         <input type="text" name="caseNumber" value={formData.caseNumber} onChange={handleChange} required />
//       </label>
//       <label>
//         Name of the Undertrial:
//         <input type="text" name="undertrialName" value={formData.undertrialName} onChange={handleChange} required />
//       </label>
//       <label>
//         Imprisonment Served in Years:
//         <input type="number" name="imprisonmentServedYears" value={formData.imprisonmentServedYears} onChange={handleChange} required />
//       </label>
//       <label>
//         Bail Bond (in Rs.):
//         <input type="number" name="bailBond" value={formData.bailBond} onChange={handleChange} required />
//       </label>
//       <label>
//         Surety Bond (in Rs.):
//         <input type="number" name="suretyBond" value={formData.suretyBond} onChange={handleChange} required />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default BailForm;
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';
import './BailForm.css';

function BailForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    crimeType: '',
    imprisonmentDurationServed: '',
    caseNumber: '',
    undertrialName: '',
    imprisonmentServedYears: '',
    bailBond: '',
    suretyBond: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
    onFormSubmit(formData);
    navigate('/prisoner', { state: { formData } });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Bail Application Form', 10, 10);
    doc.text(`Crime Type: ${formData.crimeType}`, 10, 20);
    doc.text(`Imprisonment Duration Served: ${formData.imprisonmentDurationServed}`, 10, 30);
    doc.text(`Case Number: ${formData.caseNumber}`, 10, 40);
    doc.text(`Name of Undertrial: ${formData.undertrialName}`, 10, 50);
    doc.text(`Imprisonment Served in Years: ${formData.imprisonmentServedYears}`, 10, 60);
    doc.text(`Bail Bond (in Rs.): ${formData.bailBond}`, 10, 70);
    doc.text(`Surety Bond (in Rs.): ${formData.suretyBond}`, 10, 80);
    doc.save(`${formData.undertrialName}_Bail_Application.pdf`);
  };

  return (
    <div className="bail-form-container">
      <h2 className="bail-form-title">Apply for Bail</h2>
      <form className="bail-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="crimeType">Crime Type:</label>
          <input
            id="crimeType"
            className="form-input"
            type="text"
            name="crimeType"
            value={formData.crimeType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="imprisonmentDurationServed">Imprisonment Duration Served:</label>
          <input
            id="imprisonmentDurationServed"
            className="form-input"
            type="text"
            name="imprisonmentDurationServed"
            value={formData.imprisonmentDurationServed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="caseNumber">Case Number:</label>
          <input
            id="caseNumber"
            className="form-input"
            type="text"
            name="caseNumber"
            value={formData.caseNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="undertrialName">Name of the Undertrial:</label>
          <input
            id="undertrialName"
            className="form-input"
            type="text"
            name="undertrialName"
            value={formData.undertrialName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="imprisonmentServedYears">Imprisonment Served in Years:</label>
          <input
            id="imprisonmentServedYears"
            className="form-input"
            type="number"
            name="imprisonmentServedYears"
            value={formData.imprisonmentServedYears}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="bailBond">Bail Bond (in Rs.):</label>
          <input
            id="bailBond"
            className="form-input"
            type="number"
            name="bailBond"
            value={formData.bailBond}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="suretyBond">Surety Bond (in Rs.):</label>
          <input
            id="suretyBond"
            className="form-input"
            type="number"
            name="suretyBond"
            value={formData.suretyBond}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BailForm;




