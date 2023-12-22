import { FaFeather } from "react-icons/fa";

const TweetBtn = () => {
    
  
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
          <FaFeather size={24} color="white" />
        </div>
        <div className="
          mt-6
          hidden 
          lg:block 
          px-6
          py-2
          rounded-4
          bg-slate-700
          hover:bg-opacity-90 
          cursor-pointer
        ">
          <p 
            className="
              hidden 
              lg:block 
              text-center
              font-semibold
              text-white 
              text-[20px]
          ">
            Tweet
          </p>
        </div>
      </div>
    );
}
export default TweetBtn