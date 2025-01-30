import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favoris from "./pages/Favoris";
import Comics from "./pages/Comics";
import Header from "./compenents/Header";

import Personage from "./pages/Personage";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Home path="/" />
        <Routes>
          <Route path="/personage" element={<Personage />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
