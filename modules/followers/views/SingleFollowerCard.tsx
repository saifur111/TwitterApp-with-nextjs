import React from "react";
import Avatar from "../../Avatar";
interface FollowersCardProps{
  user: Record<string, any>
}
const FollowersCard = ({user}:FollowersCardProps) => {
  return (
    <div  className="flex flex-row gap-4">
      <Avatar userId={user.id}/>
      <div className="flex flex-col">
        <p className="text-white font-semibold text-sm">{user.name}</p>
        <p className="text-neutral-400 text-sm">@{user.username}</p>
      </div>
    </div>
  );
};

export default FollowersCard;
