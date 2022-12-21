import React, { useContext } from "react";
import FavoriteContext from "../../Contexts/FavoriteContext";

function Pokemon(props) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤" : "🖤";

  return (
    <div className="w-[430px] hover:scale-[1.05] transition-all duration-250  flex shadow-md shadow-gray-400 rounded-md">
      <div className="px-1">
        <img
          className="w-24 h-24 mr-3 pokemon-image"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>

      <div className="flex flex-col justify-between p-2 flex-[1] card-body">
        <div className="flex flex-row justify-between items-center card-top">
          <h3 className="capitalize font-bold">{pokemon.name}</h3>
          <div className="pokemon-id">#{pokemon.id}</div>
        </div>

        <div className="flex flex-row items-center justify-between card-bottom">
          <div className="flex pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="mr-2 capitalize pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={onHeartClick} className="cursor-pointer">
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
