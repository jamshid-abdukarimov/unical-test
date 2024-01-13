import Button from "../../components/Button";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import TodoList from "./TodoList";
import ButtonLoader from "../../components/BtnLoader";
import useTodo from "./useTodo.hooks";
import Title from "../../components/Title";

const LIMIT = 5;

const TodosPage = () => {
  const {
    addTodo,
    todos,
    todosLoading,
    todosError,
    page,
    setPage,
    todo,
    loading,
    handleChange,
  } = useTodo(LIMIT);

  if (todosLoading) {
    return <Loader main />;
  }

  if (todosError) {
    return <div>{todosError}</div>;
  }

  return (
    <div className="h-100 w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full">
        <form className="mb-4" onSubmit={addTodo}>
          <Title>Your Todo List</Title>
          <div className="flex mt-4 gap-3">
            <Input
              value={todo}
              onChange={handleChange}
              className="w-full"
              placeholder="Add Todo"
            />
            {loading ? (
              <ButtonLoader text="Adding..." />
            ) : (
              <Button type="submit" className="max-w-max">
                Add New Todo
              </Button>
            )}
          </div>
        </form>
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
