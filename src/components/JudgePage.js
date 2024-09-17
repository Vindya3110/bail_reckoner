// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function JudgePage({ judgeName, submittedForm }) {
//   const navigate = useNavigate();

//   // Handle click on a prisoner's card to view details
//   const handleViewDetailsClick = (prisoner) => {
//     navigate('/view-details', { state: { prisoner } });
//   };

//   return (
//     <div>
//       <header>
//         <img src="judge-profile-icon.png" alt="Judge Profile" style={{ float: 'left' }} />
//         <h2>{judgeName}'s Dashboard</h2> {/* Display judge's name */}
//         <div style={{ float: 'right' }}>Judge ID: J98765</div>
//       </header>

//       {/* Display the prisoner cards */}
//       <div>
//         {submittedForm && submittedForm.length > 0 ? (
//           submittedForm.map((prisoner, index) => (
//             <div
//               key={index}
//               className="prisoner-card"
//               onClick={() => handleViewDetailsClick(prisoner)}
//               style={{ cursor: 'pointer', margin: '10px', border: '1px solid #ccc', padding: '10px' }}
//             >
//               <img src="prisoner-image.jpg" alt="Prisoner" style={{ width: '50px', height: '50px' }} />
//               <div>
//                 <p><strong>Name:</strong> {prisoner.undertrialName}</p>
//                 <p><strong>Case Number:</strong> {prisoner.caseNumber}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No bail applications submitted yet.</p>
//         )}
//       </div>

//       {/* Chatbot icon */}
//       <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
//         <img src="chatbot-icon.png" alt="Chatbot" style={{ width: '50px', height: '50px' }} />
//       </div>
//     </div>
//   );
// }

// export default JudgePage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JudgePage.css';
import img from './judge-profile-icon.jpeg'
import pimg from './_ (3).jpeg'

function JudgePage({ judgeName, submittedForm }) {
  const navigate = useNavigate();

  const handleViewDetailsClick = (prisoner) => {
    navigate('/view-details', { state: { prisoner } });
  };

  return (
    <div className="judge-page">
      <header className="judge-header">
        <div className="judge-profile">
          <img src={img} alt="Judge Profile" />
          <h2>{judgeName}'s Dashboard</h2>
        </div>
        <div className="judge-id">Judge ID: J98765</div>
      </header>

      <div className="prisoner-cards">
        {submittedForm && submittedForm.length > 0 ? (
          submittedForm.map((prisoner, index) => (
            <div
              key={index}
              className="prisoner-card"
              onClick={() => handleViewDetailsClick(prisoner)}
            >
              <img src={pimg} alt="Prisoner" />
              <div>
                <p><strong>Name:</strong> {prisoner.undertrialName}</p>
                <p><strong>Case Number:</strong> {prisoner.caseNumber}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No bail applications submitted yet.</p>
        )}
      </div>

      <img src="chatbot-icon.png" alt="Chatbot" className="chatbot-icon" />
    </div>
  );
}

export default JudgePage;







