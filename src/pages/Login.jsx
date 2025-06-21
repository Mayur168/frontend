import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login } from '../API/Api';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { login: setAuth } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.success) {
        setAuth(true); // Set authenticated state
        navigate('/contactdetails', { replace: true });
      } else {
        alert('Login failed. Please check your credentials.');
      }
    },
    onError: (error) => {
      console.error('Login Error:', error);
      alert('An error occurred during login.');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Basic phone number validation
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }
    mutation.mutate({ phone, password });
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
            <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
            <input
              type="tel"
              className="form-control rounded-pill ps-4"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Enter your phone number"
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