"use client";
import {
  MagnifyingGlassIcon,
  UserIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

export default function MiddleNavbar() {
  return (
    <div className="bg-white">
      <header className="text-gray-600 body-font">
        <p className="flex h-7 items-center justify-center bg-indigo-600  text-sm font-medium text-white">
          Get free delivery on orders over $100
        </p>
        <div className="container mx-auto flex flex-row justify-evenly flex-wrap mt-2 md:flex-row items-center">
          {/* <div className="flex flex-row"> */}
          <div className="text-3xl font-extrabold">
            <span className="text-[#FF4747]">Logo</span>Site
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-semibold">Language</p>
            <div className="flex flex-row space-x-1 items-center">
              <FlagIcon
                className="h-5 w-5 flex-shrink-0 text-gray-700 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold">English</p>
            </div>
          </div>
          {/* </div> */}
          <div className="flex items-center w-1/3">
            <div className="px-3 py-3 rounded-l-full text-gray-700 bg-[#FF4747]">
              <p className="text-sm text-white font-bold">Category</p>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                className="border w-full border-gray-300 rounded-r-full pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search..."
              />
              <MagnifyingGlassIcon className="absolute right-2 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          {/* <div className="flex flex-row space-x-3 items-center"> */}
          <div className="text-sm font-bold">Weekly Deals</div>
          <div className="text-sm font-bold">Special Offers</div>
          <div className="text-sm font-bold">New Arrivals</div>
          <div className="text-sm text-white font-bold rounded-full bg-[#FF4747]  p-3">
            <div className="flex flex-row space-x-1 items-center px-2">
              <UserIcon
                className="h-6 w-6 flex-shrink-0 text-white group-hover:text-gray-500"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold">Sign In / Register </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </header>
    </div>
  );
}
