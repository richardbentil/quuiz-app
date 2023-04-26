import { useCallback, useEffect, useState } from "react";

import questions from "../questions.json";

interface QuestionProps {
  id: number;
  question: string;
  answers: any[];
  correctAnswer: string;
}

export const useQuestions = () => {
  const [allQuestions, setAllQuestions] = useState<any>([]);

  useEffect(() => {
    setAllQuestions(questions?.quizQuestions);
  }, []);

  const [question, setquestion] = useState<QuestionProps>({
    id: 0,
    question: "",
    answers: [],
    correctAnswer: "",
  });

  const getQuestion = useCallback(() => {
    if (allQuestions?.length > 0) {
      const index = Math.floor(Math.random() * allQuestions.length);
      const quest: QuestionProps = allQuestions[index];

      if (quest?.id) {
        setquestion(quest);
        //remove the selected question from the list of questions
        setAllQuestions(allQuestions?.filter((q: any) => q.id !== quest.id));
      }
    } else {
      setquestion({ id: 0, question: "", answers: [], correctAnswer: "" });
    }
    console.log(allQuestions?.length);
  }, [allQuestions]);

  //set random questions
  useEffect(() => {
    getQuestion();
  }, []);

  return { questions, allQuestions, question, getQuestion, setAllQuestions };
};
