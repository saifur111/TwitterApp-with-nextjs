"use client"
import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useCurrentUser, usePost, usePosts } from "@/hooks/fetchData";
import useModal from "@/hooks/useModal";
import useSWR from "swr";
import { fetcher } from "@/libs/fetcher";


const useLike = ({ postId, userId }: { postId: string, userId?: string }) => {
    const { data: currentUser, isLoading } = useSWR('/api/current', fetcher);
  const { data: fetchedPost  } = usePost(postId);
  const { data: mutateFetchedPosts } = usePosts(userId);

  const loginModal = useModal();

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];

    return list.includes(currentUser?.id);
  }, [fetchedPost, currentUser]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasLiked) {
        request = () => axios.delete('/api/like', { data: { postId } });
      } else {
        request = () => axios.post('/api/like', { postId });
      }

      await request();
      fetchedPost();
      mutateFetchedPosts();

      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }, [currentUser, hasLiked, postId, mutateFetchedPosts, fetchedPost, loginModal]);

  return {
    hasLiked,
    toggleLike,
  }
}

export default useLike;