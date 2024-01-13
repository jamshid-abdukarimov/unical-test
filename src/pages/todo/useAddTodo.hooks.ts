import toast from "react-hot-toast";
import { PostRequest } from "../../lib";
import React from "react";
import useStore from "../../store";

const useAdd = () => {
  const [loading, setLoading] = React.useState(false);
  const [todo, setTodo] = React.useState("");

  const {
    setData,
    user,
    todos: { data: todos },
  } = useStore();

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

  return {
    addTodo,
    todo,
    loading,
    handleChange,
  };
};

export default useAdd;
