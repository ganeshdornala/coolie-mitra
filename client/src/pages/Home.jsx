// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      padding: '40px',
      background: 'linear-gradient(to right, #f0f0f0, #ffffff)',
      fontFamily: 'Arial'
    }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#333' }}>Coolie-Mitra</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#444' }}>
          Coolie-Mitra is a free platform where clients can find nearby labourers like electricians, plumbers, and carpenters.
          Sign up to hire, manage jobs, track progress, and rate after work.
        </p>
        <div style={{ marginTop: '30px' }}>
          <Link to="/signup" style={{
            marginRight: '20px', padding: '10px 20px',
            backgroundColor: '#007bff', color: '#fff',
            textDecoration: 'none', borderRadius: '5px'
          }}>Signup</Link>
          <Link to="/login" style={{
            padding: '10px 20px',
            backgroundColor: '#28a745', color: '#fff',
            textDecoration: 'none', borderRadius: '5px'
          }}>Login</Link>
        </div>
      </div>

      {/* Placeholder for future chatbot */}
      <div style={{
        flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#f7f7f7', borderLeft: '2px solid #ccc'
      }}>
        <div style={{
          width: '80%', height: '80%', backgroundColor: '#fff',
          borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: '#888'
        }}>
          AI Chatbot coming soon...
        </div>
      </div>
    </div>
  );
};

export default Home;
