
import { ClipLoader } from "react-spinners";

import usePost from "@/hooks/usePost";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import FeedItem from "@/modules/timeline/views/FeedItem";



const PostView = () => {
  const searchParams =  useSearchParams ();
  const  postId  = searchParams.get('postId')

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }

  return ( 
    <>
      <Header  label="Tweet" />
      <FeedItem data={fetchedPost} />
      {/* <Form postId={postId as string} isComment placeholder="Tweet your reply" /> */}
      {/* <CommentFeed comments={fetchedPost?.comments} /> */}
    </>
   );
}
 
export default PostView;