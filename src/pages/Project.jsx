import React, { useEffect, useState, useRef } from 'react';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { fetchProject, createProject } from '../API/Api';
import { Card } from '../components/Card';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

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
    isLoading,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ['Project'],
    queryFn: ({ pageParam = 1 }) => fetchProject(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      console.log('getNextPageParam:', { lastPageLength: lastPage.length, allPagesLength: allPages.length });
      return lastPage.length === 3 ? allPages.length + 1 : undefined;
    },
    retry: 1,
  });

  // Mutation for creating a project
  const createMutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries(['Project']);
      setFormData({ name: '', project_description: '', project_link: '', project_image: '' });
      setShowModal(false);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Project created successfully!',
        timer: 2000,
        showConfirmButton: false,
      });
    },
    onError: (error) => {
      console.error('Create Project Error:', error.response?.data || error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to create project.',
        timer: 2000,
        showConfirmButton: false,
      });
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
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Name and description are required.',
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }
    if (project_link && !isValidUrl(project_link)) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid URL',
        text: 'Please enter a valid project link URL.',
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }
    if (project_image && !isValidUrl(project_image)) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid URL',
        text: 'Please enter a valid project image URL.',
        timer: 2000,
        showConfirmButton: false,
      });
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
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    console.log('useInView:', { inView, hasNextPage, isFetchingNextPage });
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Handle modal open
  const handleShow = () => {
    setShowModal(true);
  };

  // Handle modal close
  const handleClose = () => {
    setShowModal(false);
  };

  // Loader component using provided HTML
  const renderLoader = () => (
    <div className="spinner-container" aria-live="polite">
      <div className="loader my-3 pt-4">
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

  if (isLoading) {
    return (
      <div className="container mt-5 project-container">
        {renderLoader()}
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="container mt-5 project-container">
        <div className="alert alert-danger">
          Error fetching projects: {error?.message || 'An error occurred.'}
        </div>
      </div>
    );
  }

  // Flatten projects array
  const projects = data?.pages?.flat() || [];

  return (
    <>
      <style>
        {`
          .custom-modal .modal-content {
            border-radius: 12px;
            border: none;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .custom-modal .modal-header {
            background: #2563eb;
            border-bottom: none;
            padding: 1.25rem;
          }
          .custom-modal .modal-title {
            font-size: 1.25rem;
            font-weight: 600;
          }
          .custom-modal .btn-close {
            background-size: 0.8rem;
            opacity: 0.9;
            filter: invert(1);
          }
          .custom-modal .btn-close:hover {
            opacity: 1;
          }
          .custom-modal .modal-body {
            padding: 1.5rem;
          }
          .custom-modal .form-label {
            font-size: 0.95rem;
            font-weight: 500;
            color: #1f2937;
            margin-bottom: 0.5rem;
          }
          .custom-modal .form-control {
            border-radius: 6px;
            border: 1px solid #d1d5db;
            padding: 0.75rem;
            font-size: 0.95rem;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .custom-modal .form-control:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.2);
            outline: none;
          }
          .custom-modal .textarea {
            min-height: 100px;
            resize: vertical;
          }
          .custom-modal .modal-footer {
            border-top: none;
            padding: 1rem 1.5rem 1.5rem;
          }
          .custom-modal .btn-primary {
            background-color: #2563eb;
            border-color: #2563eb;
            border-radius: 6px;
            padding: 0.6rem 1.5rem;
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
            border-radius: 6px;
            padding: 0.6rem 1.5rem;
            font-weight: 500;
            transition: background-color 0.2s;
          }
          .custom-modal .btn-secondary:hover {
            background-color: #d1d5db;
            border-color: #d1d5db;
          }
          .custom-modal .required {
            color: #dc2626;
            font-size: 0.9rem;
          }
          .custom-modal .form-control::placeholder {
            color: #9ca3af;
          }
          .project-container {
            min-height: 100vh;
            padding-bottom: 2rem;
            padding-top: 80px; /* Adjust this value based on your header height */
          }
          .spinner-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100px; /* Ensure loader is visible */
            z-index: 1000; /* Ensure loader is above other content */
            position: relative;
            animation: fadeIn 0.5s;
          }
          .spinner-container .loader {
            margin: 1rem auto;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          }
          .spinner-container p {
            color: #6b7280;
            font-size: 1.1rem;
            font-weight: 500;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @media (max-width: 576px) {
            .custom-modal .modal-dialog {
              margin: 0.5rem;
              max-width: 90%;
            }
            .custom-modal .modal-body {
              padding: 1.25rem;
            }
            .custom-modal .modal-title {
              font-size: 1.1rem;
            }
            .custom-modal .form-control {
              font-size: 0.9rem;
              padding: 0.6rem;
            }
            .custom-modal .textarea {
              min-height: 80px;
            }
            .custom-modal .btn-primary,
            .custom-modal .btn-secondary {
              padding: 0.5rem;
              font-size: 0.25rem;
            }
            .custom-modal .modal-footer {
              padding: 0.75rem;
            }
            .spinner-container .loader {
              transform: scale(0.5);
            }
            .spinner-container p {
              font-size: 1rem;
            }
            .project-container {
              padding-top: 60px; /* Adjust for smaller header on smaller screens */
            }
          }
          @media (min-width: 577px) {
            .custom-modal .modal-dialog {
              max-width: 1550px;
            }
          }
        `}
      </style>
      <div className="container mt-5 project-container">
        <h2 className="mb-4 mb-3 text-white fw-bold text-center">Projects</h2>
        {/* <Button
          variant="primary"
          className="rounded-pill mb-4 px-4 fw-bold"
          onClick={handleShowModal}
        >
          Add Project
        </Button> */}

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
                <label htmlFor="name" className="form-label">
                  Project Name <span className="required">*</span>
                </label>
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
                <label htmlFor="project_description" className="form-label">
                  Description <span className="required">*</span>
                </label>
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

        {isLoading ? (
          renderLoader()
        ) : projects.length > 0 ? (
          <div className="row">
            {projects.map((project, index) => (
              <div key={`${index}-${project.id}`} className="col-md-4 col-sm-6 col-12 mb-4">
                <Card currdata={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-warning">No projects found. Add a new project to get started.</div>
        )}

        <div ref={ref} className="text-center my-0">
          {isFetchingNextPage ? (
            renderLoader()
          ) : hasNextPage ? (
            <Button
              variant="primary"
              className="rounded-pill px-4"
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage}
            >
              Load More
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};