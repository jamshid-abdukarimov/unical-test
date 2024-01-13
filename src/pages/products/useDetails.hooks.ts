import React from "react";
import { useParams } from "react-router-dom";
import { GetOneRequest } from "../../lib";

const useProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [imageIndex, setImageIndex] = React.useState(0);
  const [orderCount, setOrderCount] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useLayoutEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await GetOneRequest<Product>("/products", id!);
        setProduct(data);
      } catch (error: any) {
        console.log(error);
        setError(error.response.data.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    product,
    imageIndex,
    orderCount,
    loading,
    error,
    setImageIndex,
    setOrderCount,
  };
};

export default useProductsDetails;
