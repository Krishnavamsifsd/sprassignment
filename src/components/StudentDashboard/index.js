import { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import "./LogoutButton.css";

const StudentDashboard = () => {
  const [inputs, setInputs] = useState([]);
  const [outputs, setOutputs] = useState([]);

  useEffect(() => {
    const savedInputs = JSON.parse(localStorage.getItem("inputs")) || [];
    const savedOutputs = JSON.parse(localStorage.getItem("outputs")) || [];
    setInputs(savedInputs);
    setOutputs(savedOutputs);
  }, []);

  const handleOutputSubmit = (event, index) => {
    event.preventDefault();
    const output = event.target.elements.output.value;
    const newOutputs = [...outputs];
    newOutputs[index] = output;
    setOutputs(newOutputs);
    localStorage.setItem("outputs", JSON.stringify(newOutputs));
  };

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < inputs.length; i += 2) {
      const input1 = inputs[i];
      const input2 = inputs[i + 1];
      const output = outputs[i / 2];
      cards.push(
        <div className="card" key={i}>
          <h2>Question {i / 2 + 1}</h2>
          <p>
            Input 1: {input1}
            <br />
            Input 2: {input2}
            <br />
            Output: {output || "Not yet submitted"}
          </p>
          <form onSubmit={(event) => handleOutputSubmit(event, i / 2)}>
            <label>
              Output:
              <input type="text" name="output" required />
            </label>
            <button type="submit">Submit Output</button>
          </form>
        </div>
      );
    }
    return cards;
  };

  return (
    <>
      <h1>Student Dashboard</h1>
      <center>
        <Link to="/" className="logout-button">
          <i className="fa fa-sign-out pull-right"></i> Log Out
        </Link>
      </center>
      <div className="container">
        <br />
        <br />
        {renderCards()}
      </div>
    </>
  );
};

export default StudentDashboard;
