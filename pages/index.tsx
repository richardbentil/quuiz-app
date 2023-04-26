import React, { useState } from "react";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Footer from "@/components/Footer";
import Score from "@/components/Score";
import { useQuestions } from "@/hooks/useQuestions";

function Home() {
  const { questions, allQuestions, question, getQuestion, setAllQuestions } =
    useQuestions();

  const [answer, setanswer] = useState("");
  const [score, setscore] = useState(0);
  const [count, setCount] = useState(0);

  const onSubmit = (e: any) => {
    e.preventDefault();

    //check if the answer matches the correct answer from the current question
    const isCorrect = answer === question?.correctAnswer;

    if (isCorrect) {
      setscore((prevScore: number) => prevScore + 10);
    }

    //increase count
    setCount((prevCount) => prevCount + 1);
    //change question when the answer is submitted
    getQuestion();
  };

  const handleReset = () => {
    setAllQuestions(questions?.quizQuestions);
    setscore(0);
  };

  return (
    <>
        <Score score={score} />

        {allQuestions?.length + 1 > 0 && (
          <>
            <p>Question</p>

            <form action="" onSubmit={onSubmit}>
              <Question question={question} />
              <div>
                {question?.answers?.map((answer: any) => (
                  <Answer
                    key={answer?.value}
                    answer={answer}
                    setanswer={setanswer}
                  />
                ))}
              </div>
              <button type="submit">Submit</button>
            </form>
          </>
        )}

        {allQuestions?.length + 1 == questions?.quizQuestions?.length && (
          <>
            <p>
              You have scored {score} out of{" "}
              {questions?.quizQuestions?.length * 10}
            </p>
            <button onClick={handleReset}>Done, start again</button>
          </>
        )}
        <Footer
          count={count}
          questionsCount={questions?.quizQuestions?.length}
        />
    </>
  );
}

export default Home;
