import { useParams } from "react-router-dom";
import { GetOneRequest, GetRequest, UpdateRequest } from "../../lib";
import React from "react";
import toast from "react-hot-toast";

const usePostsDetails = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState<Post>({} as Post);
  const [updated, setUpdated] = React.useState(false);
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useLayoutEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const [
          { data },
          {
            data: { comments },
          },
        ] = await Promise.all([
          GetOneRequest<Post>("/posts", id!),
          GetRequest<{ comments: Comment[] }>(`/posts/${id}/comments`),
        ]);
        setPost(data);
        setComments(comments);
      } catch (error: any) {
        console.log(error);
        setError(error.response.data.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleUpdate = async () => {
    try {
      await UpdateRequest("/posts", `${id}`, {
        reactions: post.reactions ? post.reactions + 1 : 1,
      });
      setUpdated((prev) => !prev);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return {
    post,
    updated,
    comments,
    loading,
    error,
    handleUpdate,
  };
};

export default usePostsDetails;
