import React from "react";

interface ScoreProp {
  score: number;
}

function Score({ score }: ScoreProp) {
  return (
    <div className="d-flex justify-content-end">
      <p className="d-flex align-items-center"><span className="text-white h4 me-2">Score</span>  <span className="btn btn-light rouned-pill">{score}</span></p>
    </div>
  );
}

export default Score;
