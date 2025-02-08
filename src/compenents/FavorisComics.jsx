import Cookie from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
const FavorisComics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [test, setTest] = useState();
  {
    const tabFromCookie = Cookie.get(`favoris`);
    for (let i = 0; i < tabFromCookie.length; i++) {
      const id = tabFromCookie[i];
      setTest(id);
      console.log(id);
    }
    console.log(tabFromCookie);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/comics/${test}`
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
    return isLoading ? <p>Loading ...</p> : <div>test</div>;
  }
};

export default FavorisComics;
