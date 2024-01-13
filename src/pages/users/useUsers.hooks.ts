import React from "react";
import useDebounce from "../../hooks/useDebounce";
import useStore from "../../store";
import { GetRequest } from "../../lib";
import useFetch from "../../hooks/useFetch";

const useUsers = (LIMIT: number) => {
  const [page, setPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");
  const debouncedValue = useDebounce(searchValue, 500);

  const {
    users: {
      data: { total, items: users },
      loading: usersLoading,
      error: usersError,
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
    users: () =>
      GetRequest(debouncedValue ? "/users/search" : "/users", params),
  };

  useFetch(fetches, [page, debouncedValue]);

  return {
    users,
    usersLoading,
    usersError,
    setPage,
    searchValue,
    setSearchValue,
    total,
    skip,
    page,
  };
};

export default useUsers;
