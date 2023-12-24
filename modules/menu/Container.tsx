import useCurrentUser from "@/hooks/fetchData";
import Logo from "./views/AppLogo";
import MenuItem from "./views/MenuItem";
import TweetBtn from "./views/TweetButton";
import useSWR from "swr";
import { fetcher } from "@/libs/fetcher";

const SidebarContainer = () => {
  const { data, isLoading } = useSWR('/api/current', fetcher);
  return (
    <div className="col-span-1 h-full pr-1 md:pr-2">
      <div className="flex flex-col ">
        <div className="space-y-2 lg:w-[180px]">
          <Logo/>
          {isLoading&&<div>Loading...</div>}
          {data&&<MenuItem/>}
          {data&&<TweetBtn label={"Tweet"}/>}
          {data?<TweetBtn label={"Logout"}/>:<TweetBtn label={"Login"}/>}
        </div>
      </div>
    </div>
  );
};

export default SidebarContainer;
