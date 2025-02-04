import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <Link to="/personage">Personage</Link>
      <Link to="/comics">Comics</Link>
      <Link to="/favoris">Favoris</Link>
    </div>
  );
};
export default Home;
