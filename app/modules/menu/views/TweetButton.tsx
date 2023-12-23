import { TweetBtnProps } from "@/util/definations";
import { FaFeather, FaSignOutAlt } from "react-icons/fa";

const TweetBtn = ({label}:TweetBtnProps) => {
    return (
      <div>
        <div className="
          mt-6
          lg:hidden 
          rounded-full 
          h-14
          w-14
          p-4
          flex
          items-center
          justify-center 
          bg-slate-700 
          hover:bg-opacity-80 
          transition 
          cursor-pointer
        ">
          {label==="Tweet" && <FaFeather size={24} color="white" />}
          {label==="Logout" && <FaSignOutAlt size={24} color="white" />}
        </div>
        <div className="
          mt-6
          hidden 
          lg:flex 
          items-row 
          gap-4 
          p-4 
          px-6
          py-2
          rounded-4
          bg-slate-700
          hover:bg-opacity-90 
          cursor-pointer
        ">
          {label==="Tweet" && <FaFeather size={24} color="white" />}
          {label==="Logout" && <FaSignOutAlt size={24} color="white" />}
          <p 
            className="
              hidden 
              lg:block 
              text-center
              font-semibold
              text-white 
              text-[20px]
          ">
            {label}
          </p>
        </div>
      </div>
    );
}
export default TweetBtn