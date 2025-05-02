import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <h1 className="text-primary">Welcome to AuthSystem</h1>
           </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
