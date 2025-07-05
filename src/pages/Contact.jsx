import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContact } from "../API/Api"; // Import the createContact function
import Swal from "sweetalert2"; // Import SweetAlert2

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
    rating: "",
  });
  const [error, setError] = useState(null); // State for error handling
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submit button loading

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(null); // Clear error on form change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state
    setError(null); // Clear previous errors

    try {
      const response = await createContact({
        name: formData.name,
        email: formData.email,
        suggestion: formData.suggestion,
        rating: parseInt(formData.rating), // Convert rating to number
      });

      if (response) {
        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Thank you for your feedback! Contact submitted successfully.",
          confirmButtonColor: "#0d6efd",
          timer: 3000,
          timerProgressBar: true,
        });
        setFormData({ name: "", email: "", suggestion: "", rating: "" }); // Reset form
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <>
      <style>
        {`
          .contact-page {
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                        url("https://picsum.photos/1920/1080") no-repeat center center fixed;
            background-size: cover;
            background-color: #f0f0f0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 2rem 0;
          }
          .contact-form-card {
            background: #ffffff;
            border-radius: 15px;
            padding: 1.5rem;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .contact-form-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          }
          .form-control, .form-select {
            background: #ffffff;
            border-radius: 25px;
            padding: 0.6rem 1.2rem;
            border: 1px solid #ced4da;
            font-size: 0.95rem;
          }
          .form-control:focus, .form-select:focus {
            box-shadow: 0 0 12px rgba(13, 110, 253, 0.3);
            border-color: #0d6efd;
            background: #ffffff;
          }
          textarea.form-control {
            border-radius: 10px;
            padding: 0.8rem 1.2rem;
            background: #ffffff;
            font-size: 0.95rem;
          }
          .btn-primary {
            border-radius: 25px;
            padding: 0.6rem 2rem;
            font-weight: 600;
            background: #0d6efd;
            border: none;
            font-size: 0.95rem;
          }
          .btn-primary:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(13, 110, 253, 0.4);
            background: #0b5ed7;
          }
          .btn-primary:disabled {
            opacity: 0.65;
            cursor: not-allowed;
          }
          .form-label {
            color: #333;
            font-size: 1rem;
            font-weight: 500;
          }
          .section-title {
            color: #0d6efd;
            font-weight: 700;
            font-size: 1.8rem;
          }
          .error-message {
            color: #dc3545;
            font-size: 0.9rem;
            margin-top: 0.5rem;
            text-align: center;
          }
          @media (max-width: 768px) {
            .contact-form-card {
              padding: 1rem;
            }
            .contact-page {
              padding: 1.5rem 0;
              background-attachment: scroll;
            }
            .form-control, .form-select, .btn-primary {
              font-size: 0.9rem;
            }
            .section-title {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
      <div className="contact-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="contact-form-card mt-4">
                <h2 className="section-title text-center mb-3">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      id="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="suggestion" className="form-label">Suggestion</label>
                    <textarea
                      name="suggestion"
                      value={formData.suggestion}
                      onChange={handleChange}
                      className="form-control"
                      id="suggestion"
                      rows="4"
                      placeholder="Share your suggestions..."
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating (1-5)</label>
                    <select
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      className="form-select"
                      id="rating"
                      required
                    >
                      <option value="">Choose rating</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                  </div>
                  {error && <div className="error-message">{error}</div>}
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};