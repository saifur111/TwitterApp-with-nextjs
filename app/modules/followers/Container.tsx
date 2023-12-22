import React from 'react'
import Card from './views/SingleFollowerCard'

const FollowersContainer = () => {
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="hover:bg-slate-600 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Followers</h2>
        <div className="flex flex-col gap-6 mt-4">
            <Card/>
        </div>
      </div>
    </div>
  )
}

export default FollowersContainer