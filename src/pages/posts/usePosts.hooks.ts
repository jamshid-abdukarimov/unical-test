import React from "react";

import useFetch from "../../hooks/useFetch";
import { GetRequest } from "../../lib";
import useStore from "../../store";
import useDebounce from "../../hooks/useDebounce";

const usePosts = (LIMIT: number) => {
  const [page, setPage] = React.useState(1);
  const [params, setParams] = React.useState({
    skip: 0,
    q: "",
  });
  const [searchValue, setSearchValue] = React.useState("");
  const debouncedValue = useDebounce(searchValue, 500);

  const {
    posts: {
      data: { total, items: posts },
      loading: postsLoading,
      error: postsError,
    },
  } = useStore();

  React.useEffect(() => {
    setPage(1);
    setParams({
      skip: 0,
      q: debouncedValue,
    });
  }, [debouncedValue]);

  React.useEffect(() => {
    setParams((prev) => ({
      ...prev,
      skip: LIMIT * (page - 1),
    }));
  }, [page]);

  useFetch(
    {
      posts: () =>
        GetRequest(debouncedValue ? "/posts/search" : "/posts", {
          ...params,
          limit: LIMIT,
        }),
    },
    [params]
  );

  return {
    posts,
    postsLoading,
    postsError,
    page,
    setPage,
    searchValue,
    setSearchValue,
    total,
    skip: params.skip,
  };
};

export default usePosts;
