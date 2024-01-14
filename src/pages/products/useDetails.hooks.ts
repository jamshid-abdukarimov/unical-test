import React from "react";
import { useParams } from "react-router-dom";
import { GetOneRequest } from "../../lib";

const useProductsDetails = () => {
  const { id } = useParams();
  const [state, setState] = React.useState({
    product: null as Product | null,
    imageIndex: 0,
    orderCount: 1,
    loading: false,
    error: null,
  });
  // const [product, setProduct] = React.useState<Product | null>(null);
  // const [imageIndex, setImageIndex] = React.useState(0);
  // const [orderCount, setOrderCount] = React.useState(1);
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);
  React.useLayoutEffect(() => {
    (async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const { data } = await GetOneRequest<Product>("/products", id!);
        setState((prev) => ({ ...prev, product: data }));
      } catch (error: any) {
        console.log(error);
        setState((prev) => ({
          ...prev,
          error: error.response.data.message || "Something went wrong",
        }));
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, []);

  return {
    ...state,
    setImageIndex: (imageIndex: number) =>
      setState((prev) => ({ ...prev, imageIndex })),
    setOrderCount: (orderCount: number) =>
      setState((prev) => ({ ...prev, orderCount })),
  };
};

export default useProductsDetails;
