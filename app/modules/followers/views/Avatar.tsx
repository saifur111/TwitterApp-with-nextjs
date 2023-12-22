import React from 'react'
import Image from "next/image";
const Avatar = () => {
  return (
    <div
      className={`
      border-4 border-black
        w-12 h-12
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt="Avatar"
        src='/images/defaultuser.png'
      />
    </div>
  )
}

export default Avatar