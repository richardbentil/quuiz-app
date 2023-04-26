import React from "react";

interface AnswerProp {
  answer: { text: string; value: string };
  setanswer: (answer: string) => void;
}

function Answer({ answer: { text, value }, setanswer }: AnswerProp) {
  return (
    <>
      <div className="form-check form-check-inline">
        <input
          type="radio"
          name="answers"
          id={value}
          value={text}
          onChange={(e) => setanswer(e.target.value)}
          hidden
        />
        <label htmlFor={value} className="mb-0">
          <div className="card bg-light border-0 bg-opacity-10">
            <div className="card-body">{value}</div>
          </div>
        </label>
      </div>
    </>
  );
}

export default Answer;
