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
    <div className="grid grid-cols-3 gap-2 my-10">
      <div className="col-span-2 space-y-5">
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold">MY CART</h1>
          <div className="space-x-1">
            <button className=" rounded-full bg-black  p-3">
              <p className="text-xs text-white font-medium"> UPDATE CART</p>
            </button>
            <button className="text-xs text-white font-medium rounded-full bg-[#FF4747]  p-3">
              <p>BUY NEW PRODUCTS</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-5">
          <div className="grid grid-cols-4 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="text-md font-semibold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="h-3 w-3" />
                  <p className="text-sm font-medium">5</p>
                  <PlusIcon className="h-3 w-3" />
                </div>
                <p className="text-md font-medium text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="text-md font-semibold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="h-3 w-3" />
                  <p className="text-sm font-medium">5</p>
                  <PlusIcon className="h-3 w-3" />
                </div>
                <p className="text-md font-medium text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="text-md font-semibold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="h-3 w-3" />
                  <p className="text-sm font-medium">5</p>
                  <PlusIcon className="h-3 w-3" />
                </div>
                <p className="text-md font-medium text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="text-md font-semibold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="h-3 w-3" />
                  <p className="text-sm font-medium">5</p>
                  <PlusIcon className="h-3 w-3" />
                </div>
                <p className="text-md font-medium text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="text-md font-semibold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="h-3 w-3" />
                  <p className="text-sm font-medium">5</p>
                  <PlusIcon className="h-3 w-3" />
                </div>
                <p className="text-md font-medium text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="text-md font-semibold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="h-3 w-3" />
                  <p className="text-sm font-medium">5</p>
                  <PlusIcon className="h-3 w-3" />
                </div>
                <p className="text-md font-medium text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="text-md font-semibold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="h-3 w-3" />
                  <p className="text-sm font-medium">5</p>
                  <PlusIcon className="h-3 w-3" />
                </div>
                <p className="text-md font-medium text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 ">
            <img className="h-20 w-20 mx-3 p-2" src="/beauty.jpg" />
            <div className="flex flex-col justify-between col-span-2">
              <p className="text-md font-semibold w-full text-wrap">
                Heimer Miller Sofa ( Mint Condition )
              </p>
              <div className="flex space-x-2 ">
                <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                  <MinusIcon className="h-3 w-3" />
                  <p className="text-sm font-medium">5</p>
                  <PlusIcon className="h-3 w-3" />
                </div>
                <p className="text-md font-medium text-[#FF4747] self-center">
                  $100.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-3 bg-[#FF4747] rounded-full shadow-md">
                <TrashIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col w-full space-y-3 bg-[#F3F4F4] p-4 rounded-lg">
            <p className="text-2xl font-extrabold">Cart Totals</p>
            <p className="text-xs font-thin">Add a Gift Card, Promotion Code, Or Voucher</p>
          <div className="flex items-center w-full">
            <div className="relative w-full">
              <input
                type="text"
                className="border w-full border-gray-300 rounded-l-full pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Code"
              />
            </div>
            <div className="px-3 py-2 rounded-r-full text-gray-700 bg-[#FF4747]">
              <p className="text-xs text-white font-thin">Apply</p>
            </div>
          </div>
          <div className="flex flex-col p-2 bg-white rounded-lg w-full items-center space-y-1">
            <div className="flex justify-between items-center w-full">
              <p className="text-xs font-medium">Subtotal:</p>
              <p className="text-sm font-semibold ">Rs415.00</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xs font-medium">Shipping</p>
              <p className="text-sm font-semibold ">$5.00</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xs font-medium">Discount:</p>
              <p className="text-sm font-semibold ">$10.00</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xs font-medium">Tax:</p>
              <p className="text-sm font-semibold ">$0.00</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xs font-medium text-[#FF4747]">Total:</p>
              <p className="text-sm font-semibold text-[#FF4747]">$510.00</p>
            </div>
          </div>
          <div className="flex flex-col p-2 bg-white rounded-lg w-full items-center space-y-1">
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-semibold">Shipping to</p>
              <p className="text-sm font-medium text-[#FF4747]">Pakistan</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xs font-medium">Name</p>
              <p className="text-sm font-semibold ">User Name</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xs font-medium">Address:</p>
              <p className="text-sm font-semibold ">Street 66, Manhattan, New York, USA</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xs font-medium">Email:</p>
              <p className="text-sm font-semibold ">support@business.com</p>
            </div>
          </div>
          <div className="rounded-full bg-[#FF4747] p-3 full">
            <p className="text-xs font-thin text-white text-center">
              PROCEED TO CHECKOUT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
