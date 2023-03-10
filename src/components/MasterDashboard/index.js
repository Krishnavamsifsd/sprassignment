import "./mdindex.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MasterDashboard = () => {
  const [inputs, setInputs] = useState([]);
  const [operations, setOperations] = useState([]);
  const [outputs, setOutputs] = useState([]);
  const [expectedoutputs, setexpectedoutput] = useState([]);

  useEffect(() => {
    const savedInputs = JSON.parse(localStorage.getItem("inputs")) || [];
    const savedOperations =
      JSON.parse(localStorage.getItem("operations")) || [];
    const savedOutputs = JSON.parse(localStorage.getItem("outputs")) || [];
    const savedexoutput =
      JSON.parse(localStorage.getItem("expectedoutputs")) || [];
    setInputs(savedInputs);
    setOperations(savedOperations);
    setOutputs(savedOutputs);
    setexpectedoutput(savedexoutput);
  }, []);

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const input1 = event.target.elements.input1.value;
    const operation = event.target.elements.operation.value;
    const input2 = event.target.elements.input2.value;
    const newInputs = [...inputs, input1, input2];
    const newOperations = [...operations, operation];
    let expectedOutput;
    if (operation === "+") {
      expectedOutput = Number(input1) + Number(input2);
    } else if (operation === "-") {
      expectedOutput = Number(input1) - Number(input2);
    } else if (operation === "*") {
      expectedOutput = Number(input1) * Number(input2);
    } else if (operation === "/") {
      expectedOutput = Number(input1) / Number(input2);
    }
    const newExpectedOutputs = [...expectedoutputs, expectedOutput];
    setInputs(newInputs);
    setOperations(newOperations);
    setOutputs([]);
    setexpectedoutput(newExpectedOutputs);
    localStorage.setItem("inputs", JSON.stringify(newInputs));
    localStorage.setItem("operations", JSON.stringify(newOperations));
    localStorage.setItem("expectedoutputs", JSON.stringify(newExpectedOutputs));
    event.target.reset();
  };

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < inputs.length; i += 2) {
      const input1 = inputs[i];
      const input2 = inputs[i + 1];
      const operation = operations[i / 2];
      const output = outputs[i / 2];
      let expectoutput = expectedoutputs[i / 2];

      cards.push(
        <div key={i} className="card">
          <h2>Question {i / 2 + 1}</h2>
          <p>
            <span className="card__label">Input 1 :</span> {input1}
            <br />
            <span className="card__label">Operation: </span> {operation}
            <br />
            <span className="card__label">Input 2 :</span> {input2}
            <br />
            <span className="card__label">Expected Output:</span> {expectoutput}
            <br />
            <span className="card__label">Student Output:</span> {output}
          </p>
        </div>
      );
    }
    return cards;
  };

  return (
    <>
      <h1>Master Dashboard</h1>

      <center>
        <Link to="/" className="logout-button">
          <i className="fa fa-sign-out pull-right"></i> Log Out
        </Link>
      </center>
      <div className="container">
        <br />
        <br />
        <center>
          <form onSubmit={handleInputSubmit} className="form">
            <label>
              Input 1:
              <input type="text" name="input1" required placeholder="Input 1" />
            </label>
            <label>
              Operation:
              <input
                type="text"
                name="operation"
                required
                placeholder=" + ,  - ,  * ,  / "
              />
            </label>
            <label>
              Input 2:
              <input type="text" name="input2" required placeholder="Input 2" />
            </label>
            <center>
              <button type="submit">Submit Inputs</button>
            </center>
          </form>
        </center>

        {renderCards()}
      </div>
    </>
  );
};

export default MasterDashboard;
