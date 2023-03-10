import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");

  const studentHandler = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      alert("please login");
      return;
    }
    const usere = users.filter(
      (user) => user.email === email && user.password === password
    );

    if (usere.length === 1) {
      navigate("/Student-dashboard");
    } else {
      setError("Please Login correct username and password");
    }
  };

  return (
    <div className="student-login-container">
      <form className="student-form" onSubmit={studentHandler}>
        <h3>Student Login</h3>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>{err}</p>
        <Link to="/student-signup">
          <p>create account?</p>
        </Link>
      </form>
    </div>
  );
};

export default StudentLogin;
