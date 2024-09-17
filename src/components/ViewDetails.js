// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function ViewDetails() {
//   const location = useLocation();
//   const { prisoner } = location.state; // Get prisoner data from JudgePage
//   const [showPredictionButtons, setShowPredictionButtons] = useState(false);

//   // Show Accept/Reject buttons after clicking Bail Prediction
//   const handleBailPredictionClick = () => {
//     setShowPredictionButtons(true);
//   };

//   return (
//     <div>
//       <h2>Bail Application Details</h2>
//       <p><strong>Name:</strong> {prisoner.undertrialName}</p>
//       <p><strong>Case Number:</strong> {prisoner.caseNumber}</p>
//       <p><strong>Crime Type:</strong> {prisoner.crimeType}</p>
//       <p><strong>Imprisonment Duration Served:</strong> {prisoner.imprisonmentDurationServed}</p>
//       <p><strong>Imprisonment Served in Years:</strong> {prisoner.imprisonmentServedYears}</p>
//       <p><strong>Bail Bond (in Rs.):</strong> {prisoner.bailBond}</p>
//       <p><strong>Surety Bond (in Rs.):</strong> {prisoner.suretyBond}</p>

//       <button onClick={handleBailPredictionClick}>Bail Prediction</button>

//       {showPredictionButtons && (
//         <div>
//           <button style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }}>Accept</button>
//           <button style={{ backgroundColor: 'red', color: 'white' }}>Reject</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ViewDetails;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ViewDetails.css';

function ViewDetails() {
  const location = useLocation();
  const { prisoner } = location.state;
  const [showPredictionButtons, setShowPredictionButtons] = useState(false);

  const handleBailPredictionClick = () => {
    setShowPredictionButtons(true);
  };

  return (
    <div className="view-details">
      <header className="view-details-header">
        <h2>Bail Application Details</h2>
      </header>
      
      <div className="details-grid">
        <p><strong>Name:</strong> {prisoner.undertrialName}</p>
        <p><strong>Case Number:</strong> {prisoner.caseNumber}</p>
        <p><strong>Crime Type:</strong> {prisoner.crimeType}</p>
        <p><strong>Imprisonment Duration Served:</strong> {prisoner.imprisonmentDurationServed}</p>
        <p><strong>Imprisonment Served in Years:</strong> {prisoner.imprisonmentServedYears}</p>
        <p><strong>Bail Bond (in Rs.):</strong> {prisoner.bailBond}</p>
        <p><strong>Surety Bond (in Rs.):</strong> {prisoner.suretyBond}</p>
      </div>

      <div className="button-container">
        <button className="prediction-button" onClick={handleBailPredictionClick}>
          Bail Prediction
        </button>

        {showPredictionButtons && (
          <div className="decision-buttons">
            <button className="accept-button">Accept</button>
            <button className="reject-button">Reject</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewDetails;




