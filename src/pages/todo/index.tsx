import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import TodoList from "./TodoList";
import useTodo from "./useTodo.hooks";
import AddForm from "./AddForm";

const LIMIT = 5;

const TodosPage = () => {
  const { todos, todosLoading, todosError, page, setPage } = useTodo(LIMIT);

  if (todosLoading) {
    return <Loader main />;
  }

  if (todosError) {
    return <div>{todosError}</div>;
  }

  return (
    <div className="h-100 w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full">
        <AddForm />
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

export default TodosPage;
