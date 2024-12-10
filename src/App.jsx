import { Routes, Route } from "react-router-dom";
import "./App.css";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <>
      <NavBar />
      <div id="container">
        <div id="main-section" className="home">
          <Routes>
            <Route path="/" element={<AllPlayers />}></Route>
            <Route path="/newPlayerForm" element={<NewPlayerForm />}></Route>
            <Route path="/:playerId" element={<SinglePlayer />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
