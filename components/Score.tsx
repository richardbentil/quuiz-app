import React from "react";

interface ScoreProp {
  score: number;
}

function Score({ score }: ScoreProp) {
  return (
    <>
      <p>Score {score}</p>
    </>
  );
}

export default Score;
