import { createContext, useState } from "react";

const questions = [
  {
    id: 1,
    question: "What country has the highest life expectancy?",
    option1: "Singapore",
    option2: "USA",
    option3: "Hong Kong",
    option4: "Japan",
    answer: "Hong Kong",
  },
  {
    id: 2,
    question: "Who has won the most total Academy Awards?",
    option1: "Tom Hanks",
    option2: "Denzel Washington",
    option3: "Will Smith",
    option4: "Walt Disney",
    answer: "Walt Disney",
  },
  {
    id: 3,
    question: "What is the max length of a TikTok video?",
    option1: "40 seconds",
    option2: "60 seconds",
    option3: "30 seconds",
    option4: "50 seconds",
    answer: "60 seconds",
  },
  {
    id: 4,
    question: "What is the 4th letter of the Greek alphabet?",
    option1: "Delta",
    option2: "Alpha",
    option3: "Omega",
    option4: "Beta",
    answer: "Delta",
  },
  {
    id: 5,
    question: "Which planet has the most moons?",
    option1: "Venus",
    option2: "Saturn",
    option3: "Uranus",
    option4: "Jupiter",
    answer: "Saturn",
  },
  {
    id: 6,
    question: "What country has won the most World Cups?",
    option1: "Argentina",
    option2: "Brazil",
    option3: "Portugal",
    option4: "France",
    answer: "Brazil",
  },
  {
    id: 7,
    question: "How many bones do we have in an ear?",
    option1: "3",
    option2: "4",
    option3: "5",
    option4: "6",
    answer: "7",
  },
  {
    id: 8,
    question: "What software company is headquartered in Redmond, Washington?",
    option1: "Tesla",
    option2: "Microsoft",
    option3: "Google",
    option4: "Facebook",
    answer: "Microsoft",
  },
  {
    id: 9,
    question: "What is a group of crows called?",
    option1: "A paliament",
    option2: "A murder",
    option3: "A court",
    option4: "A herd",
    answer: "A murder",
  },
  {
    id: 10,
    question: "What is the highest mountain in Africa?",
    option1: "Mount Kenya",
    option2: "Mount Kilimanjaro",
    option3: "Mount Meru",
    option4: "Mawenzi",
    answer: "Mount Kilimanjaro",
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
