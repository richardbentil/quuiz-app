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
        />
        <label htmlFor={value}>{value}</label>
      </div>
    </>
  );
}

export default Answer;
