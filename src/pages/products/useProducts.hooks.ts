import React from "react";

import useFetch from "../../hooks/useFetch";
import { GetRequest } from "../../lib";
import useStore from "../../store";
import useDebounce from "../../hooks/useDebounce";

const useProducts = (LIMIT: number) => {
  const [state, setState] = React.useState({
    page: 1,
    searchValue: "",
  });
  const [params, setParams] = React.useState({
    skip: 0,
    q: "",
  });
  const debouncedValue = useDebounce(state.searchValue, 500);

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

  React.useEffect(() => {
    setState((prev) => ({ ...prev, page: 1 }));
    setParams({
      skip: 0,
      q: debouncedValue,
    });
  }, [debouncedValue]);

  React.useEffect(() => {
    setParams((prev) => ({
      ...prev,
      skip: LIMIT * (state.page - 1),
    }));
  }, [state.page]);

  let fetches = {
    products: () =>
      GetRequest(debouncedValue ? "/products/search" : "/products", {
        ...params,
        limit: LIMIT,
        select: "id,title,price,thumbnail,discountPercentage,rating",
      }),
    categories: () => GetRequest("/products/categories"),
  };

  useFetch(fetches, [params]);

  return {
    products,
    productsLoading,
    productsError,
    ...state,
    setPage: (page: number) => setState((prev) => ({ ...prev, page })),
    setSearchValue: (searchValue: string) =>
      setState((prev) => ({ ...prev, searchValue })),
    total,
    categories,
    categoriesLoading,
    categoriesError,
    skip: params.skip,
  };
};

export default useProducts;
