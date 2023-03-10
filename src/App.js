import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import StudentLogin from "./components/StudentLogin";
import MasterLogin from "./components/MasterLogin";
import StudentSignup from "./components/StudentSignup";
import MasterSignup from "./components/MasterSignup";
import MasterDashboard from "./components/MasterDashboard";
import StudentDashboard from "./components/StudentDashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/student-login" element={<StudentLogin />} />
        <Route exact path="/master-login" element={<MasterLogin />} />
        <Route exact path="/student-signup" element={<StudentSignup />} />
        <Route exact path="/master-signup" element={<MasterSignup />} />
        <Route exact path="/master-dashboard" element={<MasterDashboard />} />
        <Route exact path="/Student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
