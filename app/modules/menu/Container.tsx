import Logo from "./views/AppLogo";
import MenuItem from "./views/MenuItem";
import TweetBtn from "./views/TweetButton";

const SidebarContainer = () => {

  return (
    <div className="col-span-1 h-full pr-1 md:pr-2">
      <div className="flex flex-col ">
        <div className="space-y-2 lg:w-[180px]">
            <Logo/>
            <MenuItem/>
            <TweetBtn/>
        </div>
      </div>
    </div>
  );
};

export default SidebarContainer;
