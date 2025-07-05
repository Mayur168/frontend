import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login } from '../API/Api';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login: setAuth, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.success) {
        setAuth(true); // Set authenticated state
      } else {
        alert('Login failed. Please check your credentials.');
      }
    },
    onError: (error) => {
      console.error('Login Error:', error);
      alert('An error occurred during login.');
    },
  });

  // Navigate after isAuthenticated updates
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/contactdetails', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    mutation.mutate({ email, password });
  };

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="card p-4 shadow-lg" style={{ 
        maxWidth: '400px', 
        width: '100%', 
        backgroundColor: 'rgba(255, 255, 255, 0.85)', 
        borderRadius: '15px',
        backdropFilter: 'blur(5px)',
      }}>
        <h1 className="text-center mb-4 text-primary">Welcome Admin</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email Address</label>
            <input
              type="email"
              className="form-control rounded-pill ps-4"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              style={{ borderColor: '#007bff', transition: 'all 0.3s ease' }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control rounded-pill ps-4"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              style={{ borderColor: '#007bff', transition: 'all 0.3s ease' }}
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-100 rounded-pill py-2 fw-bold"
            disabled={mutation.isLoading}
            style={{ 
              background: 'linear-gradient(45deg, #007bff, #00d4ff)',
              border: 'none',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {mutation.isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};