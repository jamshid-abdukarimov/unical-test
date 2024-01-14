import { GetOneRequest } from "../../lib";
import useStore from "../../store";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const useUsersTodos = (limit: number) => {
  const { id } = useParams();
  const [page, setPage] = React.useState(1);
  const {
    data: todos,
    loading: todosLoading,
    error: todosError,
  } = useStore().todos;
  const fetches = {
    todos: () =>
      GetOneRequest("/todos", `user/${id}`, {
        skip: limit * (page - 1),
        limit,
      }),
  };

  useFetch(fetches, [page]);

  return { todos, todosLoading, todosError, page, setPage };
};

export default useUsersTodos;
