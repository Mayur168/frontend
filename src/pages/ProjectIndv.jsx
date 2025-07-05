// import React from 'react';
// import { useParams, NavLink } from 'react-router-dom';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { fetchProjectById } from '../API/Api';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../index.css';

// export const ProjectIndv = () => {
//   const { id } = useParams();
//   const queryClient = useQueryClient();

//   const { data: project, status, error, isFetching } = useQuery({
//     queryKey: ['Project', id],
//     queryFn: () => fetchProjectById(id),
//     cacheTime: 0,
//     staleTime: 0,
//     retry: false, // Disable retries to catch errors immediately
//   });

//   // Debug logging to track query state
//   console.log('ProjectIndv State:', {
//     project,
//     status,
//     isFetching,
//     error,
//     id,
//   });

//   // Show loader when query is loading or fetching
//   if (status === 'loading' || isFetching) {
//     return (
//       <div className="container mt-4 text-center" aria-live="polite">
//         <div className="loader my-5 pt-5">
//           <div className="circle">
//             <div className="dot"></div>
//             <div className="outline"></div>
//           </div>
//           <div className="circle">
//             <div className="dot"></div>
//             <div className="outline"></div>
//           </div>
//           <div className="circle">
//             <div className="dot"></div>
//             <div className="outline"></div>
//           </div>
//           <div className="circle">
//             <div className="dot"></div>
//             <div className="outline"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Show error state
//   if (status === 'error') {
//     return (
//       <div className="container mt-4 pt-5">
//         <NavLink to="/project" className="btn btn-secondary rounded-pill mb-3 btn-sm">
//           Back to Projects
//         </NavLink>
//         <div className="alert alert-danger d-flex align-items-center">
//           Error fetching project: {error?.message || 'An unknown error occurred.'}
//           <button
//             className="btn btn-primary rounded-pill ms-3"
//             onClick={() => queryClient.invalidateQueries(['Project', id])}
//             type="button"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Show empty state if no project data
//   if (!project || Object.keys(project).length === 0) {
//     return (
//       <div className="container mt-4 pt-5">
//         <NavLink to="/project" className="btn btn-secondary rounded-pill mb-3 btn-sm">
//           Back
//         </NavLink>
//         <p>No project data found.</p>
//       </div>
//     );
//   }

//   const { name, project_description, project_link, project_image } = project;

//   return (
//     <div className="container mt-4 pt-5">
//      <div className="position-relative d-flex align-items-center justify-content-center mb-4">
//          <NavLink to="/project" className="btn btn-secondary rounded-pill position-absolute start-0 btn-sm">
//            Back
//          </NavLink>
//          <h1 className="rich-title m-0">Project Details</h1>
//       </div>
//       <div className="card shadow-sm" style={{ borderRadius: '10px' }}>
//         {project_image ? (
//           <img
//             src={project_image}
//             className="card-img-top"
//             alt={name}
//             style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '10px 10px' }}
//             onError={(e) => (e.target.src = 'https://via.placeholder.com/400x200?text=No+Image')}
//           />
//         ) : (
//           <img
//             src="https://via.placeholder.com/400x200?text=No+Image"
//             className="card-img-top"
//             alt="No Image"
//             style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
//           />
//         )}
//         <div className="card-body">
//           <h2 className="card-title mb-2 mb-3">{name}</h2>
//           <p className="card-text mb-3">{project_description}</p>
//           {project_link && (
//             <a
//               href={project_link}
//               className="btn btn-primary rounded-pill px-4"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Visit Project
//             </a>
//           )}
          
//         </div>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProjectById } from '../API/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

export const ProjectIndv = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: project, status, error, isFetching } = useQuery({
    queryKey: ['Project', id],
    queryFn: () => fetchProjectById(id),
    cacheTime: 0,
    staleTime: 0,
    retry: false,
  });

  // Debug logging to track query state
  console.log('ProjectIndv State:', {
    project,
    status,
    isFetching,
    error,
    id,
  });

  // Show loader when query is loading or fetching
  if (status === 'loading' || isFetching) {
    return (
      <div className="container mt-5 text-center" aria-live="polite">
        <div className="loader my-5 pt-5">
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (status === 'error') {
    return (
      <div className="container mt-5 pt-5">
        <NavLink
          to="/project"
          className="btn btn-outline-dark rounded-pill mb-4 btn-md shadow-sm animate__animated animate__pulse animate__infinite"
          style={{
            transition: 'all 0.3s ease',
            padding: '0.5rem 1.5rem',
            fontWeight: '500',
            borderWidth: '2px',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Back to Projects
        </NavLink>
        <div className="alert alert-danger d-flex align-items-center justify-content-between">
          Error fetching project: {error?.message || 'An unknown error occurred.'}
          <button
            className="btn btn-outline-primary rounded-pill ms-3 animate__animated animate__pulse animate__infinite"
            onClick={() => queryClient.invalidateQueries(['Project', id])}
            type="button"
            style={{
              transition: 'all 0.3s ease',
              padding: '0.5rem 1.5rem',
              fontWeight: '500',
              borderWidth: '2px',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Show empty state if no project data
  if (!project || Object.keys(project).length === 0) {
    return (
      <div className="container mt-5 pt-5">
        <NavLink
          to="/project"
          className="btn btn-outline-dark rounded-pill mb-4 btn-md shadow-sm animate__animated animate__pulse animate__infinite"
          style={{
            transition: 'all 0.3s ease',
            padding: '0.5rem 1.5rem',
            fontWeight: '500',
            borderWidth: '2px',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Back
        </NavLink>
        <p>No project data found.</p>
      </div>
    );
  }

  const { name, project_description, project_link, project_image } = project;

  return (
    <div className="container mt-5 pt-4 pt-md-5">
      <div className="d-flex align-items-center justify-content-center mb-4 mb-md-5 position-relative">
        <NavLink
          to="/project"
          className="btn btn-outline-dark rounded-pill position-absolute start-0 btn-md shadow-sm animate__animated  animate__infinite mb-3"
          style={{
            fontWeight: '500',
            borderWidth: '0px',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Back
        </NavLink>
        <h1
          className="text-center animate__animated animate__fadeInDown animate__faster"
          style={{
            transition: 'all 0.3s ease',
            fontWeight: '700',
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            color: 'rgb(253 253 253)',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderBottom: '2px solid #007bff',
            paddingBottom: '0.5rem',
            width: '100%',
            maxWidth: '600px',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Project Details
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div
            className="card shadow-lg w-100 animate__animated animate__fadeInUp"
            style={{ borderRadius: '15px', overflow: 'hidden' }}
          >
            {project_image ? (
              <img
                src={project_image}
                className="card-img-top"
                alt={name}
                style={{
                  height: 'clamp(200px, 40vw, 300px)',
                  objectFit: 'cover',
                  borderRadius: '15px 15px 0 0',
                }}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x200?text=No+Image')}
              />
            ) : (
              <img
                src="https://via.placeholder.com/400x200?text=No+Image"
                className="card-img-top"
                alt="No Image"
                style={{
                  height: 'clamp(200px, 40vw, 300px)',
                  objectFit: 'cover',
                  borderRadius: '15px 15px 0 0',
                }}
              />
            )}
            <div className="card-body p-4">
              <h2
                className="card-title mb-3 animate__animated animate__fadeIn"
                style={{
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                {name}
              </h2>
              <div
                className="card-text mb-4"
                style={{
                  maxHeight: 'clamp(150px, 30vh, 200px)',
                  overflowY: 'auto',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <style>
                  {`
                    .card-text::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                </style>
                {project_description}
              </div>
              {project_link && (
                <a
                  href={project_link}
                  className="btn btn-primary rounded-pill px-4 animate__animated animate__pulse animate__infinite"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    transition: 'all 0.3s ease',
                    fontWeight: '500',
                    padding: '0.5rem 1.5rem',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};