import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/questions-context";

import {
  MainContainer,
  Container,
  HeaderDiv,
  MainHeader,
  ButtonDiv,
  PreviousButtonDiv,
  PreviousButton,
  NextButtonDiv,
  NextButton,
  QuestionsContainer,
  OptionsDiv,
  SubmitButtonDiv,
  SubmitButton,
  OptionsParagraph,
  OptionsParagraphSpan,
} from "./questions.styles";

const filterOptions = (answer, id) => {
  const option = answer.filter((item) => {
    return item.id === id;
  });
  return option[0];
};

const checkAnswer = (arrOfObjs, question, option) => {
  const answerChosen = arrOfObjs.find(({ id }) => {
    return id === question.id;
  });
  if (answerChosen) {
    const mapped = arrOfObjs.map((item) => {
      return answerChosen.id === item.id
        ? { ...question, chosenAnswer: option }
        : item;
    });
    return mapped;
  }
  return [...arrOfObjs, { ...question, chosenAnswer: option }];
};

const Questions = () => {
  const { ques, setAnswers } = useContext(QuestionContext);

  const [num, setNum] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [pToggle, setPToggle] = useState(true);
  const [answer, setAnswer] = useState(ques);

  const nextHandler = () => {
    setNum(num + 1);
  };

  const previousHandler = () => {
    setNum(num - 1);
  };

  const optionHandler = (e) => {
    setAnswer(checkAnswer(answer, questionx, e.target.innerText));
  };

  let navigate = useNavigate();

  const submitHandler = () => {
    setAnswers(answer);
    navigate("/summary", { replace: true });
  };

  useEffect(() => {
    if (num === ques.length - 1) setToggle(false);
    if (num !== ques.length - 1) setToggle(true);
    if (num === 0) setPToggle(false);
    if (num !== 0) setPToggle(true);
  }, [num]);

  const questionx = ques[num];

  const { id, question, option1, option2, option3, option4 } = questionx;

  const option = filterOptions(answer, id);

  return (
    <MainContainer>
      <Container>
        <HeaderDiv>
          <MainHeader>
            Question {id} of {ques.length}
          </MainHeader>
        </HeaderDiv>
        <QuestionsContainer>
          <p>{question}</p>
          <OptionsDiv>
            <OptionsParagraph onClick={optionHandler}>
              <OptionsParagraphSpan
                style={{
                  backgroundColor:
                    option?.chosenAnswer === option1 && option?.id === id
                      ? "blue"
                      : "white",
                }}
              ></OptionsParagraphSpan>{" "}
              {option1}
            </OptionsParagraph>
            <OptionsParagraph onClick={optionHandler}>
              <OptionsParagraphSpan
                style={{
                  backgroundColor:
                    option?.chosenAnswer === option2 && option?.id === id
                      ? "blue"
                      : "white",
                }}
              ></OptionsParagraphSpan>{" "}
              {option2}
            </OptionsParagraph>
            <OptionsParagraph onClick={optionHandler}>
              <OptionsParagraphSpan
                style={{
                  backgroundColor:
                    option?.chosenAnswer === option3 && option?.id === id
                      ? "blue"
                      : "white",
                }}
              ></OptionsParagraphSpan>{" "}
              {option3}
            </OptionsParagraph>
            <OptionsParagraph onClick={optionHandler}>
              <OptionsParagraphSpan
                style={{
                  backgroundColor:
                    option?.chosenAnswer === option4 && option?.id === id
                      ? "blue"
                      : "white",
                }}
              ></OptionsParagraphSpan>{" "}
              {option4}
            </OptionsParagraph>
          </OptionsDiv>
        </QuestionsContainer>
        <ButtonDiv>
          <PreviousButtonDiv>
            {pToggle && (
              <PreviousButton onClick={previousHandler}>
                Previous
              </PreviousButton>
            )}
          </PreviousButtonDiv>
          <NextButtonDiv>
            {toggle && <NextButton onClick={nextHandler}>Next</NextButton>}
          </NextButtonDiv>
          <SubmitButtonDiv>
            {!toggle && (
              <SubmitButton onClick={submitHandler}>Submit</SubmitButton>
            )}
          </SubmitButtonDiv>
        </ButtonDiv>
      </Container>
    </MainContainer>
  );
};

export default Questions;
