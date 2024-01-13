import Title from "../../components/Title";
import useUsersPosts from "./useUsersPosts.hooks";
import Loader from "../../components/Loader";
import PostsList from "../posts/PostsList";

const LIMIT = 24;

const UsersPosts = () => {
  const { page, setPage, total, skip, posts, postsError, postsLoading } =
    useUsersPosts(LIMIT);

  if (postsLoading) {
    return <Loader main />;
  }

  if (postsError) {
    return <div>{postsError}</div>;
  }
  return (
    <>
      <div className="mb-4">
        <Title>Posts</Title>
        <p>
          Showing{" "}
          {skip != undefined
            ? `${skip + 1} - ${skip + posts.length}`
            : posts?.length}{" "}
          of {total}
        </p>
      </div>
      <PostsList
        posts={posts}
        LIMIT={LIMIT}
        total={total}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default UsersPosts;
