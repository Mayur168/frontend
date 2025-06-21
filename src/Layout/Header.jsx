// import React from "react";
// import { NavLink } from "react-router-dom";

// export const Header = () => {
//   return (
//     <header>
//       <div>
//         <NavLink to="/"> Mayur Gaikwad </NavLink>
//         <ul>
//           <li>
//             <NavLink to="/"> Home </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact"> Contect </NavLink>
//           </li>
//           <li>
//             <NavLink to="/project"> Project </NavLink>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand fw-bold" to="/">
        Mayur Gaikwad
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink exact="true" to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/project" className="nav-link">
              Project
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About Me
            </NavLink>
          </li>
           {/* <li className="nav-item">
            <NavLink to="/contactdetails" className="nav-link">
              Login
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
