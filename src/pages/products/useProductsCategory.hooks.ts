import React from "react";

import useFetch from "../../hooks/useFetch";
import { GetOneRequest, GetRequest } from "../../lib";
import useStore from "../../store";
import { useParams } from "react-router-dom";

const useProductsCategory = (LIMIT: number) => {
  const { category } = useParams();
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

  const params = React.useMemo(
    () => ({
      limit: LIMIT,
      skip,
      select: "id,title,price,thumbnail,discountPercentage,rating",
    }),
    [LIMIT, skip]
  );

  let fetches = {
    products: () => GetOneRequest("/products", `category/${category}`, params),
    categories: () => GetRequest("/products/categories"),
  };

  useFetch(fetches, [page, category]);

  return {
    products,
    productsLoading,
    productsError,
    category,
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
