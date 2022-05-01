import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TeamsPage from "./routes/TeamsPage";
import PlayersPage from "./routes/PlayersPage";
import CoachesPage from "./routes/CoachesPage";
import Navbar from "./components/Navbar";
import LeaguesPage from "./routes/LeaguesPage";
import CreatePlayer from "./routes/CreatePlayer";
import CreateTeam from "./routes/CreateTeam";
import { ToastContainer } from "react-toastify";
import CreateCoach from "./routes/CreateCoach";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="teams" element={<TeamsPage />} />
        <Route path="teams/create" element={<CreateTeam />} />
        <Route path="players" element={<PlayersPage />} />
        <Route path="players/create" element={<CreatePlayer />} />
        <Route path="coaches" element={<CoachesPage />} />
        <Route path="coaches/create" element={<CreateCoach />} />
        <Route path="leagues" element={<LeaguesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
