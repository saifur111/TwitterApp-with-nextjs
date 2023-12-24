"use client"
import Logo from "./views/AppLogo";
import MenuItem from "./views/MenuItem";
import TweetBtn from "./views/TweetButton";
import useSWR from "swr";
import { fetcher } from "@/libs/fetcher";
import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const SidebarContainer = () => {
  const { data: currentUser, isLoading } = useSWR('/api/current', fetcher);
  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ]

  return (
    <div className="col-span-1 h-full pr-1 md:pr-2">
      <div className="flex flex-col ">
        <div className="space-y-2 lg:w-[180px]">
          <Logo/>
          {isLoading&&<div>Loading...</div>}
          {items.map((item) => (
            <MenuItem
            key={item.href}
            alert={item.alert}
            auth={item.auth}
            href={item.href} 
            icon={item.icon} 
            label={item.label}
            />
          ))}
          {currentUser&&<TweetBtn label={"Tweet"}/>}
          {currentUser?<TweetBtn label={"Logout"}/>:<TweetBtn label={"Login"}/>}
        </div>
      </div>
    </div>
  );
};

export default SidebarContainer;
