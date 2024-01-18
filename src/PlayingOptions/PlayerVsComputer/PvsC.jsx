import { useState } from "react";
function PvsC() {
  const [run, setRun] = useState(0);
  return (
    <>
      <div className="PvsC-parent-div">
        <h1 className="player-name">PlayerName</h1>
        <div className="input-balls">
          <div className="balls">{run}</div>
          <div className="balls"></div>
          <div className="balls"></div>
          <div className="balls"></div>
          <div className="balls"></div>
          <div className="balls"></div>
        </div>
        <div className="score">
          <div className="total-run">Total Runs = {run}</div>
          <div className="total-cpu">Total Runs = {run}</div>
        </div>
        <div className="input-balls-2">
          <div className="balls-2">{run}</div>
          <div className="balls-2"></div>
          <div className="balls-2"></div>
          <div className="balls-2"></div>
          <div className="balls-2"></div>
          <div className="balls-2"></div>
        </div>
        <h1 className="computer">Computer</h1>
      </div>
    </>
  );
}

export default PvsC;
