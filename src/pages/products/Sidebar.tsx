import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Title from "../../components/Title";

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
          <ul className="flex flex-col gap-2 capitalize">
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/products/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
