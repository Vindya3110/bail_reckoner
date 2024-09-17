import React from 'react';
import './LawyerPage.css';
import img from './judge-profile-icon.jpeg'
import i1 from './_ (3).jpeg'
import i2 from './_ (5).jpeg'

function LawyerPage({ lawyerName, lawyerId }) {
  const prisoners = [
    { name: 'Prisoner 1', section: 'IPC 302', image: i1 },
    { name: 'Prisoner 2', section: 'IPC 307', image: i2 },
    // more prisoners here...
  ];

  const handleClick = (prisoner) => {
    // Navigate to prisoner details page
    alert(`View details of ${prisoner.name}`);
  };

  return (
    <div className="lawyer-page">
      <header className="lawyer-header">
        <div className="lawyer-profile">
          <img src={img} alt="Lawyer Profile" />
          <h1>{lawyerName}</h1>
        </div>
        <span className="lawyer-id">{lawyerId}</span>
      </header>
      <div className="prisoners">
        {prisoners.map((prisoner, index) => (
          <div className="card" key={index} onClick={() => handleClick(prisoner)}>
            <img src={prisoner.image} alt={prisoner.name} />
            <h3>{prisoner.name}</h3>
            <p>{prisoner.section}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LawyerPage;

