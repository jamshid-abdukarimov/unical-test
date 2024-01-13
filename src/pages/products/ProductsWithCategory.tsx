import { useParams } from "react-router-dom";
import useProductsCategory from "./useProductsCategory.hooks";
import ProductsList from "./ProductsList";
import Loader from "../../components/Loader";
import Sidebar from "./Sidebar";

const LIMIT = 24;
const ProductsWithCategory = () => {
  const { category } = useParams();
  const {
    page,
    products,
    productsError,
    productsLoading,
    setPage,
    total,
    skip,
    categories,
    categoriesError,
    categoriesLoading,
  } = useProductsCategory(LIMIT, category!);

  if (productsLoading || categoriesLoading) {
    return <Loader main />;
  }

  if (productsError || categoriesError) {
    return <div>{productsError || categoriesError}</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      <ProductsList
        products={products}
        LIMIT={LIMIT}
        total={total}
        page={page}
        setPage={setPage}
        category={category}
        skip={skip}
      />

      <Sidebar canSearch={false} categories={categories} />
    </div>
  );
};

export default ProductsWithCategory;
