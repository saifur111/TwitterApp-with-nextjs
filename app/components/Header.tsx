import { HeaderProps } from '@/util/definations'
import React from 'react'

export const Header = ({label}:HeaderProps) => {
  return (
    <div className="border-b-[2px] border-slate-700 p-5">
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-white text-xl font-semibold">
          {label}
        </h1>
      </div>
    </div>
  )
}
