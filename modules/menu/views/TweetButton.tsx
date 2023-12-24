"use client"
import { useCurrentUser } from "@/hooks/fetchData";
import useModal from "@/hooks/useModal";
import { fetcher } from "@/libs/fetcher";
import { TweetBtnProps } from "@/util/definations";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { FaFeather, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import useSWR from "swr";

const TweetBtn = ({label}:TweetBtnProps) => {
  const router = useRouter();
  const loginModal = useModal();
  const { data: currentUser, isLoading } = useSWR('/api/current', fetcher);

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);
    return (
      <div onClick={onClick}>
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
          {label==="Login" && <FaSignInAlt size={24} color="white" />}
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
          {label==="Login" && <FaSignInAlt size={24} color="white" />}
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