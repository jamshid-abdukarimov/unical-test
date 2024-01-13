import Pagination from "../../components/Pagination";
import PostCard from "./PostCard";

const PostsList = ({
  posts,
  LIMIT,
  total,
  page,
  setPage,
}: {
  posts: Post[];
  LIMIT: number;
  total: number;
  page: number;
  setPage: (page: number) => void;
}) => {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-8">
      {posts.map((post) => (
        <div className="col-span-6 md:col-span-4 lg:col-span-3" key={post.id}>
          <PostCard
            id={post.id}
            tags={post.tags}
            reactions={post.reactions}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        </div>
      ))}
      {!(LIMIT >= total) && (
        <div className="col-span-full">
          <Pagination
            allPages={Math.ceil(total / LIMIT)}
            currentPage={page}
            setCurrentPage={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default PostsList;
