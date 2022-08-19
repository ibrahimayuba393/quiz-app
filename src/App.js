import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.components";
import Questions from "./components/questions/questions.component";
import Summary from "./components/summary/summary.components";
import ReviewAnswers from "./components/review-answers/review-answers.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="questions" element={<Questions />} />
      <Route path="summary" element={<Summary />} />
      <Route path="review-answers" element={<ReviewAnswers />} />
    </Routes>
  );
}

export default App;
