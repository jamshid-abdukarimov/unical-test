import React from "react";
import useDebounce from "../../hooks/useDebounce";
import useStore from "../../store";
import { GetRequest } from "../../lib";
import useFetch from "../../hooks/useFetch";

const useUsers = (LIMIT: number) => {
  const [state, setState] = React.useState({
    page: 1,
    searchValue: "",
  });
  const [params, setParams] = React.useState({
    skip: 0,
    q: "",
  });
  const debouncedValue = useDebounce(state.searchValue, 500);

  const {
    users: {
      data: { total, items: users },
      loading: usersLoading,
      error: usersError,
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

  let fetches = {
    users: () =>
      GetRequest(debouncedValue ? "/users/search" : "/users", {
        ...params,
        limit: LIMIT,
      }),
  };

  useFetch(fetches, [params]);

  return {
    users,
    usersLoading,
    usersError,
    ...state,
    setPage: (page: number) => setState((prev) => ({ ...prev, page })),
    setSearchValue: (searchValue: string) =>
      setState((prev) => ({ ...prev, searchValue })),
    total,
    skip: params.skip,
  };
};

export default useUsers;
