import Cookie from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
const FavorisPersonnage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [id, setId] = useState();
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
            `http://localhost:3000/personage/${id}`
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

export default FavorisPersonnage;
