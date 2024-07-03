import React from "react";
import { useState } from "react";

import { Spinner } from "./Spinner";
import { useGif } from "../Hooks/useGif";

export const Generate = () => {
  const [text, setText] = useState('');

  const {gif, fetch, loader} = useGif(text,false);

  return (
    <div className=" bg-blue-500 rounded-md h-max-[600px] w-[40%] flex flex-col gap-y-4 items-center border-black border-2 mt-4 mb-5">
      <h1 className=" text-center  font-bold mt-2 text-[20px] uppercase underline">
        A Random GIF
      </h1>

      {loader ? <Spinner></Spinner> : <img width={450} src={gif}></img>}

      <input
        className=" w-[90%] h-[40px] rounded-md text-center"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          fetch();
        }}
        className=" w-[90%] bg-green-200 h-[40px] rounded-md font-bold text-lg uppercase mb-5"
      >
        {" "}
        Generate
      </button>
    </div>
  );
};
