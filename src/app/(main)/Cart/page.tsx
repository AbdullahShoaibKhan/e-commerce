'use client'
import Card from "@/components/card/card1";
import HomeCardList from "@/components/card/homeCardList";
import CategoryImages from "@/components/menu/categoryImages";
import CategoriesMenu from "@/components/menu/categoryMenu";
import Offers from "@/components/menu/offers";
import OfferBanner from "@/components/menu/offersBanner";
import {
  StarIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
const AllCategories = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-10">
      <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-2 space-y-5">
        <div className="flex justify-between">
          <h1 className="xl:text-4xl lg:text-2xl md:text-xl sm:text-xl font-bold">
            MY CART
          </h1>
          <div className="space-x-1">
            <button className=" rounded-full bg-black  xl:py-4 xl:px-3 py-3 px-2 ">
              <p className="xl:text-sm text-xs text-white xl:font-bold font-semibold">
                {" "}
                UPDATE CART
              </p>
            </button>
            <button className="xl:text-sm text-xs text-white xl:font-bold font-semibold rounded-full bg-[#FF4747]  xl:py-4 xl:px-3 py-3 px-2">
              <p>BUY NEW PRODUCTS</p>
            </button>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-y-5">
          <div className="grid grid-cols-4 gap-x-2 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                  <p className="xl:text-md text-sm font-medium">5</p>
                  <PlusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                </div>
                <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="xl:p-3 p-2 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-2 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                  <p className="xl:text-md text-sm font-medium">5</p>
                  <PlusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                </div>
                <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="xl:p-3 p-2 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-2 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                  <p className="xl:text-md text-sm font-medium">5</p>
                  <PlusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                </div>
                <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="xl:p-3 p-2 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-2 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                  <p className="xl:text-md text-sm font-medium">5</p>
                  <PlusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                </div>
                <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="xl:p-3 p-2 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-2 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                  <p className="xl:text-md text-sm font-medium">5</p>
                  <PlusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                </div>
                <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="xl:p-3 p-2 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-2 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                  <p className="xl:text-md text-sm font-medium">5</p>
                  <PlusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                </div>
                <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="xl:p-3 p-2 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-2 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                  <p className="xl:text-md text-sm font-medium">5</p>
                  <PlusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                </div>
                <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="xl:p-3 p-2 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-2 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                  <p className="xl:text-md text-sm font-medium">5</p>
                  <PlusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                </div>
                <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="xl:p-3 p-2 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-2 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                  <p className="xl:text-md text-sm font-medium">5</p>
                  <PlusIcon className="xl:h-4 xl:w-4 h-3 w-3" />
                </div>
                <p className="xl:text-xl lg:text-lg md:text-lg xl:font-bold font-bold text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="xl:p-3 p-2 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col w-full space-y-3 bg-[#F3F4F4] p-4 rounded-lg">
          <p className="xl:text-4xl lg:text-2xl md:text-lg xl:font-extrabold font-bold">
            Cart Totals
          </p>
          <p className="xl:text-md lg:text-md text-sm xl:font-medium lg:font-medium font-normal">
            Add a Gift Card, Promotion Code, Or Voucher
          </p>
          <div className="flex items-center w-full">
            <div className="relative w-full">
              <input
                type="text"
                className="border w-full border-gray-300 rounded-l-full pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Code"
              />
            </div>
            <div className="px-3 py-2 rounded-r-full text-gray-700 bg-[#FF4747]">
              <p className="xl:text-md lg:text:sm text-white xl:font-medium font-normal">
                Apply
              </p>
            </div>
          </div>
          <div className="flex flex-col p-2 bg-white rounded-lg w-full items-center space-y-1">
            <div className="flex justify-between items-center w-full">
              <p className="xl:text-xl lg:text-lg md:text-md font-medium">
                Subtotal:
              </p>
              <p className="xl:text-xl lg:text-lg md:text-md xl:font-bold font-semibold">
                Rs415.00
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="xl:text-xl lg:text-lg md:text-md font-medium">
                Shipping
              </p>
              <p className="xl:text-xl lg:text-lg md:text-md xl:font-bold font-semibold">
                $5.00
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="xl:text-xl lg:text-lg md:text-md font-medium">
                Discount:
              </p>
              <p className="xl:text-xl lg:text-lg md:text-md xl:font-bold font-semibold">
                $10.00
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="xl:text-xl lg:text-lg md:text-md font-medium">
                Tax:
              </p>
              <p className="xl:text-xl lg:text-lg md:text-md xl:font-bold font-semibold">
                $0.00
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="xl:text-xl lg:text-lg md:text-md xl:font-bold font-semibold text-[#FF4747]">
                Total:
              </p>
              <p className="xl:text-xl lg:text-lg md:text-md xl:font-bold font-semibold text-[#FF4747]">
                $510.00
              </p>
            </div>
          </div>
          <div className="flex flex-col p-2 bg-white rounded-lg w-full items-center space-y-1">
            <div className="flex justify-between items-center w-full">
              <p className="xl:text-xl lg:text-lg md:text-md xl:font-bold font-semibold">
                Shipping to
              </p>
              <p className="xl:text-xl lg:text-lg md:text-md xl:font-bold font-semibold text-[#FF4747]">
                Pakistan
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-x-4">
              <p className="xl:text-xl lg:text-lg text-md font-medium">Name</p>
              <p className="xl:text-lg lg:text-md text-sm font-medium text-right">
                User Name
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-x-4">
              <p className="xl:text-xl lg:text-lg text-md font-medium">
                Address:
              </p>
              <p className="xl:text-lg lg:text-md text-sm font-medium text-right">
                Street 66, Manhattan, New York, USA
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-x-4">
              <p className="xl:text-xl lg:text-lg text-md font-medium">
                Email:
              </p>
              <p className="xl:text-lg lg:text-md text-sm font-medium text-right text-wrap">
                support@business.com
              </p>
            </div>
          </div>
          <div className="rounded-full bg-[#FF4747] p-3 full">
            <p className="xl:text-md lg:text-sm text-xs xl:font-bold lg:font-semibold md:font-medium text-white text-center">
              PROCEED TO CHECKOUT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
