import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const CategoryCard = ({ product }:any) => {
  return (
    <>
      <div className=" bg-white border-[#F3F4F4] p-4 w-full">
        <a className="block relative h-[270px] rounded-md overflow-hidden">
        <h3 className="text-lg font-bold text-center mb-2">{product?.productTitle}</h3>
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={product?.image}
          />
        </a>
      </div>
    </>
  );
};
export default CategoryCard;
