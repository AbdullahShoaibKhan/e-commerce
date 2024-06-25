import {
  StarIcon,
  PlusIcon,
  MinusIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

import { StarIcon as Star } from "@heroicons/react/24/outline";
const Product = () => {
  return (
    <>
      <section className="mx-10">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3  pb-2 mx-auto">
          <div className="md:col-span-3 col-span-3 space-y-2 relative  p-3">
            <div className="border rounded-md h-[350px] p-3">
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="w-full h-full object-cover rounded-md object-center block"
              />
            </div>
            <div className="grid grid-cols-5 h-[70px] justify-between">
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className=" h-full px-1 object-cover rounded-md object-center "
              />
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="px-1 h-full  object-cover rounded-md object-center "
              />
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="px-1 h-full object-cover rounded-md object-center "
              />
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="px-1 h-full object-cover rounded-md object-center "
              />
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="px-1 h-full object-cover rounded-md object-center "
              />
            </div>
          </div>
          <div className="col-span-4 ">
            <h1 className="text-3xl font-extrabold">
              2020 Apple Macbook Pro With Apple M1 Chip(13-inch, 8GB RAM, 512GB
              SSD Storage)
            </h1>
            <div className="flex flex-row space-x-1 py-1 items-center">
              <p className="p-2 text-xs font-semibold bg-[#F3F4F4] rounded-lg">
                OnlineStoreBuy
              </p>
              <p className="p-2 text-xs font-semibold bg-[#F3F4F4] rounded-lg">
                Brand
              </p>
              <p className="p-2 text-xs font-semibold bg-[#F3F4F4] rounded-lg">
                Apple
              </p>
            </div>
            <div className=" grid grid-cols-3">
              <div className="col-span-2 space-y-1">
                <div className="flex flex-row items-center py-1 space-x-1">
                  <StarIcon className="h-3 w-3 text-[#ffa947] " />
                  <StarIcon className="h-3 w-3 text-[#ffa947]" />
                  <StarIcon className="h-3 w-3 text-[#ffa947]" />
                  <StarIcon className="h-3 w-3 text-[#ffa947]" />
                  <StarIcon className="h-3 w-3 text-[#ffa947]" />
                  <p className="text-sm font-semibold">
                    {" "}
                    4.6{" "}
                    <span className="text-sm font-semibold">
                      {" "}
                      (129 Reviews){" "}
                    </span>
                  </p>
                </div>
                <p className="text-sm font-semibold py-2">
                  Availability:{" "}
                  <span className="text-sm font-semibold text-[#FF4747]">
                    34 in stock
                  </span>
                </p>
                <div className="pb-3">
                  <p className="text-sm font-medium pb-1">
                    Color: <span className="text-sm font-semibold">Silver</span>
                  </p>
                  <div className="flex space-x-2 py-1">
                    <p className="h-9 w-9 bg-black"></p>
                    <p className="h-9 w-9 bg-[#FF4747]"></p>
                    <p className="h-9 w-9 bg-[#56ff47]"></p>
                  </div>
                </div>
                <p className="text-xs font-medium p-0">
                  SKU:{" "}
                  <span className="text-xs font-medium text-[#FF4747]">
                    MSQ211
                  </span>
                </p>
                <p className="text-xs font-medium p-0">
                  Category:{" "}
                  <span className="text-xs font-medium text-[#FF4747]">
                    Electronics
                  </span>
                </p>
                <div className="my-3">
                  <p className="text-sm font-medium pb-1">
                    Capacity:{" "}
                    <span className="text-sm font-semibold">512GB</span>
                  </p>
                  <div className="flex space-x-2 py-1">
                    <div className="h-[80px] w-[110px] bg-[#F3F4F4] text-center p-2 rounded-md">
                      <p className="text-sm font-medium text-[#FF4747] pb-1">
                        512GB
                      </p>
                      <p className="text-xs font-thin  pb-1">3 Options from</p>
                      <p className="text-sm font-medium pb-1">$2,124.23</p>
                    </div>
                    <div className="h-[80px] w-[110px] bg-[#F3F4F4] text-center p-2 rounded-md">
                      <p className="text-sm font-medium text-[#FF4747] pb-1">
                        1TB
                      </p>
                      <p className="text-xs font-thin  pb-1">3 Options from</p>
                      <p className="text-sm font-medium pb-1">$2,124.23</p>
                    </div>
                  </div>
                  <p className="text-sm my-1 font-semibold ">View More</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col w-full space-y-3">
                  <div className="flex justify-between p-2 bg-[#F3F4F4] rounded-lg w-full items-center">
                    <p className="text-xs font-medium">Quantity</p>
                    <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                      <MinusIcon className="h-3 w-3" />
                      <p className="text-xs font-medium">5</p>
                      <PlusIcon className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="flex flex-col p-2 bg-[#F3F4F4] rounded-lg w-full items-center space-y-1">
                    <div className="flex justify-between items-center w-full">
                      <p className="text-xs font-semibold">Discount:</p>
                      <p className="text-sm font-medium text-[#FF4747]">
                        Rs5.00(13%)
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-xs font-semibold">You Save</p>
                      <p className="text-sm font-medium text-[#FF4747]">
                        $100.00(10%)
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-xs font-semibold">List Price:</p>
                      <p className="text-sm font-medium text-[#FF4747]">
                        $949.00
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-xs font-semibold">Price:</p>
                      <p className="text-sm font-medium text-[#FF4747]">
                        Rs.419000
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#FF4747] p-3 full">
                    <p className="text-xs font-semibold text-white text-center">
                      ADD TO CART{" "}
                    </p>
                  </div>
                  <div className="flex flex-col p-2 bg-[#F3F4F4] rounded-lg w-full space-y-1">
                    <p className="text-lg font-bold">Return & Warranty</p>
                    <div className="flex space-x-1 items-center w-full">
                      <CheckBadgeIcon className="h-5 w-5 text-[#FF4747] items-center" />
                      <p className="text-xs font-medium">100% Authentic</p>
                    </div>
                    <div className="flex space-x-1 items-center w-full">
                      <CheckBadgeIcon className="h-7 w-7 text-[#FF4747] items-center" />
                      <p className="text-xs font-medium">
                        14 days easy return. Change of Mind Applicable
                      </p>
                    </div>
                    <div className="flex space-x-1 items-center w-full">
                      <ShieldCheckIcon className="h-5 w-5 text-[#FF4747] items-center" />
                      <p className="text-xs font-medium">
                        Warranty not available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-10 my-4">
        <div className="space-y-4">
          <p className="text-2xl font-extrabold p-2 bg-[#F3F4F4] rounded-md w-full">
            Description
          </p>
          <p className="text-xs font-semibold px-2">
            This is Apple original Product. This is a very Good Machine. It
            works Very Fast.This is Apple original Product. This is a very Good
            Machine. It works Very Fast.This is Apple original Product. This is
            a very Good Machine. It works Very Fast
          </p>
        </div>
      </section>
      <section className="mx-10 my-4 space-y-4">
        <p className="text-2xl font-extrabold p-2 bg-[#F3F4F4] rounded-md w-full">
          Additioanl Information
        </p>
        <div className="grid grid-cols-7 px-2">
          <div className="col-span-1 space-y-2">
            <p className="text-xs font-medium">Product Type</p>
            <p className="text-xs font-medium">Availability</p>
            <p className="text-xs font-medium">Series</p>
            <p className="text-xs font-medium">Model</p>
            <p className="text-xs font-medium">OS Version</p>
            <p className="text-xs font-medium">Processor</p>
            <p className="text-xs font-medium">Generation</p>
            <p className="text-xs font-medium">Speed</p>
            <p className="text-xs font-medium">Screen Size</p>
            <p className="text-xs font-medium">Max Res</p>
          </div>
          <div className="col-span-6 space-y-2">
            <p className="text-xs font-semibold">Laptop</p>
            <p className="text-xs font-semibold">In Stock</p>
            <p className="text-xs font-semibold">HP, NoteBook</p>
            <p className="text-xs font-semibold">2L4XY23</p>
            <p className="text-xs font-semibold">DOS</p>
            <p className="text-xs font-semibold">Intel Core i3</p>
            <p className="text-xs font-semibold">1th Generation</p>
            <p className="text-xs font-semibold">
              1.7 1 4.1 Ghz, 13-1115G4, 6MB Cache, 2 Cores, 4 Threads
            </p>
            <p className="text-xs font-semibold">15.6&quot;</p>
            <p className="text-xs font-semibold">1920 x 1080:Full HD</p>
          </div>
        </div>
      </section>
      <section className="mx-10 my-4 space-y-4">
        <p className="text-2xl font-extrabold p-2 bg-[#F3F4F4] rounded-md w-full">
          Reviews
        </p>
        <div className="grid grid-cols-7 gap-x-10">
          <div className="col-span-2 space-y-4">
            <div>
              <div className="flex flex-row items-center py-1 space-x-1">
                <StarIcon className="h-3 w-3 text-[#ffa947] " />
                <StarIcon className="h-3 w-3 text-[#ffa947]" />
                <StarIcon className="h-3 w-3 text-[#ffa947]" />
                <StarIcon className="h-3 w-3 text-[#ffa947]" />
                <StarIcon className="h-3 w-3 text-[#ffa947]" />
                <p className="text-sm font-semibold">
                  {" "}
                  4.6{" "}
                  <span className="text-sm font-semibold"> (129 Reviews) </span>
                </p>
              </div>
              <div className="grid grid-cols-3 my-1">
                <div className="col-span-1">
                  <p className="text-xs font-semibold">Battery Life</p>
                </div>
                <div className="col-span-2 ">
                  <p className="text-xs font-semibold text-[#FF4747] text-end">
                    88%
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 my-1">
                <div className="col-span-1">
                  <p className="text-xs font-semibold">Battery Life</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-semibold text-[#FF4747] text-end">
                    88%
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 my-1">
                <div className="col-span-1">
                  <p className="text-xs font-semibold">Battery Life</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-semibold text-[#FF4747] text-end">
                    88%
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 my-1">
                <div className="col-span-1">
                  <p className="text-xs font-semibold">Battery Life</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-semibold text-[#FF4747] text-end">
                    88%
                  </p>
                </div>
              </div>
            </div>
            <div className="container flex">
              <div className="bg-[#F3F4F4] rounded-lg flex flex-col w-full p-3 shadow-md">
                <h2 className="text-lg font-semibold">Add A Review</h2>
                <div className="relative mb-4">
                  <label className="text-sm font-semibold">Name *</label>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    className="w-full bg-white p-2 rounded-md border border-gray-300 "
                  />
                </div>
                <div className="relative mb-4">
                  <label className="text-sm font-semibold">Feedback *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white p-2 rounded-md border border-gray-300 "
                  ></textarea>
                </div>
                <div className="relative mb-4 bg-white p-4 space-y-3">
                  <label className="text-sm font-semibold">Rating</label>
                  <div className="flex flex-row items-center py-1 space-x-1">
                    <Star className="h-3 w-3" />
                    <Star className="h-3 w-3 " />
                    <Star className="h-3 w-3 " />
                    <Star className="h-3 w-3" />
                    <Star className="h-3 w-3" />
                  </div>
                </div>
                <div className="rounded-full bg-[#FF4747] p-3 full">
                  <p className="text-xs font-semibold text-white text-center">
                    Submit
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 ">
            <ul role="list" className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-6 py-5 ">
                <div className="flex  gap-x-4 w-full">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full">
                      <p className="text-lg font-medium text-[#FF4747]">
                        Leslie Alexander - Customer
                      </p>
                      <div className="flex items-center">
                        <p className="text-xs font-semibold">
                          October 28, 2021
                        </p>
                        <StarIcon className="h-3 w-3 text-[#ffa947] " />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                      </div>
                    </div>
                    <p className="text-md font-medium">
                      {" "}
                      This is Apple original Product. This is a very Good
                      Machine. It works Very Fast.This is Apple original
                      Product. This is a very Good Machine. It works Very
                      Fast.This is Apple original Product. This is a very Good
                      Machine. It works Very Fast This is Apple original
                      Product. This is a very Good Machine. It works Very
                      Fast.This is Apple original Product. This is a very Good
                      Machine. It works Very Fast.This is Apple original
                      Product. This is a very Good Machine. It works Very Fast
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex justify-between gap-x-6 py-5 ">
                <div className="flex  gap-x-4 w-full">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full">
                      <p className="text-lg font-medium text-[#FF4747]">
                        Leslie Alexander - Customer
                      </p>
                      <div className="flex items-center">
                        <p className="text-xs font-semibold">
                          October 28, 2021
                        </p>
                        <StarIcon className="h-3 w-3 text-[#ffa947] " />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                      </div>
                    </div>
                    <p className="text-md font-medium">
                      {" "}
                      This is Apple original Product. This is a very Good
                      Machine. It works Very Fast.This is Apple original
                      Product. This is a very Good Machine. It works Very
                      Fast.This is Apple original Product. This is a very Good
                      Machine. It works Very Fast This is Apple original
                      Product. This is a very Good Machine. It works Very
                      Fast.This is Apple original Product. This is a very Good
                      Machine. It works Very Fast.This is Apple original
                      Product. This is a very Good Machine. It works Very Fast
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex justify-between gap-x-6 py-5 ">
                <div className="flex  gap-x-4 w-full">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full">
                      <p className="text-lg font-medium text-[#FF4747]">
                        Leslie Alexander - Customer
                      </p>
                      <div className="flex items-center">
                        <p className="text-xs font-semibold">
                          October 28, 2021
                        </p>
                        <StarIcon className="h-3 w-3 text-[#ffa947] " />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                        <StarIcon className="h-3 w-3 text-[#ffa947]" />
                      </div>
                    </div>
                    <p className="text-md font-medium">
                      {" "}
                      This is Apple original Product. This is a very Good
                      Machine. It works Very Fast.This is Apple original
                      Product. This is a very Good Machine. It works Very
                      Fast.This is Apple original Product. This is a very Good
                      Machine. It works Very Fast This is Apple original
                      Product. This is a very Good Machine. It works Very
                      Fast.This is Apple original Product. This is a very Good
                      Machine. It works Very Fast.This is Apple original
                      Product. This is a very Good Machine. It works Very Fast
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
