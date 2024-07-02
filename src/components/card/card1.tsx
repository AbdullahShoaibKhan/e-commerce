import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

//   return (
//     <>
//       <div className=" bg-white border-[#F3F4F4] p-4 w-full">
//         <Link href={`/product`}>
//           <div className="block relative h-[250px] rounded-md overflow-hidden">
//             <img
//               alt="ecommerce"
//               className="object-cover object-center w-full h-full block"
//               src="https://dummyimage.com/420x260"
//             />
//             <div className="absolute top-0 right-0 flex p-1 bg-[#FF4747] rounded-sm">
//               <p className="text-sm text-white font-thin"> 20% OFF</p>
//             </div>
//             <div className="absolute bottom-2 right-2 flex space-x-2">
//               <button className="p-1 bg-black rounded-full shadow-md">
//                 <HeartIcon className="w-5 h-5 text-white" />
//               </button>
//               <button className="p-1 bg-[#FF4747] rounded-full shadow-md">
//                 <ShoppingCartIcon className="w-5 h-5 text-white" />
//               </button>
//             </div>
//           </div>
//           <div className="mt-3">
//             <h3 className="text-md font-bold mb-1">Ut AD ASDSD ASD ASDdsdfg</h3>
//             <div className="flex flex-row">
//               <StarIcon className="h-3 w-3 text-[#ffa947] " />
//               <StarIcon className="h-3 w-3 text-[#ffa947]" />
//               <StarIcon className="h-3 w-3 text-[#ffa947]" />
//               <StarIcon className="h-3 w-3 text-[#ffa947]" />
//               <StarIcon className="h-3 w-3 text-[#ffa947]" />
//               <p className="text-xs font-thin">4.6</p>
//               <p className="text-xs font-thin">(129 Reviews)</p>
//             </div>
//             <p className="mt-1 text-sm text-[#FF4747]">$16.00</p>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// };
// export default Card;
const Card = ({ product }:any) => {
  console.log(product)
  return (
    <div className="bg-white border-[#F3F4F4] p-4 w-full">
      <Link href={`/product`}>
        <div className="block relative xl:h-[350px] lg:h-[300px] md:h-[250px] sm:h-[250px] rounded-md overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={product?.image}
          />
          <div className="absolute top-0 right-0 flex p-1 bg-[#FF4747] rounded-sm">
            <p className="text-md text-white font-semibold">20% OFF</p>
          </div>
          <div className="absolute bottom-2 right-2 flex space-x-2">
            <button className="xl:p-3 lg:p-2 md:p-2 sm:p-2 bg-black rounded-full shadow-md">
              <HeartIcon className="xl:w-7 xl:h-7 lg:w-7 lg:h-7 md:w-5 md:h-5 sm:w-5 sm:h-5 text-white" />
            </button>
            <button className="xl:p-3 lg:p-2 md:p-2 sm:p-2 bg-[#FF4747] rounded-full shadow-md">
              <ShoppingCartIcon className="xl:w-7 xl:h-7 lg:w-7 lg:h-7 md:w-5 md:h-5 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="xl:text-xl lg:text-lg md:text-md sm:text-md font-bold mb-1">{product?.productTitle}</h3>
          <div className="flex flex-row items-center">
            {[...Array(product?.starsCount)].map((_, index) => (
              <StarIcon key={index} className="xl:h-4 xl:w-4 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-2 sm:h-2 w-3 h-3 text-[#ffa947]" />
            ))}
            <p className="text-sm font-normal">{product?.rating}</p>
            <p className="text-sm font-normal">({product?.reviewsCount} Reviews)</p>
          </div>
          <p className="mt-1 xl:text-2xl lg:text-lg md:text-md sm:text-md xs:md:text-sm text-[#FF4747] font-bold">${product?.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
