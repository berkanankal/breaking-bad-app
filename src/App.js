import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Quotes from "./components/Quotes";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Details />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
};
export default App;
