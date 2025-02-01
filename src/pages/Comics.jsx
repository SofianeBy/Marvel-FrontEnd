import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
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
      <h1 className="container">Comics</h1>
      <div className="test">
        {data.results.map((value, index) => {
          console.log(value);
          return (
            <section key={value._id} className="personage">
              <Link to={`/comics/${value._id}`} key={value._id}>
                <div className="title description">{value.title}</div>

                <div>
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
                </div>
                <p className="description">{index}</p>
                {value.description && (
                  <p className="description">{value.description}</p>
                )}
              </Link>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Comics;
