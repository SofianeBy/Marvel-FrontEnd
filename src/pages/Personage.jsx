import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Personage = () => {
  const [counter, setCounter] = useState(1);
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
        <h1 className="container">Personage</h1>
      </nav>

      <div className="test">
        {data.results.map((value, index) => {
          console.log(value);
          return (
            <>
              <section key={index}>
                <Link key={value._id} to={`/personage/${value._id}`}></Link>
                <div className="personage">
                  <div>{value.name}</div>

                  {value.thumbnail.path ===
                  (
                    <Link key={value._id} to={`/personage/${value._id}`}>
                      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"{" "}
                    </Link>
                  ) ? (
                    <div className="noimg"> </div>
                  ) : (
                    <Link key={value._id} to={`/personage/${value._id}`}>
                      <img
                        src={
                          value.thumbnail.path + "." + value.thumbnail.extension
                        }
                        alt={value.name}
                      />
                    </Link>
                  )}
                  <Link key={value._id} to={`/personage/${value._id}`}>
                    <div className="absolute">
                      <i class="fa-regular fa-heart icon"></i>
                    </div>
                  </Link>

                  {value.description && (
                    <p className="description">{value.description}</p>
                  )}
                </div>
              </section>
            </>
          );
        })}
      </div>
      <div className="pagination">
        <div>
          {counter > 1 && (
            <button
              onClick={() => {
                setCounter((prev) => {
                  return prev - 1;
                });
              }}
            >
              -
            </button>
          )}
        </div>
        <p>{counter}</p>
        <p
          onClick={(event) => {
            setCounter(counter + 1);
          }}
        ></p>
        <div>
          {counter < 10 && (
            <button
              onClick={() => {
                setCounter((prev) => {
                  return prev + 1;
                });
              }}
            >
              +
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Personage;
