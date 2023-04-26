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

    setscore((prevScore: number) => prevScore + 10);
  };

  return (
    <div>
      <div>
        <p>Question</p>
        <form action="" onSubmit={onSubmit}>
          {question?.id}
          <label htmlFor="me">
            <input
              type="radio"
              name="answers"
              id="me"
              value={"me"}
              onChange={(e) => setanswer(e.target.value)}
            />
             {question?.question}
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
