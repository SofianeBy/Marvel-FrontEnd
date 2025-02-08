import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Cookie from "js-cookie";

const Personage = () => {
  const plus = ">";
  const moins = "<";
  const [counter, setCounter] = useState(1);
  const [tab, setTab] = useState();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const skip = (counter - 1) * 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9m6btwtmk2gq.code.run/personage?skip=${skip}&name=${name}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [skip, name, tab]);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <>
      <nav className="search">
        <h1 className="container">Personage</h1>
        <div className="container">
          <input
            placeholder="Quel personage cherchez-vous ?"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
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
      </nav>

      <div className="container-personage">
        {data.results.map((value, index) => {
          return (
            <section key={value._id} className="description">
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
                    const newTAb = [...tab];
                    newTAb.push(value._id);
                    setTab(newTAb);

                    JSON.stingify(
                      Cookie.set("favoris", JSON.stringify(newTAb), {
                        expires: 7,
                      })
                    );
                  }}
                >
                  Favoris
                </div>

                {value.description && <p>{value.description}</p>}
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
