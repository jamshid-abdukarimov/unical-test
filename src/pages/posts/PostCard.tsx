import { mdiHeart } from "@mdi/js";
import { Link } from "react-router-dom";

import Icon from "../../components/Icon";

const PostCard = ({
  body,
  reactions,
  tags,
  title,
  userId,
  id,
}: Partial<Post>) => {
  return (
    <div className="h-full block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 relative">
      <Link
        to={`/posts/${id}`}
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
      >
        {title!.length > 30 ? title?.slice(0, 30) + "..." : title}
      </Link>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 whitespace-nowrap overflow-hidden text-ellipsis">
        {body}
      </p>
      <div className="text-xs text-gray-600 flex gap-2 mt-auto">
        {tags?.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <div className="absolute flex items-center gap-1 top-1 right-1">
        <Icon path={mdiHeart} size={20} className="text-red-500" />
        <span>{reactions}</span>
      </div>
      <Link
        className="block py-1 px-3 bg-violet-500 text-white max-w-max rounded-md mt-3"
        to={`/users/${userId}/posts`}
      >
        User's posts
      </Link>
    </div>
  );
};

export default PostCard;
