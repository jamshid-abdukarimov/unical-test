import { useParams } from "react-router-dom";
import { GetOneRequest, GetRequest, UpdateRequest } from "../../lib";
import React from "react";
import toast from "react-hot-toast";

const usePostsDetails = () => {
  const { id } = useParams();
  const [state, setState] = React.useState({
    post: {} as Post,
    comments: [] as Comment[],
    updated: false,
    loading: false,
    error: null,
  });
  React.useLayoutEffect(() => {
    (async () => {
      try {
        setState((prev) => ({
          ...prev,
          loading: true,
        }));
        // setLoading(true);
        const [
          { data: postData },
          {
            data: { comments },
          },
        ] = await Promise.all([
          GetOneRequest<Post>("/posts", id!),
          GetRequest<{ comments: Comment[] }>(`/posts/${id}/comments`),
        ]);
        setState((prev) => ({
          ...prev,
          post: postData,
          comments,
        }));
        // setData({
        //   post: postData,
        //   comments,
        // });
      } catch (error: any) {
        console.log(error);
        setState((prev) => ({
          ...prev,
          error: error.response.data.message || "Something went wrong",
        }));
        // setError(error.response.data.message || "Something went wrong");
      } finally {
        setState((prev) => ({
          ...prev,
          loading: false,
        }));
        // setLoading(false);
      }
    })();
  }, []);

  const handleUpdate = async () => {
    try {
      await UpdateRequest("/posts", `${id}`, {
        reactions: state.post.reactions ? state.post.reactions + 1 : 1,
      });
      // setUpdated((prev) => !prev);
      setState((prev) => ({
        ...prev,
        updated: !prev.updated,
      }));
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return {
    ...state,
    handleUpdate,
  };
};

export default usePostsDetails;
