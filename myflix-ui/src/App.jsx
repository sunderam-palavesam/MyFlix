
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import PlayerNew from "./pages/PlayerNew";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";

export default function App() {
  return (
   
      <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/player1" element={<PlayerNew />} />
      <Route exact path="/" element={<Netflix />} />
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/movies" element={<MoviePage />} />
      </Routes>
      </BrowserRouter>
  
  );
}
