import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">All Players </Link>
          <Link to="/navbar">Nav Bar </Link>
          <Link to="/newPlayerForm">New Player Form</Link>
        </div>
        <div id="main-section" className="home">
          <Routes>
            <Route path="/" element={<AllPlayers />}></Route>
            <Route path="/navbar" element={<NavBar />}></Route>
            <Route path="/newPlayerForm" element={<NewPlayerForm />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
