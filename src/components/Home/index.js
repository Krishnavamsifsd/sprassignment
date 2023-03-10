import { useNavigate } from "react-router-dom";
import "./index.css";
const Home = () => {
  const navigate = useNavigate();
  const onClickStBtn = () => {
    navigate("/student-login");
  };

  const onClickMtBtn = () => {
    navigate("/master-login");
  };

  return (
    <div className="home-container">
      <div className="home-sub-container">
        <button className="btn" type="button" onClick={onClickStBtn}>
          <p>Student</p>
          <img
            className="logo"
            src="https://tse3.mm.bing.net/th?id=OIP.A575752HdMXap9KrpIrleQHaKm&pid=Api&P=0"
            alt="student"
          />
        </button>
        <button className="btn" type="button" onClick={onClickMtBtn}>
          <p>Master</p>
          <img
            src="https://webstockreview.net/images/clipart-boy-person-16.png"
            alt="master"
            className="logo"
          />
        </button>
      </div>
    </div>
  );
};
export default Home;
