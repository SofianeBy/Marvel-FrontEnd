import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const tab = [];

  return (
    <>
      <div className="container">
        <Link to="/personage">Personage</Link>
        <Link to="/comics">Comics</Link>
        <Link to="/favoris">Favoris</Link>
      </div>
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="quel personage cherchez-vous ?"
      />
    </>
  );
};
export default Home;
