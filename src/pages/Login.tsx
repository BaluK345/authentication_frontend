import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/login', { username, password });
      alert("Login successful!");
    } catch (err: any) {
      alert(err.response.data.detail);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary bg-opacity-10">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
