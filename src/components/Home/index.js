import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import "./styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const error = useSelector((state) => state.characters.error);
  const isLoading = useSelector((state) => state.characters.isLoading);
  console.log(characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Masonry
      breakpointCols={4}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {characters.map((character) => (
        <div key={character.char_id}>
          <img alt={character.name} src={character.img} width="100%" />
          <div className="char_name">{character.name}</div>
        </div>
      ))}
    </Masonry>
  );
};

export default Home;
