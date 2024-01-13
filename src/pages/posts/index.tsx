import Input from "../../components/Input";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import PostsList from "./PostsList";
import usePosts from "./usePosts.hooks";

const LIMIT = 24;

const PostsPage = () => {
  const {
    page,
    searchValue,
    setPage,
    setSearchValue,
    total,
    skip,
    posts,
    postsError,
    postsLoading,
  } = usePosts(LIMIT);

  if (postsLoading) {
    return <Loader main />;
  }

  if (postsError) {
    return <div>{postsError}</div>;
  }

  return (
    <>
      <div className="col-span-full">
        <Title>Posts</Title>
        <p>
          Showing{" "}
          {skip != undefined
            ? `${skip + 1} - ${skip + posts.length}`
            : posts?.length}{" "}
          of {total}
        </p>
      </div>
      <Input
        value={searchValue}
        type="search"
        placeholder="Search for products..."
        onChange={(e) => setSearchValue!(e.target.value)}
        className="col-span-full my-4"
      />
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

export default PostsPage;
