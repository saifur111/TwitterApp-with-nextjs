
import { useCurrentUser } from '@/hooks/fetchData';
import React from 'react'
import { BsDot } from 'react-icons/bs';
import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const { data: currentUser } = useCurrentUser();

const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ]

const MenuItem = () => {
  return (
    <>
    {items.map((item) => (
    <div key={item.href} className="flex flex-row">
      <div className="
        relative
        rounded
        h-14
        w-14
        flex
        items-center
        justify-start 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden
      ">
        <item.icon size={28} color="white" />
        {item.alert ? <BsDot className="text-red-500 absolute -top-4 left-0" size={70} /> : null}
      </div>
      <div className="
        relative
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-4 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      ">
        <item.icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">
          {item.label}
        </p>
        {item.alert ? <BsDot className="text-red-500 absolute -top-4 left-0" size={70} /> : null}
      </div>
    </div>
    ))}
    </>

  )
}

export default MenuItem