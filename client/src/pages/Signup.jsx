import React, { useState } from 'react';

const Signup = () => {
  const [role, setRole] = useState('');
  const [form, setForm] = useState({
    name: '', gender: '', age: '', email: '', password: '', confirmPassword: '',
    phone: '', latitude: '', longitude: '', skill: '', fare: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let errs = {};

    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.gender) errs.gender = 'Gender required';
    if (!form.age || isNaN(form.age) || form.age < 18) errs.age = 'Valid age required';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) errs.email = 'Invalid email';
    if (!form.phone.match(/^\d{10}$/)) errs.phone = 'Phone must be 10 digits';
    if (form.password.length < 8) errs.password = 'Password must be 8+ characters';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    if (!form.latitude || !form.longitude) errs.address = 'Coordinates required';

    if (role === 'labour') {
      if (!form.skill) errs.skill = 'Select a skill';
      if (!form.fare || isNaN(form.fare)) errs.fare = 'Valid fare required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      alert(`${role.toUpperCase()} signup successful! OTP verification backend comes next.`);
      // Call backend API in next phase
    }
  };

  const styles = {
    container: {
      maxWidth: '700px',
      margin: 'auto',
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      animation: 'fadeIn 1s ease-in-out',
      transition: 'all 0.3s ease',
    },
    heading: {
      fontSize: '28px',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
    },
    label: {
      display: 'block',
      marginTop: '15px',
      fontWeight: 'bold',
      color: '#444',
      transition: 'color 0.3s ease',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      transition: 'border-color 0.3s ease, transform 0.3s ease',
    },
    inputFocus: {
      borderColor: '#007bff',
      transform: 'scale(1.02)',
    },
    error: {
      color: 'red',
      fontSize: '13px',
    },
    select: {
      padding: '10px',
      marginTop: '5px',
      marginBottom: '10px',
      width: '100%',
      borderRadius: '5px',
    },
    radioGroup: {
      display: 'flex',
      gap: '20px',
      marginTop: '10px',
    },
    otpBtn: {
      marginLeft: '10px',
      padding: '5px 10px',
      background: '#f0f0f0',
      border: '1px solid #ccc',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    submitBtn: {
      marginTop: '30px',
      padding: '12px 25px',
      fontSize: '16px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    submitBtnHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.03)',
    },
    fadeIn: {
      animation: 'fadeIn 1s ease-in',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>

      <label style={styles.label}>Select Role:</label>
      <select
        style={styles.select}
        value={role}
        onChange={e => setRole(e.target.value)}
      >
        <option value="">-- Select --</option>
        <option value="labour">Labour</option>
        <option value="client">Client</option>
      </select>

      {role && (
        <form onSubmit={handleSubmit} style={styles.fadeIn}>
          <label style={styles.label}>Name:</label>
          <input style={styles.input} name="name" value={form.name} onChange={handleChange} />
          <div style={styles.error}>{errors.name}</div>

          <label style={styles.label}>Gender:</label>
          <select style={styles.select} name="gender" value={form.gender} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
          <div style={styles.error}>{errors.gender}</div>

          <label style={styles.label}>Age:</label>
          <input type="number" style={styles.input} name="age" value={form.age} onChange={handleChange} />
          <div style={styles.error}>{errors.age}</div>

          <label style={styles.label}>Email:</label>
          <input type="email" style={styles.input} name="email" value={form.email} onChange={handleChange} />
          <button type="button" style={styles.otpBtn}>Send OTP</button>
          <div style={styles.error}>{errors.email}</div>

          <label style={styles.label}>Phone:</label>
          <input type="tel" style={styles.input} name="phone" value={form.phone} onChange={handleChange} />
          <button type="button" style={styles.otpBtn}>Send OTP</button>
          <div style={styles.error}>{errors.phone}</div>

          <label style={styles.label}>Password:</label>
          <input type="password" style={styles.input} name="password" value={form.password} onChange={handleChange} />
          <div style={styles.error}>{errors.password}</div>

          <label style={styles.label}>Confirm Password:</label>
          <input type="password" style={styles.input} name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
          <div style={styles.error}>{errors.confirmPassword}</div>

          <label style={styles.label}>Latitude:</label>
          <input type="text" style={styles.input} name="latitude" value={form.latitude} onChange={handleChange} />
          <label style={styles.label}>Longitude:</label>
          <input type="text" style={styles.input} name="longitude" value={form.longitude} onChange={handleChange} />
          <div style={styles.error}>{errors.address}</div>

          {role === 'labour' && (
            <>
              <label style={styles.label}>Skill:</label>
              <div style={styles.radioGroup}>
                <label><input type="radio" name="skill" value="plumber" onChange={handleChange} /> Plumber</label>
                <label><input type="radio" name="skill" value="electrician" onChange={handleChange} /> Electrician</label>
                <label><input type="radio" name="skill" value="carpenter" onChange={handleChange} /> Carpenter</label>
                <label><input type="radio" name="skill" value="cleaner" onChange={handleChange} /> Cleaner</label>
              </div>
              <div style={styles.error}>{errors.skill}</div>

              <label style={styles.label}>Fare (₹):</label>
              <input type="text" style={styles.input} name="fare" value={form.fare} onChange={handleChange} />
              <div style={styles.error}>{errors.fare}</div>
            </>
          )}

          <button
            type="submit"
            style={{
              ...styles.submitBtn,
              ...(submitted ? styles.submitBtnHover : {})
            }}
            onMouseEnter={() => setSubmitted(true)}
            onMouseLeave={() => setSubmitted(false)}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
