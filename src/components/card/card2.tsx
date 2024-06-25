import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Card2 =({ product }:any)=> {
  return (
    <>
      <div className=" bg-[#F3F4F4] border-[#F3F4F4] p-4 w-full">
        <a className="block relative h-[250px] rounded-md overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={product?.image}
          />
        </a>
        <div className="mt-3">
          <h3 className="text-md font-bold mb-1">{product?.productTitle}</h3>
          <div className="flex flex-row">
          {[...Array(product?.starsCount)].map((_, index) => (
              <StarIcon key={index} className="h-3 w-3 text-[#ffa947]" />
            ))}
            <p className="text-xs font-thin">{product?.rating}</p>
            <p className="text-xs font-thin">({product?.reviewsCount} Reviews)</p>
          </div>
          <div className="flex justify-between">
            <p className="mt-1 text-sm text-[#FF4747]">${product?.price.toFixed(2)}</p>
            <div className="space-x-2">
              <button className="p-1 bg-black rounded-full shadow-md">
                <HeartIcon className="w-5 h-5 text-white" />
              </button>
              <button className="p-1 bg-[#FF4747] rounded-full shadow-md">
                <ShoppingCartIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card2;
