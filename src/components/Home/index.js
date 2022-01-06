import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Masonry from "react-masonry-css";
import "./styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const error = useSelector((state) => state.characters.error);
  const status = useSelector((state) => state.characters.status);
  const page = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  console.log(characters);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [status, dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to={`/character/${character.char_id}`}>
              <img alt={character.name} src={character.img} width="100%" />
              <div className="char_name">{character.name}</div>
            </Link>
          </div>
        ))}
      </Masonry>

      <div style={{ textAlign: "center", padding: "40px 0" }}>
        {status === "loading" && <Loading />}
        {hasNextPage && status === "succeeded" && (
          <button onClick={() => dispatch(fetchCharacters(page))}>
            Load more
          </button>
        )}
        {!hasNextPage && <div>There is nothing to be shown.</div>}
      </div>
    </>
  );
};

export default Home;
