import React, { useState } from "react";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Footer from "@/components/Footer";
import Score from "@/components/Score";
import { useQuestions } from "@/hooks/useQuestions";

function Home() {
  const { questions, allQuestions, question, getQuestion, setAllQuestions } =
    useQuestions();

  const [answer, setanswer] = useState<any>();
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

  console.log(count, questions?.quizQuestions?.length, allQuestions)

  return (
    <div className="container my-5">
      <Score score={score} />

      {allQuestions?.length > 0 && (
        <>
          <h5 className="text-white text-center mb-3">Question</h5>

          <form action="" onSubmit={onSubmit} className="text-center my-4">
            <Question question={question} />
            <div className="my-4">
              <h5 className="text-white">Choose an answer below</h5>
              {question?.answers?.map((answer: any) => (
                <Answer
                  key={answer?.value}
                  answer={answer}
                  setanswer={setanswer}
                />
              ))}
            </div>
            <button
              type="submit"
              className="btn btn-light btn-lg"
              disabled={!answer}
            >
              Submit
            </button>
          </form>
        </>
      )}

      {count === questions?.quizQuestions?.length && (
        <>
          <h5 className="text-center text-white">
            You have scored {score} out of{" "}
            {questions?.quizQuestions?.length * 10}
          </h5>
          <div className="d-flex justify-content-center">
            <button onClick={handleReset} className="btn btn-success btn-lg">
              Done, start again
            </button>
          </div>
        </>
      )}
      <Footer count={count} questionsCount={questions?.quizQuestions?.length} />
    </div>
  );
}

export default Home;
