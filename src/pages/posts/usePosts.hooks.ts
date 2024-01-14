import React from "react";

import useFetch from "../../hooks/useFetch";
import { GetRequest } from "../../lib";
import useStore from "../../store";
import useDebounce from "../../hooks/useDebounce";

const usePosts = (LIMIT: number) => {
  const [state, setState] = React.useState({
    page: 1,
    searchValue: "",
  });
  // const [searchValue, setSearchValue] = React.useState("");
  // const [page, setPage] = React.useState(1);
  const [params, setParams] = React.useState({
    skip: 0,
    q: "",
  });
  const debouncedValue = useDebounce(state.searchValue, 500);

  const {
    posts: {
      data: { total, items: posts },
      loading: postsLoading,
      error: postsError,
    },
  } = useStore();

  React.useEffect(() => {
    setState((prev) => ({ ...prev, page: 1 }));
    setParams({
      skip: 0,
      q: debouncedValue,
    });
  }, [debouncedValue]);

  React.useEffect(() => {
    setParams((prev) => ({
      ...prev,
      skip: LIMIT * (state.page - 1),
    }));
  }, [state.page]);

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
    page: state.page,
    setPage: (page: number) => setState((prev) => ({ ...prev, page })),
    searchValue: state.searchValue,
    setSearchValue: (searchValue: string) =>
      setState((prev) => ({ ...prev, searchValue })),
    total,
    skip: params.skip,
  };
};

export default usePosts;
