
import { ClipLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import FeedItem from "@/modules/timeline/views/FeedItem";
import Form from "@/components/Form";
import { usePost } from "@/hooks/fetchData";
import CommentFeed from "@/modules/timeline/views/CommentFeed";

const PostView = () => {
  const searchParams =  useSearchParams ();
  const  postId  = searchParams.get('postId')

  const { data: fetchedPost} = usePost(postId as string);

  if (!fetchedPost) {
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
      <Form postId={postId as string} isComment placeholder="Tweet your reply" />
      <CommentFeed comments={fetchedPost?.comments} />
    </>
   );
}
 
export default PostView;