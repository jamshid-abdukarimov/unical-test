import Loader from "../../components/Loader";
import { mdiHeart, mdiHeartOutline } from "@mdi/js";
import Icon from "../../components/Icon";
import Title from "../../components/Title";
import usePostsDetails from "./useDetails.hooks";

const PostDetails = () => {
  const { post, updated, comments, loading, error, handleUpdate } =
    usePostsDetails();

  if (loading) {
    return <Loader main />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Title className="mb-3">Post</Title>
      <div className="h-full block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 relative">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {post!.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
          {post!.body}
        </p>
        <div className="text-xs text-gray-600 flex gap-2 mt-auto">
          {post!.tags?.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-1 mt-2">
          <Icon
            onClick={handleUpdate}
            path={updated ? mdiHeart : mdiHeartOutline}
            size={20}
            className="text-red-500 cursor-pointer"
          />
          <span>{updated ? post!.reactions + 1 : post!.reactions}</span>
        </div>
      </div>
      <div className="mt-10">
        <Title className="mb-3">Comments</Title>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="h-full block rounded-lg bg-white px-6 py-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-3"
          >
            <h6 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 mb-2">
              User: {comment.user.username}
            </h6>
            <p>Text: {comment.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostDetails;
