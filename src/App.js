import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
        <h1>Super Carlist</h1>
        <Link to="/">
          <ul>
            <li>Home</li>
          </ul>
        </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
