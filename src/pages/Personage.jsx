import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Personage = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/personage");
        console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <>
      <nav className="search">
        <h1>Personage</h1>
      </nav>

      <div className="test">
        {data.results.map((value, index) => {
          console.log(value);
          return (
            <section key={index}>
              <Link key={value._id} to={`/personage/${value._id}`}>
                <div className="personage">
                  <div>{value.name}</div>
                  {value.thumbnail.path ===
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                    <div className="noimg"> </div>
                  ) : (
                    <img
                      src={
                        value.thumbnail.path + "." + value.thumbnail.extension
                      }
                      alt={value.name}
                    />
                  )}
                  {value.description && (
                    <p className="description">{value.description}</p>
                  )}
                </div>
              </Link>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Personage;
