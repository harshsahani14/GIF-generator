import React from "react";
import { Spinner } from "./Spinner";
import { useGif } from "../Hooks/useGif";

export const Random = () => {
  const {gif, fetch, loader} = useGif('' , true);

  return (
    <div className=" bg-green-500 rounded-md h-max-[400px] w-[40%] flex flex-col gap-y-4 items-center border-black border-2">
      <h1 className=" text-center  font-bold mt-2 text-[20px] uppercase underline">
        Random GIF
      </h1>

      {loader ? <Spinner></Spinner> : <img width={450} src={gif}></img>}

      <button
        onClick={() => {
          fetch();
        }}
        className=" w-[90%] bg-green-200 h-[40px] rounded-md font-bold text-lg uppercase mb-5"
      >
        
        Generate
      </button>
    </div>
  );
};
