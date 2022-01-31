import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Detail from "./components/Detail/Detail";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
