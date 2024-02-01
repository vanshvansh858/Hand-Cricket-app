import { useState } from "react";
import { v4 as uuid } from "uuid";
function PvsC() {
  function genrateRuns() {
    const run = Math.floor(Math.random() * 6) + 1;
    return run;
  }
  const [playerRuns, setPlayerRuns] = useState(0);
  const [computerRuns, setComputerRuns] = useState(0);
  const [nextBall, setNextBall] = useState(0);
  const [nextBall2, setNextBall2] = useState(0);
  const [computerGenerated, setComputerGenerated] = useState(genrateRuns());
  const [balls, setBalls] = useState([
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
  ]);
  const [balls2, setBalls2] = useState([
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
    { id: uuid(), run: 0 },
  ]);
  function handleComputer() {
    const updatedBalls = balls2.map((ball, index) => {
      if (ball.run === 0 && index === nextBall2) {
        return { ...ball, run: computerGenerated };
      }
      return ball;
    });
    setBalls2(updatedBalls);
    setComputerRuns((cr) => cr + computerGenerated);
    setNextBall2((ball) => {
      return ball + 1;
    });
    setComputerGenerated(genrateRuns());
  }

  function handleRun(increment) {
    const updatedBalls = balls.map((ball, index) => {
      if (ball.run === 0 && index === nextBall) {
        return { ...ball, run: increment };
      }
      return ball;
    });
    handleComputer();
    setBalls(updatedBalls);
    setPlayerRuns((pr) => pr + increment);
    setNextBall((ball) => {
      return ball + 1;
    });
  }

  function handle1() {
    handleRun(1);
  }
  function handle2() {
    handleRun(2);
  }
  function handle3() {
    handleRun(3);
  }
  function handle4() {
    handleRun(4);
  }
  function handle5() {
    handleRun(5);
  }
  function handle6() {
    handleRun(6);
  }
  return (
    <div>
      <div className="PvsC-parent-div">
        <h1 className="player-name">PlayerName</h1>
        <div className="input-balls">
          {balls.map((val) => {
            return (
              <div className="balls" key={val.id}>
                {val.run}
              </div>
            );
          })}
        </div>
        <div className="score">
          <div className="total-run">Total Runs = {playerRuns}</div>
          <div className="total-cpu">Total Runs = {computerRuns}</div>
        </div>
        <div className="input-balls-2">
          {balls2.map((val) => {
            return (
              <div className="balls-2" key={val.id}>
                {val.run}
              </div>
            );
          })}
        </div>
        <h1 className="computer">Computer</h1>
      </div>
      <div className="div-run-buttons">
        <div className="run-buttons-layout">
          <button onClick={handle1} className="run-button">
            1
          </button>
          <button onClick={handle2} className="run-button">
            2
          </button>
          <button onClick={handle3} className="run-button">
            3
          </button>
          <button onClick={handle4} className="run-button">
            4
          </button>
          <button onClick={handle5} className="run-button">
            5
          </button>
          <button onClick={handle6} className="run-button">
            6
          </button>
        </div>
      </div>
    </div>
  );
}

export default PvsC;
