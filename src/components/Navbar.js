// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar({ userType }) {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Login</Link></li>
//         {userType === 'Lawyer' && <li><Link to="/lawyer">Lawyer Dashboard</Link></li>}
//         {userType === 'Prisoner' && <li><Link to="/prisoner">Prisoner Dashboard</Link></li>}
//         {userType === 'Judge' && <li><Link to="/judge">Judge Dashboard</Link></li>}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar({ userType }) {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li><Link to="/">Login</Link></li>
//         {userType === 'Lawyer' && <li><Link to="/lawyer">Lawyer Dashboard</Link></li>}
//         {userType === 'Prisoner' && <li><Link to="/prisoner">Prisoner Dashboard</Link></li>}
//         {userType === 'Judge' && <li><Link to="/judge">Judge Dashboard</Link></li>}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ userType }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine if we are on the login page
  const isLoginPage = currentPath === '/';

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Login</Link></li>
        {!isLoginPage && userType === 'Lawyer' && (
          <li><Link to="/lawyer">Lawyer Dashboard</Link></li>
        )}
        {!isLoginPage && userType === 'Prisoner' && (
          <li><Link to="/prisoner">Prisoner Dashboard</Link></li>
        )}
        {!isLoginPage && userType === 'Judge' && (
          <li><Link to="/judge">Judge Dashboard</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;



