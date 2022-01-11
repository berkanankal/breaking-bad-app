import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${id}`)
      .then((res) => {
        setCharacter(res.data[0]);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {isLoading && (
        <div style={{ textAlign: "center", paddingTop: 20 }}>
          <Loading />
        </div>
      )}
      {!isLoading && <pre>{JSON.stringify(character, null, 2)}</pre>}
    </div>
  );
};

export default CharacterDetails;
