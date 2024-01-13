import toast from "react-hot-toast";

import { DeleteRequest, UpdateRequest } from "../../lib";
import useStore from "../../store";

const useTodoList = () => {
  const {
    todos: {
      data: { items, total },
    },
    setData,
  } = useStore();
  const updateTodo = async (id: number, completed: boolean) => {
    try {
      await UpdateRequest("/todos", `${id}`, {
        completed: !completed,
      });

      setData("todos", {
        items: items.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }

          return todo;
        }),
        total: total,
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const deleteTodo = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this todo?")) return;
    try {
      await DeleteRequest("/todos", `${id}`);
      setData("todos", {
        items: items.filter((todo) => todo.id !== id),
        total: total,
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return {
    updateTodo,
    deleteTodo,
  };
};

export default useTodoList;
