import Title from "../../components/Title";
import Input from "../../components/Input";
import ButtonLoader from "../../components/BtnLoader";
import Button from "../../components/Button";
import useAdd from "./useAddTodo.hooks";

const AddForm = () => {
  const { addTodo, handleChange, loading, todo } = useAdd();

  return (
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
  );
};

export default AddForm;
