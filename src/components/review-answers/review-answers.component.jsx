import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../context/questions-context";

import {
  AnswerContainer,
  Button,
  ButtonDiv,
  Container,
  CorrectAnswer,
  MainDiv,
  Option,
  OptionsDiv,
  OptionSpan,
  QuestionParagraph,
} from "./review-answers.styles";

const ReviewAnswers = () => {
  const { answers } = useContext(QuestionContext);

  let navigate = useNavigate();

  const homeBtnHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <MainDiv>
      <Container>
        {answers.map(
          ({
            question,
            answer,
            option1,
            option2,
            option3,
            option4,
            id,
            chosenAnswer,
          }) => {
            return (
              <AnswerContainer
                key={id}
                style={{
                  backgroundColor: !chosenAnswer
                    ? "#ffe5d0"
                    : chosenAnswer === answer
                    ? "#51cf66"
                    : "#ff8787",
                }}
              >
                <QuestionParagraph>
                  Question {id}. {question}?
                </QuestionParagraph>
                <OptionsDiv>
                  <Option>
                    <OptionSpan
                      style={{
                        backgroundColor:
                          chosenAnswer === option1 ? "blue" : "white",
                      }}
                    ></OptionSpan>
                    <span>{option1}</span>
                  </Option>
                  <Option>
                    <OptionSpan
                      style={{
                        backgroundColor:
                          chosenAnswer === option2 ? "blue" : "white",
                      }}
                    ></OptionSpan>
                    <span>{option2}</span>
                  </Option>
                  <Option>
                    <OptionSpan
                      style={{
                        backgroundColor:
                          chosenAnswer === option3 ? "blue" : "white",
                      }}
                    ></OptionSpan>
                    <span>{option3}</span>
                  </Option>
                  <Option>
                    <OptionSpan
                      style={{
                        backgroundColor:
                          chosenAnswer === option4 ? "blue" : "white",
                      }}
                    ></OptionSpan>
                    <span>{option4}</span>
                  </Option>
                  <CorrectAnswer>
                    Correct answer: <br />
                    {answer}
                  </CorrectAnswer>
                </OptionsDiv>
              </AnswerContainer>
            );
          }
        )}
      </Container>
      <ButtonDiv>
        <Button onClick={homeBtnHandler}>Go to Home</Button>
      </ButtonDiv>
    </MainDiv>
  );
};

export default ReviewAnswers;
