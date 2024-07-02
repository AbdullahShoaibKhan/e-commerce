// const FeaturedFilters = ({ data }: any) => {
//   const words = data.name.split(" ");
//   return (
//     <div className="flex flex-row flex-wrap lg:justify-between md:justify-between sm:justify-center xs:justify-center py-2 flex-1">
//       <p className="text-3xl font-extrabold">
//         {words.map((word:any, index:any) =>
//           index === words.length - 1 ? (
//             <span key={index} className="text-[#FF4747]">
//               {word.toUpperCase()}
//             </span>
//           ) : (
//             `${word.toUpperCase()} `
//           )
//         )}
//       </p>
//       <div className="flex flex-row felx-wrap space-x-1 items-center">
//         <p className="p-2 xl:text-lg lg:text-md md:text-sm sm:text-xs  xl:font-bold lg:font-semibold md:font-medium sm:font-normal text-center">VIEW All</p>
//         {data?.filters?.map((filter: any, index: any) => (
//           <p
//             key={index}
//             className="p-2 xl:text-lg lg:text-md md:text-sm sm:text-xs  xl:font-bold lg:font-semibold md:font-medium sm:font-normal bg-[#F3F4F4] rounded-md capitalize text-center"
//           >
//             {filter.replace(/_/g, " ")}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default FeaturedFilters;

// 'use client'

// import { useState } from 'react';

// const FeaturedFilters = ({ data }: any) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const words = data.name.split(" ");

//   return (
//     <div className="flex flex-row flex-wrap lg:justify-between md:justify-between sm:justify-center xs:justify-center py-2 flex-1">
//       <p className="text-3xl font-extrabold">
//         {words.map((word: any, index: any) =>
//           index === words.length - 1 ? (
//             <span key={index} className="text-[#FF4747]">
//               {word.toUpperCase()}
//             </span>
//           ) : (
//             `${word.toUpperCase()} `
//           )
//         )}
//       </p>
//       <div className="hidden md:flex flex-row flex-wrap space-x-1 items-center">
//         <p className="p-2 xl:text-lg lg:text-md md:text-sm sm:text-xs xl:font-bold lg:font-semibold md:font-medium sm:font-normal text-center">VIEW All</p>
//         {data?.filters?.map((filter: any, index: any) => (
//           <p
//             key={index}
//             className="p-2 xl:text-lg lg:text-md md:text-sm sm:text-xs xl:font-bold lg:font-semibold md:font-medium sm:font-normal bg-[#F3F4F4] rounded-md capitalize text-center"
//           >
//             {filter.replace(/_/g, " ")}
//           </p>
//         ))}
//       </div>
//       <div className="flex md:hidden flex-col items-center relative">
//         <button 
//           onClick={() => setIsOpen(!isOpen)} 
//           className="flex items-center space-x-1 p-2 bg-gray-100 rounded-md"
//         >
//           <span className="text-md font-medium">Filter</span>
//         </button>
//         {isOpen && (
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//             onClick={() => setIsOpen(false)}
//           >
//             <div 
//               className="bg-white rounded-md shadow-lg p-4 w-11/12 max-w-lg"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <p className="p-2 text-left bg-gray-200 rounded-t-md">VIEW All</p>
//               {data?.filters?.map((filter: any, index: any) => (
//                 <p
//                   key={index}
//                   className="p-2 text-sm font-medium bg-[#F3F4F4] rounded-b-md capitalize text-left"
//                 >
//                   {filter.replace(/_/g, " ")}
//                 </p>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeaturedFilters;

'use client'

import { useState, useEffect, useRef } from 'react';
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";
import{ FunnelIcon }from '@heroicons/react/24/solid';

const FeaturedFilters = ({ data }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const words = data.name.split(" ");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap lg:justify-between md:justify-between sm:justify-between xs:justify-center py-2 flex-1 relative">
      <p className="text-3xl font-extrabold">
        {words.map((word: any, index: any) =>
          index === words.length - 1 ? (
            <span key={index} className="text-[#FF4747]">
              {word.toUpperCase()}
            </span>
          ) : (
            `${word.toUpperCase()} `
          )
        )}
      </p>
      <div className="hidden md:flex flex-row flex-wrap space-x-1 items-center">
        <p className="p-2 xl:text-lg lg:text-md md:text-sm sm:text-xs xl:font-bold lg:font-semibold md:font-medium sm:font-normal text-center">VIEW All</p>
        {data?.filters?.map((filter: any, index: any) => (
          <p
            key={index}
            className="p-2 xl:text-lg lg:text-md md:text-sm sm:text-xs xl:font-bold lg:font-semibold md:font-medium sm:font-normal bg-[#F3F4F4] rounded-md capitalize text-center"
          >
            {filter.replace(/_/g, " ")}
          </p>
        ))}
      </div>
      <div className="flex md:hidden flex-col items-center relative z-10">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center space-x-1 p-2 bg-gray-100 rounded-md"
        >
          <span className="text-md font-medium">Filter</span>
          <FunnelIcon className="h-5 w-5 text-[#FF4747]" />
        </button>
        {isOpen && (
          <div 
            ref={dropdownRef}
            className="absolute left-0 mt-2 max-w-sm bg-white rounded-md shadow-lg z-20 w-auto"
          >
            <div className="flex justify-between items-center p-2">
              <p className="text-left bg-gray-200 rounded-t-md flex-1 text-nowrap">VIEW All</p>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            {data?.filters?.map((filter: any, index: any) => (
              <p
                key={index}
                className="p-2 text-sm font-medium bg-[#F3F4F4] rounded-b-md capitalize text-left text-nowrap"
              >
                {filter.replace(/_/g, " ")}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedFilters;
