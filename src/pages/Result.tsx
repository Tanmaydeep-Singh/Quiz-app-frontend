import React from "react";
import { useParams} from "react-router-dom";

const Result = () => {
  const { id } = useParams();



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Result : {id} </h1>
    </div>
  );
};

export default Result;
