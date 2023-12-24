import React from 'react'
import Avatar from '../../Avatar'
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

const FeedItem = () => {
    const LikeIcon = false ? AiFillHeart : AiOutlineHeart;
  return (
    <div 
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
      <Avatar />
      <div>
        <div className="flex flex-row items-center gap-2">
          <p 
            className="
              text-white 
              font-semibold 
              cursor-pointer 
              hover:underline
          ">
            Md Saifur Rahman
          </p>
          <span 
            className="
              text-neutral-500
              cursor-pointer
              hover:underline
              hidden
              md:block
          ">
            @Saifur111
          </span>
          <span className="text-neutral-500 text-sm">
            createdAt-2023
          </span>
        </div>
        <div className="text-white mt-1">
          Hi , I am Saifur...
        </div>
        <div className="flex flex-row items-center mt-3 gap-10">
          <div 
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
              4
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
            <LikeIcon color={false? 'red' : ''} size={20} />
            <p>
             5
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeedItem