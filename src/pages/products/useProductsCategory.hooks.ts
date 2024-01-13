import React from "react";

import useFetch from "../../hooks/useFetch";
import { GetOneRequest, GetRequest } from "../../lib";
import useStore from "../../store";

const useProductsCategory = (LIMIT: number, category: string) => {
  const [page, setPage] = React.useState(1);

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
    select: string;
  } = {
    limit: LIMIT,
    skip,
    select: "id,title,price,thumbnail,discountPercentage,rating",
  };

  let fetches = {
    products: () => GetOneRequest("/products", `category/${category}`, params),
    categories: () => GetRequest("/products/categories"),
  };

  useFetch(fetches, [page, category]);

  return {
    products,
    productsLoading,
    productsError,

    page,
    setPage,
    total,
    skip,
    categories,
    categoriesError,
    categoriesLoading,
  };
};

export default useProductsCategory;
