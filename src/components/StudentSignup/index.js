import { Link } from "react-router-dom";
import { useState } from "react";

import "./index.css";

const StudentSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [renterPassword, setRenterPassword] = useState("");
  const [err, setErr] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !renterPassword || password !== renterPassword) {
      setErr("Please enter all inputs correct");
    } else {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.filter((user) => user.email === email);
      if (user.length === 1) {
        setErr("Username already exist.Please try another name");
      } else {
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  };

  return (
    <div className="student-signup-container">
      <form className="student-signup-form" onSubmit={onSubmitHandler}>
        <h3>Student Signup</h3>
        <input
          type="text"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password"
        />
        <input
          type="text"
          value={renterPassword}
          onChange={(e) => setRenterPassword(e.target.value)}
          placeholder="re-enter password"
        />
        <button type="submit">Signup</button>
        {<p>{err}</p>}
        <Link to="/student-login">
          <p>Already have account?</p>
        </Link>
      </form>
    </div>
  );
};

export default StudentSignup;
