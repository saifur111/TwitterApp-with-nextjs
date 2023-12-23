"use client"
import Link from "next/link";
import Logo from "./views/AppLogo";
import MenuItem from "./views/MenuItem";
import TweetBtn from "./views/TweetButton";
import { signOut, useSession } from "next-auth/react";

const SidebarContainer = () => {
  const { status } = useSession();
  return (
    <div className="col-span-1 h-full pr-1 md:pr-2">
      <div className="flex flex-col ">
      
        <div className="space-y-2 lg:w-[180px]">
          <Logo/>
          <MenuItem/>
          <TweetBtn label={"Tweet"}/>
          <Link href={'/auth/login'}>
            <TweetBtn onClick={()=>signOut()} label={"Logout"}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarContainer;
