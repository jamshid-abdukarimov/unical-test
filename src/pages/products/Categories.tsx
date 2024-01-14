import { Link } from "react-router-dom";

const Categories = ({ categories }: { categories: string[] }) => {
  return (
    <ul className="flex flex-col gap-2 capitalize">
      {categories.map((category) => (
        <li key={category}>
          <Link to={`/products/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
