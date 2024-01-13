import Loader from "../../components/Loader";
import Title from "../../components/Title";
import TodoList from "../todo/TodoList";
import Pagination from "../../components/Pagination";
import useUsersTodos from "./useUsersTodos.hooks";

const LIMIT = 5;

const UsersTodos = () => {
  const { todos, todosLoading, todosError, page, setPage } =
    useUsersTodos(LIMIT);

  if (todosLoading) {
    return <Loader main />;
  }

  if (todosError) {
    return <div>{todosError}</div>;
  }
  return (
    <div className="h-100 w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full">
        <Title>Todo List</Title>
        <hr className="my-3" />
        <div>
          <TodoList todos={todos.items} />
        </div>
      </div>
      {!(LIMIT >= todos.total) && (
        <Pagination
          allPages={Math.ceil(todos.total / LIMIT)}
          currentPage={page}
          setCurrentPage={setPage}
        />
      )}
    </div>
  );
};

export default UsersTodos;
