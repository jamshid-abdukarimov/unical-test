import Pagination from "../../components/Pagination";
import Title from "../../components/Title";
import ProductCard from "./ProductCard";

const ProductsList = ({
  products,
  LIMIT,
  total,
  page,
  setPage,
  skip,
  category,
}: {
  products: Product[];
  LIMIT: number;
  total: number;
  page: number;
  setPage: (page: number) => void;
  skip?: number;
  category?: string;
}) => {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-8 max-sm:order-2 col-span-full sm:col-span-3">
      <div className="col-span-full">
        <Title>
          {category ? `Products with category "${category}"` : "Products"}
        </Title>
        <p>
          Showing{" "}
          {skip != undefined
            ? `${skip + 1} - ${skip + products.length}`
            : products?.length}{" "}
          of {total}
        </p>
      </div>
      {products.map((product) => (
        <div
          className="col-span-6 md:col-span-4 lg:col-span-3"
          key={product.id}
        >
          <ProductCard
            id={product.id}
            thumbnail={product.thumbnail}
            price={product.price}
            title={product.title}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
          />
        </div>
      ))}
      {!(LIMIT >= total) && (
        <div className="col-span-full">
          <Pagination
            allPages={Math.ceil(total / LIMIT)}
            currentPage={page}
            setCurrentPage={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsList;
