import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="font-semibold text-sm px-3 m-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
