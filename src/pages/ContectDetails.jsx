import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchContacts, deleteContact } from "../API/Api";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the renderLoader function
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

export const ContactDetails = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  // Redirect to login if not authenticated
  useEffect(() => {
    console.log("ContactDetails: isAuthenticated:", isAuthenticated);
    if (!isAuthenticated) {
      console.log("ContactDetails: Redirecting to /login");
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const {
    data: contacts,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
    enabled: isAuthenticated,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      console.log(
        "ContactDetails: Contact deleted, invalidating contacts query"
      );
      queryClient.invalidateQueries(["contacts"]);
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "The contact has been deleted successfully.",
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
      });
    },
    onError: (error) => {
      console.error("Delete error:", error);
      if (error.response?.status === 401) {
        console.log("ContactDetails: Unauthorized, logging out");
        logout();
        navigate("/login", { replace: true });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Failed to delete contact: ${
            error.response?.data?.message || error.message
          }`,
          position: "top-end",
          toast: true,
          timer: 3000,
          showConfirmButton: false,
        });
      }
    },
  });

  const handleDelete = (id, name) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: `You are about to delete ${name} (ID: ${id}). This action cannot be undone.`,
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      buttonsStyling: true,
      customClass: {
        popup: "swal-wide",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("ContactDetails: Deleting contact:", id);
        deleteMutation.mutate(id);
      }
    });
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const sortedContacts = contacts
    ? [...contacts].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      })
    : [];

  if (!isAuthenticated) {
    console.log("ContactDetails: Not authenticated, returning null");
    return null;
  }

  if (isLoading) {
    return (
      <div className="container mt-5 text-center">
        {renderLoader()}
        <p>Loading contacts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          Error fetching contacts:{" "}
          {error.response?.data?.message || error.message}
          <button className="btn btn-link" onClick={() => refetch()}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5 pt-3 outline-0 border-0">
      <style>
        {`
          .swal-wide {
            width: 90% !important;
            max-width: 500px;
          }
            .contact-card {
              margin-bottom: 1.5rem;
              padding: 1rem;
              border: 1px solidrgb(12, 12, 12);
              border-radius: 0.25rem;
               background-color: #1a1a1a !important;
            }
          th[role="button"] {
            user-select: none;
             background-color: #1a1a1a !important;
          }
          th[role="button"]:hover {
            background-color:rgb(1, 5, 10);
              background-color: #1a1a1a !important;
             color:#ffff;
          }
          .btn {
            transition: transform 0.2s, background-color 0.2s;
            touch-action: manipulation;
          }
          .btn:active {
            transform: scale(0.95);
          }
          .card {
            border-radius: 0.5rem;
            overflow: hidden;
          }
          @media (min-width: 768px) {
            .desktop-table {
              display: block;
               background-color: #1a1a1a !important;
            }
            .mobile-cards {
              display: none;
            }
            .table th, .table td {
              vertical-align: middle;
              font-size: 0.95rem;
            }
            .btn-sm {
              padding: 0.4rem 0.8rem;
              font-size: 0.875rem;
            }
          }
            tr,th,td, .card-body, .card{
              background-color: #1a1a1a !important;
             color:#fff !important;
            }
          @media (max-width: 767px) {
            .desktop-table {
              display: none;
               background-color: #1a1a1a !important;
            }
            .mobile-cards {
              display: block;
            }
            .contact-card {
              margin-bottom: 1.5rem;
              padding: 1rem;
              border: 1px solidrgb(12, 12, 12);
              border-radius: 0.25rem;
          background-color: #1a1a1a !important;
            }
            .contact-card p {
              margin: 0.5rem 0;
              font-size: 0.9rem;
            }
            .contact-card strong {
              color:rgb(252, 253, 253);
            }
            .contact-card .btn {
              width: 100%;
              padding: 0.6rem;
              font-size: 1rem;
            }
            .card-header h2 {
              font-size: 1.5rem;
            }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .table th, .table td {
              font-size: 0.9rem;
              padding: 0.5rem;
            }
            .btn-sm {
              padding: 0.3rem 0.6rem;
              font-size: 0.8rem;
            }
          }
        `}
      </style>
      <div className="card pt-2 border-0 outline-0">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center ">
          <h2 className="mb-0">Contact Details</h2>
          <button
            className="btn btn-light btn-sm"
            onClick={() => {
              console.log("ContactDetails: Logging out");
              logout();
              navigate("/login", { replace: true });
            }}
            disabled={deleteMutation.isLoading}
          >
            Logout
          </button>
        </div>
        <div className="card-body  border-0 bg-black">
          {sortedContacts.length > 0 ? (
            <>
              {/* Desktop Table */}
              <div className="desktop-table ">
                <div className="table-responsive">
                  <table className="table table-hover ">
                    <thead className="">
                      <tr>
                        <th
                          scope="col"
                          role="button"
                          onClick={() => handleSort("id")}
                        >
                          ID{" "}
                          {sortConfig.key === "id" &&
                            (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          scope="col"
                          role="button"
                          onClick={() => handleSort("name")}
                        >
                          Name{" "}
                          {sortConfig.key === "name" &&
                            (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          scope="col"
                          role="button"
                          onClick={() => handleSort("email")}
                        >
                          Email{" "}
                          {sortConfig.key === "email" &&
                            (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          scope="col"
                          role="button"
                          onClick={() => handleSort("suggestion")}
                        >
                          Suggestion{" "}
                          {sortConfig.key === "suggestion" &&
                            (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          scope="col"
                          role="button"
                          onClick={() => handleSort("rating")}
                        >
                          Rating{" "}
                          {sortConfig.key === "rating" &&
                            (sortConfig.direction === "asc" ? "↑" : "↓")}
                        </th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedContacts.map((contact) => (
                        <tr key={contact.id}>
                          <td>{contact.id}</td>
                          <td>{contact.name}</td>
                          <td className="text-break">{contact.email}</td>
                          <td>{contact.suggestion}</td>
                          <td>{contact.rating}</td>
                          <td>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                handleDelete(contact.id, contact.name)
                              }
                              disabled={deleteMutation.isLoading}
                            >
                              {deleteMutation.isLoading &&
                              deleteMutation.variables === contact.id
                                ? "Deleting..."
                                : "Delete"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Mobile Cards */}
              <div className="mobile-cards">
                {sortedContacts.map((contact) => (
                  <div key={contact.id} className="contact-card">
                    {/* <p>
                      <strong>ID:</strong> {contact.id}
                    </p> */}
                    <p>
                      <strong>Name:</strong> {contact.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {contact.email}
                    </p>
                    <p>
                      <strong>Suggestion:</strong> {contact.suggestion}
                    </p>
                    <p>
                      <strong>Rating:</strong> {contact.rating}
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(contact.id, contact.name)}
                      disabled={deleteMutation.isLoading}
                    >
                      {deleteMutation.isLoading &&
                      deleteMutation.variables === contact.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="alert alert-info" role="alert">
              No contacts found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
