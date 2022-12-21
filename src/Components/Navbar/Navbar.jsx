import React, { useContext } from "react";
import pokeapi from "../../assets/pokeapi.png";
import FavoriteContext from "../../Contexts/FavoriteContext";

function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <div className="">
      <nav className="h-24 flex flex-row justify-center items-center">
        <img src={pokeapi} alt="pokeapi-logo" className="w-40"></img>
        <div className="ml-20">{favoritePokemons.length}❤</div>
      </nav>
    </div>
  );
}
export default Navbar;
