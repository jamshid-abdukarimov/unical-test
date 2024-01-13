import Loader from "../../components/Loader";
import useProducts from "./useProducts.hooks";
import ProductsList from "./ProductsList";
import Sidebar from "./Sidebar";

const LIMIT = 24;

const ProductsPage = () => {
  const {
    page,
    products,
    productsError,
    productsLoading,
    searchValue,
    setPage,
    setSearchValue,
    total,
    categories,
    categoriesError,
    categoriesLoading,
    skip,
  } = useProducts(LIMIT);

  if (productsLoading || categoriesLoading) {
    return <Loader main />;
  }

  if (productsError || categoriesError) {
    return <div>{productsError || categoriesError}</div>;
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        <ProductsList
          products={products}
          LIMIT={LIMIT}
          total={total}
          page={page}
          setPage={setPage}
          skip={skip}
        />
        <Sidebar
          canSearch={true}
          categories={categories}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </>
  );
};

export default ProductsPage;
