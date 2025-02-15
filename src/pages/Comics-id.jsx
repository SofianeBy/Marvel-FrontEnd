import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ComicsId = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9m6btwtmk2gq.code.run/comics/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div key={data._id} className="personageId">
      <div>{data.title}</div>

      {data.thumbnail.path ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
        <div className="noimg"> </div>
      ) : (
        <img
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt={data.title}
        />
      )}
      {data.description && <p>{data.description}</p>}
    </div>
  );
};
export default ComicsId;
