import React from "react";
import Avatar from "./Avatar";

const Card = () => {
  return (
    <div  className="flex flex-row gap-4">
      <Avatar/>
      <div className="flex flex-col">
        <p className="text-white font-semibold text-sm">Md Saifur Rahman</p>
        <p className="text-neutral-400 text-sm">@saifur111</p>
      </div>
    </div>
  );
};

export default Card;
