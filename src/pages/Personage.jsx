import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Personage = () => {
  const plus = ">";
  const moins = "<";
  const [counter, setCounter] = useState(1);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const skip = (counter - 1) * 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/personage?skip=${skip}&name=${name}`
        );
        console.log(response.data.results.length);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [skip, name]);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <>
      <nav className="search">
        <h1 className="container">Personage</h1>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
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
                <a href="#top">{moins}</a>
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
            {counter < 15 && (
              <button
                onClick={() => {
                  setCounter((prev) => {
                    return prev + 1;
                  });
                }}
              >
                <a href="#top">{plus}</a>
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="test">
        {data.results.map((value, index) => {
          return (
            <section key={value._id}>
              <div className="personage">
                <div>{value.name}</div>

                {value.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                  <div className="noimg"> </div>
                ) : (
                  <Link to={`/personage/${value._id}`}>
                    <img
                      src={
                        value.thumbnail.path + "." + value.thumbnail.extension
                      }
                      alt={value.name}
                    />
                  </Link>
                )}

                <div
                  className="absolute"
                  key={value._id}
                  onClick={(event) => {
                    console.log(event);
                  }}
                >
                  Favoris
                </div>

                {value.description && (
                  <p className="description">{value.description}</p>
                )}
              </div>
            </section>
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
              <a href="#top">{moins}</a>
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
          {counter < 15 && (
            <button
              onClick={() => {
                setCounter((prev) => {
                  return prev + 1;
                });
              }}
            >
              <a href="#top">{plus}</a>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Personage;
