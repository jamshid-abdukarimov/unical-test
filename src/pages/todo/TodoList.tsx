import Button from "../../components/Button";
import Icon from "../../components/Icon";

import { mdiTrashCanOutline } from "@mdi/js";
import useTodoList from "./useTodoList.hooks";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  const { deleteTodo, updateTodo } = useTodoList();

  return !todos.length ? (
    <h1 className="text-3xl text-center py-5 uppercase">No Todos</h1>
  ) : (
    todos.map((todo) => (
      <div key={todo.id} className="flex mb-4 items-center gap-5">
        <p
          className={`w-full text-green ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {todo.todo}
        </p>
        <div className="flex gap-3">
          {todo.completed ? (
            <Button
              onClick={() => updateTodo(todo.id, todo.completed)}
              className="max-w-max whitespace-nowrap bg-green-500 hover:bg-green-600"
            >
              Done
            </Button>
          ) : (
            <Button
              onClick={() => updateTodo(todo.id, todo.completed)}
              className="max-w-max whitespace-nowrap bg-fuchsia-500 hover:bg-fuchsia-600"
            >
              Not Done
            </Button>
          )}

          <Icon
            onClick={() => deleteTodo(todo.id)}
            path={mdiTrashCanOutline}
            size={34}
            className="text-red-500 cursor-pointer"
          />
        </div>
      </div>
    ))
  );
};

export default TodoList;
