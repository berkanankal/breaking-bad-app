import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  console.log(characters);

  return <div>Hello world!</div>;
};

export default Home;
