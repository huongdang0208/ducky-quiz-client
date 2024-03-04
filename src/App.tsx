import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import QuizStepper from "./components/quizz/quiz-stepper";
import Quiz from "./components/quizz/quiz";
import QuizResult from "./components/quizz/quiz-result";
import GetAllQuiz from "./components/quizz/all-quizzes";
import AddQuestion from "./components/question/create-question";
import UpdateQuestion from "./components/question/update-question";
import Navbar from "./components/layout/nav-bar";
import Admin from "./components/admin";
import Footer from "./components/layout/footer";
import "./styles.scss";

function App() {
  return (
    <main className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-stepper" element={<QuizStepper />} />
          <Route path="/take-quiz" element={<Quiz />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/create-quiz" element={<AddQuestion />} />
          <Route path="/update-quiz/:id" element={<UpdateQuestion />} />
          <Route path="/all-quizzes" element={<GetAllQuiz />} />
          <Route path="/quiz-result" element={<QuizResult />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
