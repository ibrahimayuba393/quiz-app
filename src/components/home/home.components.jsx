import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuestionContext } from "../context/questions-context";

import {
  Container,
  SubContainer,
  ButtonContainer,
  Header,
  Button,
} from "./home.styles";

const Home = () => {
  let navigate = useNavigate();

  const handleNext = () => {
    navigate("/questions", { replace: true });
  };

  const { ques } = useContext(QuestionContext);

  return (
    <Container>
      <SubContainer>
        <Header>Welcome to the quiz</Header>
        <p>This quiz has {ques.length} questions</p>
        <ButtonContainer>
          <Button onClick={handleNext}>Start</Button>
        </ButtonContainer>
      </SubContainer>
    </Container>
  );
};

export default Home;
