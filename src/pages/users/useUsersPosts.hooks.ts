import React from "react";

import useFetch from "../../hooks/useFetch";
import { GetOneRequest } from "../../lib";
import useStore from "../../store";
import { useParams } from "react-router-dom";

const useUsersPosts = (LIMIT: number) => {
  const { id } = useParams();
  const [page, setPage] = React.useState(1);

  const {
    data: { total, items: posts },
    loading: postsLoading,
    error: postsError,
  } = useStore().posts;

  const skip = LIMIT * (page - 1);

  let fetches = {
    posts: () => GetOneRequest("/posts", `user/${id}`, { skip, limit: LIMIT }),
  };

  useFetch(fetches, [page]);

  return {
    posts,
    postsLoading,
    postsError,
    page,
    setPage,
    total,
    skip,
  };
};

export default useUsersPosts;
