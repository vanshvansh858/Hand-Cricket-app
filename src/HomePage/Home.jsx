import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  function handlePvsC() {
    navigate("/PlayingOptions/PlayerVsComputer/PvsC");
  }
  return (
    <div className="body">
      <div className="parent-div">
        <button className="parent-btn">Home</button>
        <h1 className="heading">Hand Cricket ✌️</h1>
        <button className="parent-btn">About</button>
        <button className="parent-btn">Contact Us</button>
      </div>
      <div className="options">
        <button className="primary-btn">Play Online</button>
        <button className="primary-btn">Player vs Player</button>
        <button onClick={handlePvsC} className="primary-btn">
          Player vs Computer
        </button>
      </div>
    </div>
  );
}

export default Home;
