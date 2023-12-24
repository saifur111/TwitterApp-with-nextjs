
import { ClipLoader } from "react-spinners";
import { Header } from "@/components/Header";
import Feed from "@/modules/timeline/views/Feed";
import { useSearchParams  } from "next/navigation";
import { useUser } from "@/hooks/fetchData";
import UserBio from "@/modules/user/views/UserBio";
import UserHero from "@/modules/user/views/UserHero";



const UserView = () => {
  const searchParams =  useSearchParams ();
  const  userId  = searchParams.get('userId')

  const { data: fetchedUser} = useUser(userId as string);

  if (!fetchedUser) {
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