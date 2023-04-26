import React from "react";

interface QuestionProp {
  question: { id: number; question: string };
}

function Question({ question: { id, question } }: QuestionProp) {
  return (
    <>
      <div className="d-flex justify-content-center text-center bg-light bg-opacity-50 rounded-4 p-4">
       <h4 className="me-2 rounded-circle mb-0">{id}.</h4> 
       <h4 className="mb-0">{question}</h4>
      </div>
    </>
  );
}

export default Question;
