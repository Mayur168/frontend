// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export const About = () => {
//   const currentDateTime = new Date().toLocaleString('en-US', {
//     timeZone: 'Asia/Kolkata',
//     hour12: true,
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
//   }); // Outputs e.g., "June 21, 2025, 10:54 AM IST"

//   return (
//     <div className="d-flex min-vh-100">
//       {/* Custom Animations and Styles CSS */}
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slideUp {
//           from { transform: translateY(20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fadeIn 1s ease-in-out;
//         }
//         .animate-slide-up {
//           animation: slideUp 0.8s ease-in-out;
//         }
//         .animate-slide-up.delay-1 { animation-delay: 0.2s; }
//         .animate-slide-up.delay-2 { animation-delay: 0.4s; }
//         .animate-slide-up.delay-3 { animation-delay: 0.6s; }
//         .animate-slide-up.delay-4 { animation-delay: 0.8s; }
//         .bg-gradient-primary {
//           background: linear-gradient(135deg, #1e3c72, #2a5298);
//         }
//       `}</style>

//       {/* Sidebar (Contact, Skills, Languages) */}
//       <div className="bg-gradient-primary text-white p-4" style={{ width: '250px', minHeight: '100vh' }}>
//         <h4 className="text-center mb-4">Contact</h4>
//         <ul className="list-unstyled">
//           <li><i className="bi bi-telephone-fill"></i> +91 7447849409</li>
//           <li><i className="bi bi-envelope-fill"></i> <Link to="mailto:mayurgaikwad1442@gmail.com" className="text-white">mayurgaikwad1442@gmail.com</Link></li>
//           <li><i className="bi bi-geo-alt-fill"></i> Datta Nagar, Jivraj Park, Row House No. 5, Jatra Hotel, Adgaon, Nashik</li>
//         </ul>
//         <h4 className="text-center my-4">Skills</h4>
//         <ul className="list-unstyled">
//           <li>Python</li>
//           <li>Django</li>
//           <li>C</li>
//           <li>C++</li>
//           <li>JavaScript</li>
//           <li>PHP</li>
//           <li>MySQL</li>
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>React.js</li>
//           <li>TanStack Query</li>
//           <li>Bootstrap</li>
//           <li>Microsoft Office</li>
//         </ul>
//         <h4 className="text-center my-4">Languages</h4>
//         <ul className="list-unstyled">
//           <li>English</li>
//           <li>Marathi</li>
//           <li>Hindi</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 p-4">
        
//         <div className="container">
//           <div className="text-center mb-5">
//             <img
//               src="https://via.placeholder.com/150" // Replace with your image URL
//               alt="Mayur Gaikwad"
//               className="img-fluid rounded-circle shadow-lg mb-3"
//               style={{ maxWidth: '150px' }}
//             />
//             <h1 className="display-4 fw-bold text-white animate-fade-in">About Me</h1>
//           </div>
//           <div className="card p-4 shadow-lg bg-white">
//             <div className="card-body">
//               <div className="mb-4 animate-slide-up">
//                 <p>
//                   I’m Mayur Gaikwad, a Software Developer from Nashik, India, passionate about crafting innovative web solutions. With a BCS degree from K. V. N. Naik College (77.83%, 2018–2021), I specialize in Python, Django, React.js, and TanStack Query, delivering impactful applications across diverse sectors. Last updated: {currentDateTime}.
//                 </p>
//               </div>
//               <h2 className="h4 fw-bold mb-3 animate-slide-up delay-1">My Journey</h2>
//               <div className="mb-4 animate-slide-up delay-1">
//                 <p>
//                   My career began with a 6-month internship at Heuristic Technopark (Jul 2023–Jan 2024), where I mastered Python and Django, developing text recognition and X-ray detection modules. This was followed by a 4-month internship at CuFront (Feb 2024–May 2024), focusing on healthcare APIs. Since August 2024, I’ve been a Software Developer at Heuristic Technopark, advancing from Trainee to Developer.
//                 </p>
//               </div>
//               <h2 className="h4 fw-bold mb-3 animate-slide-up delay-2">Step-by-Step Project Development</h2>
//               <div className="mb-4 animate-slide-up delay-2">
//                 <p><strong>Step 1:</strong> I started with the Shutdown App (Python, Tkinter), learning system-level programming.</p>
//                 <p><strong>Step 2:</strong> I built WeBuild (HTML, CSS, JavaScript) to explore web development fundamentals.</p>
//                 <p><strong>Step 3:</strong> I created the Online Bookshop Management System (PHP, MySQL) for e-commerce and database skills.</p>
//                 <p><strong>Step 4:</strong> I developed Text Recognition and X-ray Recognition (Python, Django) for healthcare image processing.</p>
//                 <p><strong>Step 5:</strong> I designed Agree ERP (Python, Django, React.js) for agricultural resource management.</p>
//                 <p><strong>Step 6:</strong> I crafted Hungree Table ERP (Python, Django, React.js, TanStack Query) for hospitality order management.</p>
//                 <p><strong>Step 7:</strong> I built Bharti Clinic (Python, Django, React.js) for healthcare data management.</p>
//                 <p><strong>Step 8:</strong> Currently, I’m developing this Portfolio Website, enhancing this About page with React and Bootstrap for a rich, professional look.</p>
//               </div>
//               <h2 className="h4 fw-bold mb-3 animate-slide-up delay-3">Education & Interests</h2>
//               <div className="mb-4 animate-slide-up delay-3">
//                 <p>
//                   I completed my BCS at K. V. N. Naik College (77.83%, 2018–2021), HSC at D. D. Bytco Junior College (55.23%, 2016–2018), and SSC at Modern Education Society (76.20%, 2015–2016). I enjoy traveling and bike riding, which inspire my creative solutions.
//                 </p>
//               </div>
//               <p className="animate-slide-up delay-4">
//                 Connect with me via the <Link className="text-primary" to="/contact">Contact</Link> page to explore collaboration opportunities!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const About = () => {
  const currentDateTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }); // Outputs e.g., "June 21, 2025, 02:45 PM"

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-in-out;
        }
        .animate-slide-up.delay-1 { animation-delay: 0.2s; }
        .animate-slide-up.delay-2 { animation-delay: 0.4s; }
        .animate-slide-up.delay-3 { animation-delay: 0.6s; }
        .animate-slide-up.delay-4 { animation-delay: 0.8s; }
        .bg-gradient-primary {
          background: linear-gradient(135deg, #1e3c72, #2a5298);
        }
        .sidebar {
          width: 250px;
          min-height: 100vh;
          color: #ffffff;
          padding: 1.5rem;
          position: sticky;
          top: 0;
          overflow-y: auto;
        }
        .sidebar h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .sidebar ul {
          font-size: 0.9rem;
          line-height: 1.8;
        }
        .sidebar ul li {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
        }
        .sidebar ul li i {
          margin-right: 0.5rem;
        }
        .sidebar a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s;
        }
        .sidebar a:hover {
          color: #a5b4fc;
        }
        .main-content {
          flex-grow: 1;
          background: #f8fafc;
          padding: 2rem 1rem;
        }
        .profile-img {
          max-width: 120px;
          border: 4px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .card {
          border: none;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .card-body {
          padding: 2rem;
        }
        .card-body h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
        }
        .card-body p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4b5563;
        }
        .text-primary {
          color: #2563eb !important;
        }
        .text-primary:hover {
          color: #1d4ed8 !important;
        }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .about-container {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
            min-height: auto;
            position: static;
            padding: 1rem;
          }
          .sidebar h4 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }
          .sidebar ul {
            font-size: 0.85rem;
          }
          .main-content {
            padding: 1rem;
          }
          .profile-img {
            max-width: 100px;
          }
          .card-body {
            padding: 1.5rem;
          }
          .card-body h2 {
            font-size: 1.3rem;
          }
          .card-body p {
            font-size: 0.9rem;
          }
          .display-4 {
            font-size: 2rem !important;
          }
        }

        /* Desktop-specific styles */
        @media (min-width: 769px) {
          .about-container {
            flex-direction: row;
          }
          .main-content {
            padding: 3rem 2rem;
          }
        }
      `}</style>

      <div className="about-container d-flex">
        {/* Sidebar (Contact, Skills, Languages) */}
        <div className="sidebar bg-gradient-primary">
          <h4>Contact</h4>
          <ul className="list-unstyled">
            <li><i className="bi bi-telephone-fill"></i> +91 7447849409</li>
            <li>
              <i className="bi bi-envelope-fill"></i>{' '}
              <Link to="mailto:mayurgaikwad1442@gmail.com" className="text-white">
                mayurgaikwad1442@gmail.com
              </Link>
            </li>
            <li><i className="bi bi-geo-alt-fill"></i> Datta Nagar, Jivraj Park, Row House No. 5, Jatra Hotel, Adgaon, Nashik</li>
          </ul>
          <h4>Skills</h4>
          <ul className="list-unstyled">
            <li>Python</li>
            <li>Django</li>
            <li>C</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
            <li>TanStack Query</li>
            <li>Bootstrap</li>
            <li>Microsoft Office</li>
          </ul>
          <h4>Languages</h4>
          <ul className="list-unstyled">
            <li>English</li>
            <li>Marathi</li>
            <li>Hindi</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="container">
            <div className="text-center mb-5">
              <img
                src="https://via.placeholder.com/150" // Replace with your image URL
                alt="Mayur Gaikwad"
                className="img-fluid rounded-circle profile-img mb-3 animate-fade-in"
              />
              <h1 className="display-4 fw-bold text-dark animate-fade-in">About Me</h1>
            </div>
            <div className="card p-4">
              <div className="card-body">
                <div className="mb-4 animate-slide-up">
                  <p>
                    I’m Mayur Gaikwad, a Software Developer from Nashik, India, passionate about crafting innovative web solutions. With a BCS degree from K. V. N. Naik College (77.83%, 2018–2021), I specialize in Python, Django, React.js, and TanStack Query, delivering impactful applications across diverse sectors. Last updated: {currentDateTime}.
                  </p>
                </div>
                <h2 className="mb-3 animate-slide-up delay-1">My Journey</h2>
                <div className="mb-4 animate-slide-up delay-1">
                  <p>
                    My career began with a 6-month internship at Heuristic Technopark (Jul 2023–Jan 2024), where I mastered Python and Django, developing text recognition and X-ray detection modules. This was followed by a 4-month internship at CuFront (Feb 2024–May 2024), focusing on healthcare APIs. Since August 2024, I’ve been a Software Developer at Heuristic Technopark, advancing from Trainee to Developer.
                  </p>
                </div>
                <h2 className="mb-3 animate-slide-up delay-2">Step-by-Step Project Development</h2>
                <div className="mb-4 animate-slide-up delay-2">
                  <p><strong>Step 1:</strong> I started with the Shutdown App (Python, Tkinter), learning system-level programming.</p>
                  <p><strong>Step 2:</strong> I built WeBuild (HTML, CSS, JavaScript) to explore web development fundamentals.</p>
                  <p><strong>Step 3:</strong> I created the Online Bookshop Management System (PHP, MySQL) for e-commerce and database skills.</p>
                  <p><strong>Step 4:</strong> I developed Text Recognition and X-ray Recognition (Python, Django) for healthcare image processing.</p>
                  <p><strong>Step 5:</strong> I designed Agree ERP (Python, Django, React.js) for agricultural resource management.</p>
                  <p><strong>Step 6:</strong> I crafted Hungree Table ERP (Python, Django, React.js, TanStack Query) for hospitality order management.</p>
                  <p><strong>Step 7:</strong> I built Bharti Clinic (Python, Django, React.js) for healthcare data management.</p>
                  <p><strong>Step 8:</strong> Currently, I’m developing this Portfolio Website, enhancing this About page with React and Bootstrap for a rich, professional look.</p>
                </div>
                <h2 className="mb-3 animate-slide-up delay-3">Education & Interests</h2>
                <div className="mb-4 animate-slide-up delay-3">
                  <p>
                    I completed my BCS at K. V. N. Naik College (77.83%, 2018–2021), HSC at D. D. Bytco Junior College (55.23%, 2016–2018), and SSC at Modern Education Society (76.20%, 2015–2016). I enjoy traveling and bike riding, which inspire my creative solutions.
                  </p>
                </div>
                <p className="animate-slide-up delay-4">
                  Connect with me via the <Link className="text-primary" to="/contact">Contact</Link> page to explore collaboration opportunities!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};