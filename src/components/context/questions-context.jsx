import { createContext, useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is the name of the capital city of Nigeria?",
    option1: "Kaduna",
    option2: "Lagos",
    option3: "Abuja",
    option4: "Calabar",
    point: 2,
    answer: "Abuja",
  },
  {
    id: 2,
    question: "What is the name of the former capital city of Nigeria?",
    option1: "Kaduna",
    option2: "Lagos",
    option3: "Abuja",
    option4: "Calabar",
    point: 2,
    answer: "Lagos",
  },
  {
    id: 3,
    question: "What is the name of my girlfriend?",
    option1: "Abigail",
    option2: "Joy",
    option3: "Hannatu",
    option4: "Florence",
    point: 1,
    answer: "Abigail",
  },
  {
    id: 4,
    question: "How old am I?",
    option1: "23",
    option2: "22",
    option3: "21",
    option4: "26",
    point: 1,
    answer: "26",
  },
  {
    id: 5,
    question: "How old is Abigail?",
    option1: "23",
    option2: "24",
    option3: "21",
    option4: "26",
    point: 2,
    answer: "24",
  },
];

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [ques] = useState(questions);
  const [answers, setAnswers] = useState([]);

  const value = { ques, setAnswers, answers };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};
