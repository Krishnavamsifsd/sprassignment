import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";
const MasterLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const masterHandler = (e) => {
    e.preventDefault();
    const masters = JSON.parse(localStorage.getItem("masters"));
    console.log(masters);
    if (!masters) {
      alert("please login");
      return;
    }
    const master = masters.filter(
      (master) => master.email === email && master.password === password
    );
    if (master.length === 1) {
      navigate("/master-dashboard");
    } else {
      console.log("failure");
    }
  };

  return (
    <div className="master-login-container">
      <form className="master-form" onSubmit={masterHandler}>
        <h3>Master Login</h3>
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
        <Link to="/master-signup">
          <p>create account?</p>
        </Link>
      </form>
    </div>
  );
};

export default MasterLogin;
