'use client'
import { useCurrentUser, useUser } from "@/hooks/fetchData";
import useModal from "@/hooks/useModal";
import { fetcher } from "@/libs/fetcher";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import useSWR from "swr";



const useFollow = (userId: string) => {
  const { data: currentUser, isLoading } = useSWR('/api/current', fetcher);
  console.log(currentUser);
  const { data: mutateFetchedUser } = useUser(userId);

  const loginModal = useModal();

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];

    return list.includes(userId);
  }, [currentUser, userId]);

  const toggleFollow = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (isFollowing) {
        request = () => axios.delete('/api/follow', { data: { userId } });
      } else {
        request = () => axios.post('/api/follow', { userId });
      }

      await request();
      currentUser();
      mutateFetchedUser();

      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }, [currentUser, isFollowing, userId, currentUser, mutateFetchedUser, loginModal]);

  return {
    isFollowing,
    toggleFollow,
  }
}

export default useFollow;