import React from "react";

const Peoples = ({ data, size }) => {
  const sizes = {
    small: "h-7 w-7",
    large: "h-8 w-8",
  };

  return (
    <div className="flex">
      {[...Array(data)].slice(0, 5).map((_, index) => (
        <div
          key={index}
          className={`${
            sizes[size]
          } flex justify-center items-center text-xs font-medium text-white bg-[#A5A5A5] rounded-full border border-secondary -ml-2 first:ml-0 relative z-${
            index + 10
          } ${data > 5 && "last:bg-pink-500"}`}
        >
          {data > 5 && index === 4 && `${data - 5}+`}
        </div>
      ))}
    </div>
  );
};

export default Peoples;
