import React from "react";

import useFetch from "../../hooks/useFetch";
import { GetRequest } from "../../lib";
import useStore from "../../store";
import useDebounce from "../../hooks/useDebounce";

const useProducts = (LIMIT: number) => {
  const [page, setPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");
  const debouncedValue = useDebounce(searchValue, 500);

  const {
    products: {
      data: { total, items: products },
      loading: productsLoading,
      error: productsError,
    },
    categories: {
      data: categories,
      loading: categoriesLoading,
      error: categoriesError,
    },
  } = useStore();

  const skip = LIMIT * (page - 1);

  const params: {
    limit: number;
    skip: number;
    q: string;
    select: string;
  } = {
    limit: LIMIT,
    skip,
    q: debouncedValue,
    select: "id,title,price,thumbnail,discountPercentage,rating",
  };

  React.useEffect(() => {
    setPage(1);
    params.skip = 0;
    params.q = debouncedValue;
  }, [debouncedValue]);

  let fetches = {
    products: () =>
      GetRequest(debouncedValue ? "/products/search" : "/products", params),
    categories: () => GetRequest("/products/categories"),
  };

  useFetch(fetches, [page, debouncedValue]);

  return {
    products,
    productsLoading,
    productsError,
    page,
    setPage,
    searchValue,
    setSearchValue,
    total,
    categories,
    categoriesLoading,
    categoriesError,
    skip,
  };
};

export default useProducts;
