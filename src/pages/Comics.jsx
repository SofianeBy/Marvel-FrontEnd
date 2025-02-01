import { useEffect, useState } from "react";
import axios from "axios";

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

      {data.results.map((value) => {
        console.log(value);
        return (
          <section key={value._id} className="personage">
            <div>{value.name}</div>
            {value.description && <p>{value.description}</p>}
            <div>
              {value.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                <div className="noimg"></div>
              ) : (
                <img
                  src={value.thumbnail.path + "." + value.thumbnail.extension}
                  alt={value.name}
                />
              )}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Comics;
