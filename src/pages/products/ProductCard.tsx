import { mdiCartPlus } from "@mdi/js";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Icon from "../../components/Icon";

const ProductCard = ({
  id,
  thumbnail,
  title,
  price,
  rating,
  discountPercentage,
}: Partial<Product>) => {
  return (
    <div>
      <Link to={`/products/details/${id}`}>
        <img
          src={thumbnail}
          alt={title}
          className="aspect-square w-full h-full object-cover rounded-md"
        />
      </Link>
      <Link
        to={`/products/details/${id}`}
        className="text-lg sm:text-xl pt-2 whitespace-nowrap text-ellipsis overflow-hidden block"
      >
        {title}
      </Link>
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
        <span className="text-sm">{rating}</span>
      </div>
      <div className="mt-3 flex justify-between text-sm text-gray-500 font-medium">
        <span className="line-through">
          ${(price! / ((100 - discountPercentage!) / 100)).toFixed(0)}
        </span>
        <span className="line-through">{discountPercentage} %</span>
      </div>
      <p className="font-medium text-xl mt-1">${price}</p>
      <Button className="mt-5 bg-violet-500 hover:bg-violet-600 max-w-max hidden sm:block">
        Add to cart
      </Button>
      <Icon
        className="sm:hidden bg-violet-500 hover:bg-violet-600 text-white rounded-md mt-3"
        w="w-12"
        h="h-8"
        size={24}
        path={mdiCartPlus}
      />
    </div>
  );
};

export default ProductCard;
