import React from 'react'
import FollowersCard from './views/SingleFollowerCard'
import { useUsers } from '@/hooks/fetchData';


const FollowersContainer = () => {
  const { data: users = [] } = useUsers();
  if (users.length === 0) return null;
  
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="hover:bg-slate-600 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Followers</h2>
        <div className="flex flex-col gap-6 mt-4">
        {
          users.map((user: Record<string, any>) => (
              <FollowersCard
                key={user.id}
                user={user}

              />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default FollowersContainer