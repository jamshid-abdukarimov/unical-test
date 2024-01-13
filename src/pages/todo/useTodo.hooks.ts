import toast from "react-hot-toast";
import { GetOneRequest, PostRequest } from "../../lib";
import useStore from "../../store";
import React from "react";
import useFetch from "../../hooks/useFetch";

const useTodo = (limit: number) => {
  const [page, setPage] = React.useState(1);
  const [todo, setTodo] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const {
    setData,
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

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const sendData = {
        completed: false,
        todo,
        userId: user.id,
      };
      const { data } = await PostRequest<typeof sendData, Todo>(
        "/todos/add",
        sendData
      );
      setData("todos", {
        items: [data, ...todos.items],
        total: todos.total,
      });
      setTodo("");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  useFetch(fetches, [page]);

  return {
    addTodo,
    todos,
    todosLoading,
    todosError,
    page,
    setPage,
    todo,
    setTodo,
    loading,
    handleChange,
  };
};

export default useTodo;
