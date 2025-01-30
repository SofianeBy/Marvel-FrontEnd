import { useEffect, useState } from "react";
import axios from "axios";

const Personage = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--9m6btwtmk2gq.code.run"
        );
        console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? <p>Chargement ...</p> : <h1>Personage</h1>;
};

export default Personage;
