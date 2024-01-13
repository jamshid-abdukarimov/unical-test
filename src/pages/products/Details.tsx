import Loader from "../../components/Loader";
import Button from "../../components/Button";
import useProductsDetails from "./useDetails.hooks";

const Details = () => {
  const {
    product,
    imageIndex,
    orderCount,
    loading,
    error,
    setImageIndex,
    setOrderCount,
  } = useProductsDetails();

  if (loading) {
    return <Loader main />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-11 gap-12">
      <div className="col-span-full md:col-span-4 grid grid-cols-5 gap-4">
        <div className="col-span-1 flex flex-col gap-2">
          {product?.images.map((image, index) => (
            <img
              onClick={() => setImageIndex(index)}
              key={image}
              src={image}
              alt={image}
              className={`rounded-sm cursor-pointer ${
                index === imageIndex ? "border-2 border-red-400" : ""
              }`}
            />
          ))}
        </div>
        <div className="col-span-4">
          <img
            src={product?.images[imageIndex]}
            alt={product?.images[imageIndex]}
          />
        </div>
      </div>
      <div className="col-span-7">
        <div className="flex items-center gap-1">
          <svg
            data-v-40da8b10
            width={20}
            height={20}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-test-id="icon__rating-star"
            className="ui-icon  rating-icon"
          >
            <path
              d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
              fill="#F5A623"
            />
          </svg>
          <span className="text-sm">{product?.rating}</span>
        </div>
        <h2 className="text-2xl pt-2 capitalize">{product?.title}</h2>
        <div className="flex gap-10  mt-5">
          <div className="flex flex-col gap-1 font-medium">
            <p>Brand</p>
            <p>Delivery</p>
          </div>
          <div className="flex flex-col gap-1 text-gray-700">
            <p>{product?.brand}</p>
            <p>1 day</p>
          </div>
        </div>
        <hr className="my-8" />
        <p>Count:</p>
        <div className="flex items-center gap-10">
          <div className="flex border border-gray-300 rounded max-w-max mt-2 text-gray-800">
            <button
              className={`w-10 h-10 text-xl ${
                orderCount === 1 ? "opacity-50" : ""
              }`}
              disabled={orderCount === 1}
              onClick={() => setOrderCount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="w-10 h-10 text-lg flex justify-center items-center">
              {orderCount}
            </span>
            <button
              className={`w-10 h-10 text-xl ${
                orderCount === product?.stock ? "opacity-50" : ""
              }`}
              disabled={orderCount === product?.stock}
              onClick={() => setOrderCount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <p className="text-green-700 mt-3">Unit Count: {product?.stock}</p>
        </div>

        <p className="mt-5">Price: </p>
        <div className="flex gap-7 items-center">
          <p className="text-xl">${product?.price! * orderCount} </p>
          <p className="line-through text-gray-500">
            $
            {(
              product?.price! /
              ((100 - product?.discountPercentage!) / 100)
            ).toFixed(0)}
          </p>
        </div>
        <Button className="mt-5 bg-violet-500 hover:bg-violet-600 max-w-max hidden sm:block">
          Add to cart
        </Button>
        <hr className="my-5" />
        <h3 className="text-lg font-medium">About this item</h3>
        <p className="text-sm text-gray-700 mt-2">{product?.description}</p>
      </div>
    </div>
  );
};

export default Details;
