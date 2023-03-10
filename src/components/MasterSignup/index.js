import { Link } from "react-router-dom";
import { useState } from "react";

import "./index.css";

const MasterSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [renterPassword, setRenterPassword] = useState("");
  const [err, setError] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !renterPassword || password !== renterPassword) {
      setError("Please enter all inputs correct");
    } else {
      let masters = JSON.parse(localStorage.getItem("masters")) || [];
      const master = masters.filter((master) => master.email === email);
      console.log(masters);
      if (master.length === 1) {
        setError("Username already exist.Please try another name");
      } else {
        masters.push({ email, password });
        localStorage.setItem("masters", JSON.stringify(masters));
      }
    }
  };

  return (
    <div className="master-signup-container">
      <form className="master-signup-form " onSubmit={onSubmitHandler}>
        <h3>Master Signup</h3>
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
        <Link to="/master-login">
          <p>Already have account?</p>
        </Link>
      </form>
    </div>
  );
};

export default MasterSignup;
