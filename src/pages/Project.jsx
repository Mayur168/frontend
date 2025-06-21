// import React, { useEffect, useState } from 'react';
// import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { useInView } from 'react-intersection-observer';
// import { fetchProject, createProject } from '../API/Api';
// import { Card } from '../components/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export const Project = () => {
//   const queryClient = useQueryClient();
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     project_description: '',
//     project_link: '',
//     project_image: '',
//   });

//   // Fetch projects with infinite query
//   const {
//     data,
//     hasNextPage,
//     fetchNextPage,
//     isFetchingNextPage,
//     status,
//   } = useInfiniteQuery({
//     queryKey: ['Project'],
//     queryFn: ({ pageParam = 1 }) => fetchProject(pageParam),
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.length === 3 ? allPages.length + 1 : undefined;
//     },
//   });

//   // Mutation for creating a project
//   const createMutation = useMutation({
//     mutationFn: createProject,
//     onSuccess: () => {
//       queryClient.invalidateQueries(['Project']);
//       setFormData({ name: '', project_description: '', project_link: '', project_image: '' });
//       setShowModal(false);
//       alert('Project created successfully!');
//     },
//     onError: (error) => {
//       console.error('Create Project Error:', error);
//       alert('Failed to create project.');
//     },
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleCreateSubmit = (e) => {
//     e.preventDefault();
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
//     createMutation.mutate({ name, project_description, project_link, project_image });
//   };

//   // URL validation helper
//   const isValidUrl = (url) => {
//     try {
//       new URL(url);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   // Infinite scroll trigger
//   const { ref, inView } = useInView({ threshold: 1 });

//   useEffect(() => {
//     if (inView && hasNextPage) {
//       fetchNextPage();
//     }
//   }, [inView, fetchNextPage, hasNextPage]);

//   if (status === 'loading') return <div className="container mt-4">Loading...</div>;
//   if (status === 'error') return <div className="container mt-4">Error Fetching...</div>;

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4 text-primary">Projects</h2>
//       <button
//         className="btn btn-primary rounded-pill mb-4"
//         onClick={() => setShowModal(true)}
//       >
//         Add Project
//       </button>

//       {/* Modal for adding a new project */}
//       <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Add New Project</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 onClick={() => setShowModal(false)}
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleCreateSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label fw-bold">Project Name</label>
//                   <input
//                     type="text"
//                     className="form-control rounded-pill ps-4"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Enter project name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="project_description" className="form-label fw-bold">Description</label>
//                   <textarea
//                     className="form-control rounded-3 ps-4"
//                     id="project_description"
//                     name="project_description"
//                     value={formData.project_description}
//                     onChange={handleInputChange}
//                     placeholder="Enter project description"
//                     rows="4"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="project_link" className="form-label fw-bold">Project Link (Optional)</label>
//                   <input
//                     type="url"
//                     className="form-control rounded-pill ps-4"
//                     id="project_link"
//                     name="project_link"
//                     value={formData.project_link}
//                     onChange={handleInputChange}
//                     placeholder="Enter project link (e.g., https://example.com)"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="project_image" className="form-label fw-bold">Project Image URL (Optional)</label>
//                   <input
//                     type="url"
//                     className="form-control rounded-pill ps-4"
//                     id="project_image"
//                     name="project_image"
//                     value={formData.project_image}
//                     onChange={handleInputChange}
//                     placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
//                   />
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary rounded-pill"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="btn btn-primary rounded-pill"
//                     disabled={createMutation.isLoading}
//                   >
//                     {createMutation.isLoading ? 'Creating...' : 'Create Project'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row">
//         {data?.pages?.map((page, pageIndex) =>
//           page?.map((project) => (
//             <div key={`${pageIndex}-${project.id}`} className="col-md-4 mb-4">
//               <Card currdata={project} />
//             </div>
//           ))
//         )}
//       </div>

//       <div ref={ref} className="text-center my-3">
//         {isFetchingNextPage && <p>Loading more...</p>}
//         {!hasNextPage && <p>No more projects to load.</p>}
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useState, useRef } from 'react';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { fetchProject, createProject } from '../API/Api';
import { Card } from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

export const Project = () => {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    project_description: '',
    project_link: '',
    project_image: '',
  });
  const modalRef = useRef(null);

  // Fetch projects with infinite query
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['Project'],
    queryFn: ({ pageParam = 1 }) => fetchProject(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 3 ? allPages.length + 1 : undefined;
    },
  });

  // Mutation for creating a project
  const createMutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries(['Project']);
      setFormData({ name: '', project_description: '', project_link: '', project_image: '' });
      setShowModal(false);
      alert('Project created successfully!');
    },
    onError: (error) => {
      console.error('Create Project Error:', error);
      alert('Failed to create project.');
    },
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleCreateSubmit = (e) => {
    e.preventDefault();
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
    createMutation.mutate({ name, project_description, project_link, project_image });
  };

  // URL validation helper
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Infinite scroll trigger
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  // Handle modal close
  const handleClose = () => {
    setShowModal(false);
  };

  // Handle modal open
  const handleShow = () => {
    setShowModal(true);
  };

  if (status === 'loading') return <div className="container mt-4">Loading...</div>;
  if (status === 'error') return <div className="container mt-4">Error Fetching...</div>;

  return (
    <>
      <style>
        {`
          .custom-modal .modal-content {
            border-radius: 12px;
            border: none;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            background: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .custom-modal .modal-header {
            background: #2563eb;
            color: #ffffff;
            border-bottom: none;
            padding: 1.25rem 1.5rem;
          }
          .custom-modal .modal-title {
            font-size: 1.2rem;
            font-weight: 600;
          }
          .custom-modal .btn-close {
            background-size: 0.8rem;
            opacity: 0.8;
            filter: invert(1);
          }
          .custom-modal .btn-close:hover {
            opacity: 1;
          }
          .custom-modal .modal-body {
            padding: 1.5rem;
          }
          .custom-modal .form-label {
            font-size: 0.9rem;
            font-weight: 500;
            color: #1f2937;
            margin-bottom: 0.5rem;
          }
          .custom-modal .form-control {
            border-radius: 8px;
            border: 1px solid #d1d5db;
            padding: 0.75rem;
            font-size: 0.9rem;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .custom-modal .form-control:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
            outline: none;
          }
          .custom-modal .textarea {
            resize: vertical;
            min-height: 80px;
          }
          .custom-modal .modal-footer {
            border-top: none;
            padding: 1rem 1.5rem 1.5rem;
          }
          .custom-modal .btn-primary {
            background-color: #2563eb;
            border-color: #2563eb;
            border-radius: 8px;
            padding: 0.5rem 1.25rem;
            font-weight: 500;
            transition: background-color 0.2s;
          }
          .custom-modal .btn-primary:hover {
            background-color: #1d4ed8;
            border-color: #1d4ed8;
          }
          .custom-modal .btn-primary:disabled {
            background-color: #93c5fd;
            border-color: #93c5fd;
            cursor: not-allowed;
          }
          .custom-modal .btn-secondary {
            background-color: #e5e7eb;
            border-color: #e5e7eb;
            color: #1f2937;
            border-radius: 8px;
            padding: 0.5rem 1.25rem;
            font-weight: 500;
            transition: background-color 0.2s;
          }
          .custom-modal .btn-secondary:hover {
            background-color: #d1d5db;
            border-color: #d1d5db;
          }
          .custom-modal .required {
            color: #dc2626;
            font-size: 0.85rem;
          }
          .custom-modal .form-control::placeholder {
            color: #9ca3af;
          }

          /* Mobile-specific styles */
          @media (max-width: 576px) {
            .custom-modal .modal-dialog {
              margin: 0.5rem;
              max-width: 95%;
            }
            .custom-modal .modal-body {
              padding: 1rem;
            }
            .custom-modal .modal-title {
              font-size: 1rem;
            }
            .custom-modal .form-control {
              font-size: 0.85rem;
              padding: 0.6rem;
            }
            .custom-modal .textarea {
              min-height: 60px;
            }
            .custom-modal .btn-primary,
            .custom-modal .btn-secondary {
              padding: 0.4rem 1rem;
              font-size: 0.85rem;
            }
            .custom-modal .modal-footer {
              padding: 0.75rem 1rem;
            }
          }

          /* Desktop-specific styles */
          @media (min-width: 577px) {
            .custom-modal .modal-dialog {
              max-width: 600px;
            }
          }
        `}
      </style>
      <div className="container mt-4">
        <h2 className="mb-4 text-primary fw-bold">Projects</h2>
        <Button
          variant="primary"
          className="rounded-pill mb-4 px-4 fw-bold"
          onClick={handleShow}
        >
          Add Project
        </Button>

        {/* Modal for adding a new project */}
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          dialogClassName="custom-modal"
          ref={modalRef}
          aria-labelledby="addProjectModalLabel"
        >
          <Modal.Header closeButton>
            <Modal.Title id="addProjectModalLabel">Add New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleCreateSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Project Name <span className="required">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter project name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="project_description" className="form-label">Description <span className="required">*</span></label>
                <textarea
                  className="form-control textarea"
                  id="project_description"
                  name="project_description"
                  value={formData.project_description}
                  onChange={handleInputChange}
                  placeholder="Enter project description"
                  rows="4"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="project_link" className="form-label">Project Link (Optional)</label>
                <input
                  type="url"
                  className="form-control"
                  id="project_link"
                  name="project_link"
                  value={formData.project_link}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="project_image" className="form-label">Project Image URL (Optional)</label>
                <input
                  type="url"
                  className="form-control"
                  id="project_image"
                  name="project_image"
                  value={formData.project_image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="modal-footer">
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={createMutation.isLoading}
                >
                  {createMutation.isLoading ? 'Creating...' : 'Create Project'}
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        <div className="row">
          {data?.pages?.map((page, pageIndex) =>
            page?.map((project) => (
              <div key={`${pageIndex}-${project.id}`} className="col-md-4 col-sm-6 col-12 mb-4">
                <Card currdata={project} />
              </div>
            ))
          )}
        </div>

        <div ref={ref} className="text-center my-3">
          {isFetchingNextPage && <p>Loading more...</p>}
          {!hasNextPage && <p>No more projects to load.</p>}
        </div>
      </div>
    </>
  );
};