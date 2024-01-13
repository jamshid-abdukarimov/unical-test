import { GetOneRequest } from "../../lib";
import useStore from "../../store";
import React from "react";
import useFetch from "../../hooks/useFetch";

const useTodo = (limit: number) => {
  const [page, setPage] = React.useState(1);
  const {
    user,
    todos: { data: todos, loading: todosLoading, error: todosError },
  } = useStore();
  const fetches = {
    todos: () =>
      GetOneRequest("/todos", `user/${user.id}`, {
        skip: limit * (page - 1),
        limit,
      }),
  };

  useFetch(fetches, [page]);

  return {
    todos,
    todosLoading,
    todosError,
    page,
    setPage,
  };
};

export default useTodo;
