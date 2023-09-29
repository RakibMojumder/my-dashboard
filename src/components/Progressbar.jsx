import React from "react";

const Progressbar = ({ className }) => {
  return (
    <div
      className={`h-[6px] w-full rounded-full bg-[#1E1C3A] relative before:absolute before:top-0 before:left-0 before:h-full before:rounded-full ${className}`}
    ></div>
  );
};

export default Progressbar;
