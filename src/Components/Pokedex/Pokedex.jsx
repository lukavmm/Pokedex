import React, { useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import Pokemon from "../Pokemon/Pokemon";

function Pokedex(props) {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onPrevClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onNextClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="m-4">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Pokedex</h1>

        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onPrevClick={onPrevClickHandler}
          onNextClick={onNextClickHandler}
        />
      </div>
      {loading ? (
        <div className="flex items-center justify-center font-bold text-3xl">
          Carregando Pokemons...
        </div>
      ) : (
        <div className="grid gap-[10px] grid-cols-3 ">
          {pokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
