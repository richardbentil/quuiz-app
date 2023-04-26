import { useCallback, useEffect, useState } from "react";

import questions from "../questions.json";

interface QuestionProps {
  id: number;
  question: string;
  answers: any[];
  correctAnswer: string;
}

export const useQuestions = () => {
  const [question, setquestion] = useState<QuestionProps>({
    id: 0,
    question: "",
    answers: [],
    correctAnswer: "",
  });
  const [allQuestions, setAllQuestions] = useState<any>(
    questions?.quizQuestions
  );

  const getQuestion = () => {
    const index = Math.floor(Math.random() * allQuestions.length);
    const quest: QuestionProps = allQuestions[index];

    console.log(allQuestions);

    if (quest?.id) {
      setquestion(quest);
      //remove the selected question from the list of questions
      setAllQuestions(allQuestions?.filter((q: any) => q.id !== quest.id));
    }

    console.log(allQuestions?.length);
  };
  useEffect(() => {
    getQuestion();
  }, []);

  return { questions, allQuestions, question, getQuestion, setAllQuestions };
};
