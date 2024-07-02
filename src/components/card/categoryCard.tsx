import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const CategoryCard = ({ product }:any) => {
  return (
    <>
      <div className=" bg-white border-[#F3F4F4] p-4 w-full">
        <a className="block relative xl:h-[290px] lg:h-[270px] md:h-[240px] sm:h-[240px] rounded-md overflow-hidden">
        <h3 className="xl:text-xl lg:text-lg md:text-lg sm:text-lg font-bold text-center mb-2">{product?.productTitle}</h3>
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
