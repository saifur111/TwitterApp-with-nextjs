
import { ClipLoader } from "react-spinners";
import useUser from "@/hooks/useUser";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import { Header } from "@/components/Header";
import Feed from "@/modules/timeline/views/Feed";
import { useSearchParams  } from "next/navigation";



const UserView = () => {
    const searchParams =  useSearchParams ();
  const  userId  = searchParams.get('userId')

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }

  return (
    <>
      <Header label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <Feed userId={userId as string} />
    </>
   );
}
 
export default UserView;