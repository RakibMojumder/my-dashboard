import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import Progressbar from "./Progressbar";
import Peoples from "./Peoples";

const Card = ({ title, description, className, data, bgColor, textColor }) => {
  return (
    <div className="text-white bg-card p-5 rounded-lg">
      <div className="flex justify-between mb-2.5">
        <div className="flex gap-2 items-center">
          <div className={`h-2 w-2 rounded-full ${bgColor}`}></div>
          <h5 className={`text-xs ${textColor}`}>{title}</h5>
        </div>
        <BsThreeDots size={18} />
      </div>
      <h5 className="text-[13px] mb-5">{description}</h5>
      <Progressbar className={className} />
      <div className="mt-5 flex justify-between items-center">
        <Peoples data={data} size="small" />
        <div className="flex items-center gap-1">
          <IoTimeOutline size={14} />
          <p className="text-[10px]">Due in 4 days</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
