import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

const Comics = () => {
  const plus = ">";
  const moins = "<";
  const [counter, setCounter] = useState(1);
  const [tab, setTab] = useState([]);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const skip = (counter - 1) * 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9m6btwtmk2gq.code.run/comics?skip=${skip}&title=${title}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [skip, title]);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <>
      <h1 className="container">Comics</h1>

      <div className="container">
        <input
          placeholder="Quel comics cherchez-vous ? "
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
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
          {counter < 474 && (
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
      <div className="container-personage">
        {data.results.map((value, index) => {
          return (
            <section key={value._id} className="personage description">
              <Link to={`/comics/${value._id}`} key={value._id}>
                <div className="title">{value.title}</div>
              </Link>

              <div>
                <Link to={`/comics/${value._id}`}>
                  {value.thumbnail.path ===
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                    <div className="noimg"></div>
                  ) : (
                    <img
                      src={
                        value.thumbnail.path + "." + value.thumbnail.extension
                      }
                      alt={value.title}
                    />
                  )}
                </Link>
              </div>
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

              <Link to={`/comics/${value._id}`}>
                <p className="">{index}</p>
                {value.description && <p className="">{value.description}</p>}
              </Link>
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
          {counter < 474 && (
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

export default Comics;
