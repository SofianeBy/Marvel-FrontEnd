import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import FavorisComics from "./compenents/FavorisComics";
import Favoris from "./pages/Favoris";
import Comics from "./pages/Comics";
import Header from "./compenents/Header";
import PersonageId from "./pages/Personage-id";
import Personage from "./pages/Personage";
import ComicsId from "./pages/Comics-id";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Home path="/" />

        <Routes>
          <Route path="/favorisComics" element={<FavorisComics />} />
          <Route path="/personage" element={<Personage />} />
          <Route path="/personage/:id" element={<PersonageId />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:id" element={<ComicsId />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
