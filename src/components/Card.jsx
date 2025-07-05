
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { updateProject, deleteProject } from '../API/Api';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export const Card = ({ currdata }) => {
//   const queryClient = useQueryClient();
//   const { id, name, project_description, project_link, project_image } = currdata;
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name,
//     project_description,
//     project_link: project_link || '',
//     project_image: project_image || '',
//   });

//   const updateMutation = useMutation({
//     mutationFn: updateProject,
//     onSuccess: () => {
//       queryClient.invalidateQueries(['Project']);
//       setIsEditing(false);
//       alert('Project updated successfully!');
//     },
//     onError: (error) => {
//       console.error('Update Project Error:', error);
//       alert('Failed to update project.');
//     },
//   });

//   const deleteMutation = useMutation({
//     mutationFn: deleteProject,
//     onSuccess: () => {
//       queryClient.invalidateQueries(['Project']);
//       alert('Project deleted successfully!');
//     },
//     onError: (error) => {
//       console.error('Delete Project Error:', error);
//       alert('Failed to delete project.');
//     },
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const { name, project_description, project_link, project_image } = formData;
//     if (!name || !project_description) {
//       alert('Name and description are required.');
//       return;
//     }
//     if (project_link && !isValidUrl(project_link)) {
//       alert('Please enter a valid project link URL.');
//       return;
//     }
//     if (project_image && !isValidUrl(project_image)) {
//       alert('Please enter a valid project image URL.');
//       return;
//     }
//     updateMutation.mutate({
//       id,
//       name,
//       project_description,
//       project_link: project_link || "",
//       project_image: project_image || "",
//     });
//   };

//   const isValidUrl = (url) => {
//     try {
//       new URL(url);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   const handleDelete = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (window.confirm('Are you sure you want to delete this project?')) {
//       deleteMutation.mutate(id);
//     }
//   };

//   return (
//     <NavLink to={`/project/${id}`} className="text-decoration-none text-dark">
//       <div className="card mb-3 shadow-sm" style={{ borderRadius: '10px' }}>
//         {project_image && (
//           <img
//             src={project_image}
//             className="card-img-top"
//             alt={name}
//             style={{ maxHeight: '200px', objectFit: 'cover', borderRadius: '5px' }}
//           />
//         )}
//         <div className="card-body">
//           {isEditing ? (
//             <form onSubmit={handleUpdateSubmit}>
//               <div className="mb-3">
//                 <label htmlFor={`name-${id}`} className="form-label fw-bold">
//                   Project Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control rounded-pill ps-4"
//                   id={`name-${id}`}
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor={`project_description-${id}`} className="form-label fw-bold">
//                   Description
//                 </label>
//                 <textarea
//                   className="form-control rounded-3 ps-4"
//                   id={`project_description-${id}`}
//                   name="project_description"
//                   value={formData.project_description}
//                   onChange={handleInputChange}
//                   rows="3"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor={`project_link-${id}`} className="form-label fw-bold">
//                   Project Link (Optional)
//                 </label>
//                 <input
//                   type="url"
//                   className="form-control rounded-pill ps-4"
//                   id={`project_link-${id}`}
//                   name="project_link"
//                   value={formData.project_link}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor={`project_image-${id}`} className="form-label fw-bold">
//                   Project Image URL (Optional)
//                 </label>
//                 <input
//                   type="url"
//                   className="form-control rounded-pill ps-4"
//                   id={`project_image-${id}`}
//                   name="project_image"
//                   value={formData.project_image}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               {/* <button
//                 type="submit"
//                 className="btn btn-success rounded-pill me-2"
//                 disabled={updateMutation.isLoading}
//               >
//                 {updateMutation.isLoading ? 'Saving...' : 'Save'}
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary rounded-pill"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setIsEditing(false);
//                 }}
//               >
//                 Cancel
//               </button> */}
//             </form>
//           ) : (
//             <>
//               <h5 className="card-title">{name}</h5>
//               <p className="card-text">{project_description}</p>
//               {project_link && (
//                 <a
//                   href={project_link}
//                   className=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   {/* Visit Project */}
//                 </a>
//               )}
//               {/* <button
//                 className="btn btn-primary rounded-pill me-2"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   setIsEditing(true);
//                 }}
//               >
//                 Edit
//               </button>
//               <button
//                 className="btn btn-danger rounded-pill"
//                 onClick={handleDelete}
//                 disabled={deleteMutation.isLoading}
//               >
//                 {deleteMutation.isLoading ? 'Deleting...' : 'Delete'}
//               </button> */}
//             </>
//           )}
//         </div>
//       </div>
//     </NavLink>
//   );
// };

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProject, deleteProject } from '../API/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

export const Card = ({ currdata }) => {
  const queryClient = useQueryClient();
  const { id, name, project_description, project_link, project_image } = currdata;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name,
    project_description,
    project_link: project_link || '',
    project_image: project_image || '',
  });

  const updateMutation = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries(['Project']);
      setIsEditing(false);
      alert('Project updated successfully!');
    },
    onError: (error) => {
      console.error('Update Project Error:', error);
      alert('Failed to update project.');
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { name, project_description, project_link, project_image } = formData;
    if (!name || !project_description) {
      alert('Name and description are required.');
      return;
    }
    if (project_link && !isValidUrl(project_link)) {
      alert('Please enter a valid project link URL.');
      return;
    }
    if (project_image && !isValidUrl(project_image)) {
      alert('Please enter a valid project image URL.');
      return;
    }
    updateMutation.mutate({
      id,
      name,
      project_description,
      project_link: project_link || "",
      project_image: project_image || "",
    });
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <NavLink to={`/project/${id}`} className="text-decoration-none text-dark">
        <div className="card mb-3 shadow-sm w-100" style={{ maxWidth: '18rem', height: '28rem', borderRadius: '15px', overflow: 'hidden' }}>
          {project_image && (
            <img
              src={project_image}
              className="card-img-top"
              alt={name}
              style={{ height: '180px', objectFit: 'cover' }}
            />
          )}
          <div className="card-body d-flex flex-column">
            {isEditing ? (
              <form onClick={(e) => e.stopPropagation()} onSubmit={handleUpdateSubmit}>
                <div className="mb-3">
                  <label htmlFor={`name-${id}`} className="form-label fw-bold">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id={`name-${id}`}
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`project_description-${id}`} className="form-label fw-bold">
                    Description
                  </label>
                  <textarea
                    className="form-control rounded"
                    id={`project_description-${id}`}
                    name="project_description"
                    value={formData.project_description}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`project_link-${id}`} className="form-label fw-bold">
                    Project Link (Optional)
                  </label>
                  <input
                    type="url"
                    className="form-control rounded-pill"
                    id={`project_link-${id}`}
                    name="project_link"
                    value={formData.project_link}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`project_image-${id}`} className="form-label fw-bold">
                    Project Image URL (Optional)
                  </label>
                  <input
                    type="url"
                    className="form-control rounded-pill"
                    id={`project_image-${id}`}
                    name="project_image"
                    value={formData.project_image}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    type="submit"
                    className="btn btn-success rounded-pill"
                    disabled={updateMutation.isLoading}
                  >
                    {updateMutation.isLoading ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary rounded-pill"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h5 className="card-title animate__animated animate__fadeInDown mb-3">{name}</h5>
                <div
                  className="card-text"
                  style={{
                    maxHeight: 'calc(28rem - 180px - 4rem)',
                    overflowY: 'auto',
                    scrollbarWidth: 'none', /* Firefox */
                    msOverflowStyle: 'none' /* IE and Edge */
                  }}
                >
                  <style>
                    {`
                      .card-text::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, Edge */
                      }
                    `}
                  </style>
                  {project_description}
                </div>
              </>
            )}
          </div>
        </div>
      </NavLink>
    </div>
  );
};