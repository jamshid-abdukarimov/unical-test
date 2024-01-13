import React from "react";

import useFetch from "../../hooks/useFetch";
import { GetRequest } from "../../lib";
import useStore from "../../store";
import useDebounce from "../../hooks/useDebounce";

const usePosts = (LIMIT: number) => {
  const [page, setPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");
  const debouncedValue = useDebounce(searchValue, 500);

  const {
    posts: {
      data: { total, items: posts },
      loading: postsLoading,
      error: postsError,
    },
  } = useStore();

  const skip = LIMIT * (page - 1);

  const params: {
    skip: number;
    q: string;
    limit: number;
  } = {
    skip,
    limit: LIMIT,
    q: debouncedValue,
  };

  React.useEffect(() => {
    setPage(1);
    params.skip = 0;
    params.q = debouncedValue;
  }, [debouncedValue]);

  let fetches = {
    posts: () =>
      GetRequest(debouncedValue ? "/posts/search" : "/posts", params),
  };

  useFetch(fetches, [page, debouncedValue]);

  return {
    posts,
    postsLoading,
    postsError,
    page,
    setPage,
    searchValue,
    setSearchValue,
    total,
    skip,
  };
};

export default usePosts;
