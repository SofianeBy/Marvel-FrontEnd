import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Favoris from "./Favoris";

const PersonageId = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [favoris, setFavoris] = useState([]);

  const { id } = useParams();

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
  }, [id]);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div key={data._id} className="test">
      <div>{data.name}</div>
      <div
        className="absolute"
        onClick={(event) => {
          const copy = [...favoris];
          console.log(event);
        }}
      >
        <i class="fa-regular fa-heart icon"></i>
      </div>
      {data.thumbnail.path ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
        <div className="noimg"> </div>
      ) : (
        <img
          src={data.thumbnail.path + "." + data.thumbnail.extension}
          alt={data.name}
        />
      )}
      {data.description && <p>{data.description}</p>}
    </div>
  );
};
export default PersonageId;
