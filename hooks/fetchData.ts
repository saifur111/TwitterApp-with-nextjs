import axios from 'axios';
const baseUrl=process.env.NEXT_PUBLIC_API_SERVER;

export const useCurrentUser = async() =>await axios.get(baseUrl+'/api/current').then((res) => res.data);

export const usePost =async (postId: string) =>
{
  const url=postId?`/api/posts/${postId}`:null;
  return await axios.get(baseUrl+url).then((res) => res.data);
}

export const usePosts =async (userId?: string) => {
  const url = userId ? `/api/posts?userId=${userId}` : '/api/posts';
 return await axios.get(baseUrl+url).then((res) => res.data);
  
};

export const useUser =async (userId: string) => {
  const url = userId ? `/api/users/${userId}` : null;
  return await axios.get(baseUrl+url).then((res) => res.data);
};
export const useUsers = async() =>await axios.get(baseUrl+'/api/users').then((res) => res.data);

export const useNotifications =async (userId?: string) => {
  const url = userId ? `/api/notifications/${userId}` : null;
  return await axios.get(baseUrl+url).then((res) => res.data);
};