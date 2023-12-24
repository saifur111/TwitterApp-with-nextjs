'use client'
import React, { useCallback, useMemo } from 'react'
import Avatar from '../../Avatar'
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
import { PostItemProps } from '@/util/definations';
import { useRouter } from 'next/navigation';
import useModal from '@/hooks/useModal';
import { useCurrentUser } from '@/hooks/fetchData';
import { formatDistanceToNowStrict } from 'date-fns';
import useSWR from 'swr';
import { fetcher } from '@/libs/fetcher';
import useLike from '@/components/Like';

const FeedItem = ({ data = {}, userId }:PostItemProps
  ) => {
    const router = useRouter();
    const loginModal = useModal();
    const { data: currentUser, isLoading } = useSWR('/api/current', fetcher);
    const { hasLiked, toggleLike } = useLike({ postId: data.id, userId});
  
    const goToUser = useCallback((ev: any) => {
      ev.stopPropagation();
      router.push(`/users/${data.user.id}`)
    }, [router, data.user.id]);
  
    const goToPost = useCallback(() => {
      router.push(`/posts/${data.id}`);
    }, [router, data.id]);
  
    const onLike = useCallback(async (ev: any) => {
      ev.stopPropagation();
  
      if (!currentUser) {
        return loginModal.onOpen();
      }
  
      toggleLike();
    }, [loginModal, currentUser, toggleLike]);
  
    const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;
  
    const createdAt = useMemo(() => {
      if (!data?.createdAt) {
        return null;
      }
  
      return formatDistanceToNowStrict(new Date(data.createdAt));
    }, [data.createdAt])
  return (
    <div onClick={goToPost}
    className="
      hover:border-b-[2px] 
      rounded
      hover:border-slate-600 
      p-5
      py-2 
      cursor-pointer 
      hover:bg-slate-800 
      transition
    ">
    <div className="flex flex-row items-start gap-3">
      <Avatar userId={data.user.id}/>
      <div>
        <div className="flex flex-row items-center gap-2">
          <p onClick={goToUser} 
            className="
              text-white 
              font-semibold 
              cursor-pointer 
              hover:underline
          ">
            {data.user.name}
          </p>
          <span onClick={goToUser}
            className="
              text-neutral-500
              cursor-pointer
              hover:underline
              hidden
              md:block
          ">
            @{data.user.username}
          </span>
          <span className="text-neutral-500 text-sm">
          {createdAt}
          </span>
        </div>
        <div className="text-white mt-1">
        {data.body}
        </div>
        <div className="flex flex-row items-center mt-3 gap-10">
          <div  onClick={onLike}
            className="
              flex 
              flex-row 
              items-center 
              text-slate-500 
              gap-2 
              cursor-pointer 
              transition 
              hover:text-slate-300
          ">
            <AiOutlineMessage size={20} />
            <p>
            {data.comments?.length || 0}
            </p>
          </div>
          <div
            className="
              flex 
              flex-row 
              items-center 
              text-slate-500 
              gap-2 
              cursor-pointer 
              transition 
              hover:text-red-500
          ">
            <LikeIcon color={hasLiked? 'red' : ''} size={20} />
            <p>
            {data.likedIds.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeedItem