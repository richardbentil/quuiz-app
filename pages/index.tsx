import React, { useEffect, useState } from "react";
import questions from "../questions.json";

interface QuestionProps {
  id: number;
  question: string;
  answers: any[];
  correctAnswer: string;
}

function Home() {
  const [question, setquestion] = useState<QuestionProps>({
    id: 0,
    question: "",
    answers: [],
    correctAnswer: "",
  });
  const [answer, setanswer] = useState("");
  const [score, setscore] = useState(0);

  //set random questions
  useEffect(() => {
    const index = Math.floor(Math.random() * questions?.quizQuestions.length);
    const quest: QuestionProps = questions?.quizQuestions[index];
    if (quest?.id) {
      setquestion(quest);
    }
    console.log(index, quest);
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(answer);

    //check if the answer matches the correct answer from the current question
    const isCorrect = answer === question?.correctAnswer;

    if (isCorrect) {
      setscore((prevScore: number) => prevScore + 10);
    }
  };

  return (
    <div>
      <div>
        <p>Question {score}</p>
        <form action="" onSubmit={onSubmit}>
          {question?.id}
          {question?.question}
          {question?.answers?.map((answer: any) => (
            <div key={answer?.value} className="form-check form-check-inline">
              <input
                type="radio"
                name="answers"
                id={answer?.value}
                value={answer?.text}
                onChange={(e) => setanswer(e.target.value)}
              />
              <label htmlFor={answer?.value}>{answer?.value}</label>
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
