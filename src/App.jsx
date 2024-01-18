import Home from "./HomePage/Home";
import PvsC from "./PlayingOptions/PlayerVsComputer/PvsC";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/PlayingOptions/PlayerVsComputer/PvsC"
          element={<PvsC />}
        />
      </Routes>
    </Router>
  );
}

export default App;
