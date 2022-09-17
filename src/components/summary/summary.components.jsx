import { useContext } from "react";
import { QuestionContext } from "../context/questions-context";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/completed.jpg";

import {
  Container,
  CorrectAnswerDiv,
  CorrectAnswerHeading,
  CorrectAnswersNo,
  ExitButton,
  Image,
  ImageDiv,
  IncorrectAnswersDiv,
  IncorrectAnswersHeading,
  IncorrectAnswersNo,
  MainContainer,
  ReviewAnswersButton,
  SubContainer,
  SummaryBody,
  SummaryButtonDiv,
  SummaryContainer,
  SummaryHeading,
  TotalCompletedDiv,
  TotalCompletedHeading,
  TotalCompletedNo,
  UnansweredDiv,
  UnansweredHeading,
  UnansweredNo,
} from "./summary.styles";

const checkAnswers = (arrOfObjs) => {
  const filtered = arrOfObjs.filter((item) => {
    return item.chosenAnswer === item.answer;
  });
  // return filtered.reduce((acc, { point }) => {
  //   return acc + point;
  // }, 0);
  return filtered;
};

const allUnaswered = (arrOfObjs) => {
  const filtered = arrOfObjs.filter((item) => {
    return !item.chosenAnswer;
  });
  return filtered;
};

const allAtempted = (arrofObJs) => {
  const filtered = arrofObJs.filter((item) => {
    return item.chosenAnswer;
  });
  return filtered;
};

const Summary = () => {
  const { answers } = useContext(QuestionContext);

  const attemptedQuestions = allAtempted(answers).length;
  const correctAnswers = checkAnswers(answers).length;
  const unAnswered = allUnaswered(answers).length;
  const incorrectAnswers = attemptedQuestions - correctAnswers;

  let navigate = useNavigate();

  const exitHandler = () => {
    navigate("/", { replace: true });
  };

  const reviewAnswerHandler = () => {
    navigate("/review-answers", { replace: true });
  };

  return (
    <MainContainer>
      <Container>
        <SubContainer>
          <ImageDiv>
            <Image src={pic} />
          </ImageDiv>
          <SummaryContainer>
            <SummaryHeading>
              You've successfully <br />
              completed the quiz
            </SummaryHeading>
            <SummaryBody>
              <CorrectAnswerDiv>
                <CorrectAnswerHeading>
                  Total attempted questions:
                </CorrectAnswerHeading>
                <CorrectAnswersNo>{attemptedQuestions}</CorrectAnswersNo>
              </CorrectAnswerDiv>
              <TotalCompletedDiv>
                <TotalCompletedHeading>Correct answers:</TotalCompletedHeading>
                <TotalCompletedNo>{correctAnswers}</TotalCompletedNo>
              </TotalCompletedDiv>
              <UnansweredDiv>
                <UnansweredHeading>Unanswered:</UnansweredHeading>
                <UnansweredNo>{unAnswered}</UnansweredNo>
              </UnansweredDiv>
              <IncorrectAnswersDiv>
                <IncorrectAnswersHeading>
                  Incorrect answers:
                </IncorrectAnswersHeading>
                <IncorrectAnswersNo>{incorrectAnswers}</IncorrectAnswersNo>
              </IncorrectAnswersDiv>
            </SummaryBody>
          </SummaryContainer>
        </SubContainer>
        <SummaryButtonDiv>
          <div>
            <ReviewAnswersButton onClick={reviewAnswerHandler}>
              Review answers
            </ReviewAnswersButton>
          </div>
          <div>
            <ExitButton onClick={exitHandler}>exit</ExitButton>
          </div>
        </SummaryButtonDiv>
      </Container>
    </MainContainer>
  );
};

export default Summary;

