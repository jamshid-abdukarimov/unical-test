import Input from "../../components/Input";
import Title from "../../components/Title";
import Categories from "./Categories";

interface Props {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
  categories: string[];
  canSearch: boolean;
}

const Sidebar = ({
  searchValue,
  setSearchValue,
  categories,
  canSearch,
}: Props) => {
  return (
    <div className="col-span-full max-sm:order-1 sm:col-span-1">
      <div className="sticky top-16 pb-8">
        {canSearch && (
          <Input
            text="Search"
            value={searchValue}
            type="search"
            placeholder="Search for products..."
            onChange={(e) => setSearchValue!(e.target.value)}
          />
        )}
        <div className="mt-5">
          <Title>Categories</Title>
          <Categories categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
