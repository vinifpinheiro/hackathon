import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img src={''} alt={'title'} className="w-full" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{'title'}</div>
        <p className="text-base text-gray-700">{'description'}</p>
      </div>
    </div>
  );
};

export default Card;
