// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('');
//   const navigate = useNavigate(); // Hook to navigate

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (userType && username) {
//       onLogin(userType, username);

//       // Navigate to the corresponding page based on userType
//       if (userType === 'Lawyer') {
//         navigate('/lawyer');
//       } else if (userType === 'Prisoner') {
//         navigate('/prisoner');
//       } else if (userType === 'Judge') {
//         navigate('/judge');
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
//         <option value="">Select Role</option>
//         <option value="Lawyer">Lawyer</option>
//         <option value="Prisoner">Prisoner</option>
//         <option value="Judge">Judge</option>
//       </select>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import bgImage from './bg.jpeg';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType && username) {
      onLogin(userType, username);

      if (userType === 'Lawyer') {
        navigate('/lawyer');
      } else if (userType === 'Prisoner') {
        navigate('/prisoner');
      } else if (userType === 'Judge') {
        navigate('/judge');
      }
    }
  };

  return (

    <div className="login-container" >
      <form className="login-form" onSubmit={handleSubmit}>
        {/* <h1>Bail Reckoner</h1> */}
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="Lawyer">Lawyer</option>
          <option value="Prisoner">Prisoner</option>
          <option value="Judge">Judge</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>

  );
}

export default Login;


     
