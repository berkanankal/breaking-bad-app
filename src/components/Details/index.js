import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

const Details = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${id}`)
      .then((res) => setCharacter(res.data[0]))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading && (
        <div style={{ textAlign: "center", paddingTop: 20 }}>
          <Loading />
        </div>
      )}
      {character && <pre>{JSON.stringify(character, null, 2)}</pre>}
    </div>
  );
};

export default Details;
