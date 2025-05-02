import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await axios.post('http://127.0.0.1:8000/register', {
        username: formData.username,
        password: formData.password
        // (You can modify backend to accept email/phone if needed)
      });
      alert("Registration successful!");
    } catch (err: any) {
      alert(err.response.data.detail);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" name="username" className="form-control" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
