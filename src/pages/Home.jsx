import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Link to="/personage">Personage</Link>
      <Link to="/comics">Comics</Link>
      <Link to="/favoris">Favoris</Link>
    </div>
  );
};
export default Home;
