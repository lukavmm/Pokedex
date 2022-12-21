import React from "react";

function Pagination(props) {
  const { page, totalPages, onPrevClick, onNextClick } = props;
  return (
    <div className="flex flex-row items-center pagination-container">
      <button
        className="flex items-center justify-center text-white bg-[rgb(54,54,54)] w-8 h-8 rounded-[50%] mx-2"
        onClick={onPrevClick}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
            width="28"
            height="28"
          >
            <path
              d="M11.5 14.5l-4-4 4-4"
              fill="none"
              stroke="#FFF"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button
        className="flex items-center justify-center text-white bg-[rgb(54,54,54)] w-8 h-8 rounded-[50%] mx-2"
        onClick={onNextClick}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
            width="28"
            height="28"
          >
            <path
              d="M9.5 14.5l4-4-4-4"
              fill="none"
              stroke="#FFF"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Pagination;
