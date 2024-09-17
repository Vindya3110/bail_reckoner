// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { jsPDF } from 'jspdf';

// function PrisonerPage({ lawyerName }) {
//   const location = useLocation();
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState(null);
//   const navigate = useNavigate();

//   // Check if form data was passed from the BailForm page
//   useEffect(() => {
//     if (location.state && location.state.formData) {
//       setFormData(location.state.formData);
//       setFormSubmitted(true);
//     }
//   }, [location.state]);

//   const handleApplyForBailClick = () => {
//     navigate('/bail-form');
//   };

//   // Function to generate the PDF when the link is clicked
//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Bail Application', 10, 10);
//     doc.text(`Name: ${formData.undertrialName}`, 10, 20);
//     doc.text(`Case Number: ${formData.caseNumber}`, 10, 30);
//     doc.text(`Crime Type: ${formData.crimeType}`, 10, 40);
//     doc.text(`Imprisonment Duration Served: ${formData.imprisonmentDurationServed}`, 10, 50);
//     doc.text(`Imprisonment Served in Years: ${formData.imprisonmentServedYears}`, 10, 60);
//     doc.text(`Bail Bond (in Rs.): ${formData.bailBond}`, 10, 70);
//     doc.text(`Surety Bond (in Rs.): ${formData.suretyBond}`, 10, 80);
    
//     // Save the PDF with the prisoner's name
//     doc.save(`${formData.undertrialName}_Bail_Application.pdf`);
//   };

//   return (
//     <div>
//       <header>
//       <img src="judge-profile-icon.png" alt="Judge Profile" />
//         <div>{lawyerName}'s Dashboard</div>
//       </header>
//       {!formSubmitted && (
//         <div>
//           <button onClick={handleApplyForBailClick}>Apply for Bail</button>
//         </div>
//       )}
//       {formSubmitted && formData && (
//         <div>
//           <h3>Bail Application Submitted</h3>
//           <div className="prisoner-card">
//             <img src="prisoner-image.jpg" alt="Prisoner" />
//             <div>
//               <p>Name: {formData.undertrialName}</p>
//               <p>Case Number: {formData.caseNumber}</p>
//               {/* Link to trigger PDF download */}
//               <button onClick={handleDownloadPDF}>
//                 Download Bail Application PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PrisonerPage;
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import './PrisonerPage.css';
import img from './judge-profile-icon.jpeg'
import pimg from './_ (3).jpeg'

function PrisonerPage({ lawyerName }) {
  const location = useLocation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.formData) {
      setFormData(location.state.formData);
      setFormSubmitted(true);
    }
  }, [location.state]);

  const handleApplyForBailClick = () => {
    navigate('/bail-form');
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Bail Application', 10, 10);
    doc.text(`Name: ${formData.undertrialName}`, 10, 20);
    doc.text(`Case Number: ${formData.caseNumber}`, 10, 30);
    doc.text(`Crime Type: ${formData.crimeType}`, 10, 40);
    doc.text(`Imprisonment Duration Served: ${formData.imprisonmentDurationServed}`, 10, 50);
    doc.text(`Imprisonment Served in Years: ${formData.imprisonmentServedYears}`, 10, 60);
    doc.text(`Bail Bond (in Rs.): ${formData.bailBond}`, 10, 70);
    doc.text(`Surety Bond (in Rs.): ${formData.suretyBond}`, 10, 80);
    
    doc.save(`${formData.undertrialName}_Bail_Application.pdf`);
  };

  return (
    <div className="prisoner-page">
      <header className="prisoner-header">
        <img src={img} alt="Judge Profile" />
        <div>{lawyerName}'s Dashboard</div>
      </header>
      
      {!formSubmitted && (
        <div>
          <button className="apply-bail-button" onClick={handleApplyForBailClick}>Apply for Bail</button>
        </div>
      )}
      
      {formSubmitted && formData && (
        <div>
          <h3>Bail Application Submitted</h3>
          <div className="prisoner-card">
            <img src={pimg} alt="Prisoner" />
            <div>
              <p><strong>Name:</strong> {formData.undertrialName}</p>
              <p><strong>Case Number:</strong> {formData.caseNumber}</p>
              <button className="download-pdf-button" onClick={handleDownloadPDF}>
                Download Bail Application PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrisonerPage;






