import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="container">
      <Link to="/personage" name={name} setName={setName} className="menu">
        Personage
      </Link>
      <Link to="/comics" className="menu">
        Comics
      </Link>
      <Link to="/favoris" className="menu">
        Favoris
      </Link>
    </div>
  );
};
export default Home;
