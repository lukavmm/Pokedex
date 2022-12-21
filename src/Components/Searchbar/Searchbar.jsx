import React, { useState } from "react";

function Searchbar(props) {
  const [search, setSearch] = useState("ditto");
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      onButtonClickHandler();
    }
  };

  return (
    <div className="flex my-0 mx-auto py-0 px-5 items-center justify-center">
      <div className="bg-white mr-5 rounded-lg">
        <input
          className="p-2 shadow-md shadow-gray-400 rounded-lg border-none outline-violet-500"
          type="text"
          placeholder="Buscar pokemon"
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
      <div className="">
        <button
          className="bg-[#0e6f9f] border-none rounded-[10px] h-11 text-white py-[10px] px-[12px]"
          onClick={onButtonClickHandler}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
