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
      <h1 className="container">Personage</h1>

      {data.results.map((value, index) => {
        console.log(value);
        return (
          
            <section key={index} className="personage"><Link key={value._id} to={`/personage/${value._id}`}>
              <div>{value.name}</div>
              {value.description && <p>{value.description}</p>}
              <div>
                {value.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                  <div className="noimg"> </div>
                ) : (
                  <img
                    src={value.thumbnail.path + "." + value.thumbnail.extension}
                    alt={value.name}
                  />
                )}
              </div></Link>
            </section>
          
        );
      })}
    </>
  );
};

export default Personage;
