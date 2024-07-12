'use client'
import {
  StarIcon,
  PlusIcon,
  MinusIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { StarIcon as Star } from "@heroicons/react/24/outline";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Product = () => {

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#FF4747' : '#FF4747',
    },
  }));

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#FF4747"
      href="/"
    >
      Home
    </Link>,
    <Typography key="3" color="text.primary">
      Product
    </Typography>,
  ];

  return (
    <>
      <section>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className="my-2"
      >
        {breadcrumbs}
      </Breadcrumbs>
        <div className="grid grid-cols-1 md:grid-cols-7 xl:gap-3 lg:gap-3   pb-2 mx-auto">
          <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-1 gap-y-2 relative  xl:p-3 lg:p-3">
            <div className="border rounded-md h-full p-3">
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
            <h1 className="xl:text-4xl lg:text-2xl md:text-lg text-lg font-bold text-[#17283B] mb-1">
              2020 Apple Macbook Pro With Apple M1 Chip(13-inch, 8GB RAM, 512GB
              SSD Storage)
            </h1>
            <div className="flex flex-row space-x-1 py-1 items-center">
              <div className="flex space-x-1 items-center bg-[#F3F4F4] rounded-lg">
                <p className="p-2 xl:text-lg lg:text-md md:text-md text-sm xl:font-bold lg:font-semibold">
                  OnlineStoreBuy
                </p>
                <CheckBadgeIcon className="xl:h-5 xl:w-5 lg:h-5 lg:w-5 h-3 w-3 text-[#FF4747] items-center" />
              </div>
              <p className="p-2 xl:text-lg lg:text-md md:text-md text-sm xl:font-bold lg:font-semibold bg-[#F3F4F4] rounded-lg">
                Brand
              </p>
              <p className="p-2 xl:text-lg lg:text-md md:text-md text-sm xl:font-bold lg:font-semibold bg-[#F3F4F4] rounded-lg">
                Apple
              </p>
            </div>
            <div className=" grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
              <div className="col-span-2 space-y-1">
                <div className="flex flex-row items-center py-1 space-x-1">
                  <StarIcon className="xl:h-5 xl:w-5 lg:h-5 lg:w-5 h-3 w-3 text-[#ffa947] " />
                  <StarIcon className="xl:h-5 xl:w-5 lg:h-5 lg:w-5 h-3 w-3 text-[#ffa947]" />
                  <StarIcon className="xl:h-5 xl:w-5 lg:h-5 lg:w-5 h-3 w-3 text-[#ffa947]" />
                  <StarIcon className="xl:h-5 xl:w-5 lg:h-5 lg:w-5 h-3 w-3 text-[#ffa947]" />
                  <StarIcon className="xl:h-5 xl:w-5 lg:h-5 lg:w-5 h-3 w-3 text-[#ffa947]" />
                  <p className="xl:text-lg text-md font-semibold">
                    {" "}
                    4.6{" "}
                    <span className="xl:text-lg text-md font-semibold">
                      {" "}
                      (129 Reviews){" "}
                    </span>
                  </p>
                </div>
                <p className="xl:text-lg text-md font-semibold py-2">
                  Availability:{" "}
                  <span className="xl:text-lg text-md font-semibold text-[#FF4747]">
                    34 in stock
                  </span>
                </p>
                <div className="pb-3">
                  <p className="xl:text-lg text-md font-medium pb-1">
                    Color: <span className="xl:text-lg text-md font-semibold">Silver</span>
                  </p>
                  <div className="flex space-x-2 py-1">
                    <p className="h-9 w-9 bg-black"></p>
                    <p className="h-9 w-9 bg-[#FF4747]"></p>
                    <p className="h-9 w-9 bg-[#56ff47]"></p>
                  </div>
                </div>
                <p className="xl:text-lg text-md font-semibold p-0">
                  SKU:{" "}
                  <span className="xl:text-lg text-md font-semibold text-[#FF4747]">
                    MSQ211
                  </span>
                </p>
                <p className="xl:text-lg text-md font-semibold p-0">
                  Category:{" "}
                  <span className="xl:text-lg text-md font-semibold text-[#FF4747]">
                    Electronics
                  </span>
                </p>
                <div className="my-3">
                  <p className="xl:text-lg text-md font-semibold pb-1">
                    Capacity:{" "}
                    <span className="xl:text-lg text-md font-semibold">512GB</span>
                  </p>
                  <div className="flex space-x-2 py-1">
                    <div className=" bg-[#F3F4F4] text-center p-2 rounded-md">
                      <p className="xl:text-lg text-md font-semibold text-[#FF4747] pb-1">
                        512GB
                      </p>
                      <p className="text-md font-light pb-1">3 Options from</p>
                      <p className="text-md font-semibold pb-1">$2,124.23</p>
                    </div>
                    <div className=" bg-[#F3F4F4] text-center p-2 rounded-md">
                      <p className="xl:text-lg text-md font-semibold text-[#FF4747] pb-1">
                        1TB
                      </p>
                      <p className="text-md font-light  pb-1">3 Options from</p>
                      <p className="text-md font-semibold pb-1">$2,124.23</p>
                    </div>
                  </div>
                  <p className="xl:text-lg text-md font-semibold my-1 ">View More</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col w-full space-y-3">
                  <div className="flex justify-between p-2 bg-[#F3F4F4] rounded-lg w-full items-center">
                    <p className="xl:text-lg lg:text-md font-normal ">Quantity</p>
                    <div className="flex justify-between space-x-1 items-center bg-white rounded-full py-1 px-2">
                      <MinusIcon className="xl:h-4 xl:w-4 lg:h-4 lg:w-4 h-3 w-3 font-bold" />
                      <p className="xl:text-md lg:text-md text-sm font-normal">5</p>
                      <PlusIcon className="xl:h-4 xl:w-4 lg:h-4 lg:w-4 h-3 w-3 font-bold" />
                    </div>
                  </div>
                  <div className="flex flex-col p-2 bg-[#F3F4F4] rounded-lg w-full items-center space-y-1">
                    <div className="flex justify-between items-center w-full">
                      <p className="xl:text-md lg:text-md text-sm xl:font-bold lg:font-bold font-semibold">Discount:</p>
                      <p className="xl:text-lg lg:text-lg text-md xl:font-bold lg:font-bold font-semibold text-[#FF4747]">
                        Rs5.00(13%)
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="xl:text-md lg:text-md text-sm xl:font-bold lg:font-bold font-semibold">You Save</p>
                      <p className="xl:text-lg lg:text-lg text-md xl:font-bold lg:font-bold font-semibold text-[#FF4747]">
                        $100.00(10%)
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="xl:text-md lg:text-md text-sm xl:font-bold lg:font-bold font-semibold">List Price:</p>
                      <p className="xl:text-lg lg:text-lg text-md xl:font-bold lg:font-bold font-semibold text-[#FF4747]">
                        $949.00
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="xl:text-md lg:text-md text-sm xl:font-bold lg:font-bold font-semibold">Price:</p>
                      <p className="xl:text-lg lg:text-lg text-md xl:font-bold lg:font-bold font-semibold text-[#FF4747]">
                        Rs.419000
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#FF4747] p-3 full">
                    <p className="xl:text-md lg:text-md text-sm xl:font-bold lg:font-bold font-semibold text-white text-center">
                      ADD TO CART{" "}
                    </p>
                  </div>
                  <div className="flex flex-col p-2 bg-[#F3F4F4] rounded-lg w-full space-y-1">
                    <p className="xl:text-xl lg:text-lg text-lg xl:font-extrabold lg:font-extrabold font-bold">Return & Warranty</p>
                    <div className="flex space-x-1 items-center w-full">
                      <CheckBadgeIcon className="h-5 w-5 text-[#FF4747] items-center" />
                      <p className="xl:text-md lg:text-md text-sm font-normal">100% Authentic</p>
                    </div>
                    <div className="flex space-x-1 items-center w-full">
                      <CheckBadgeIcon className="h-5 w-5 text-[#FF4747] items-center" />
                      <p className="xl:text-md lg:text-md text-sm font-normal">
                        14 days easy return. Change of Mind Applicable
                      </p>
                    </div>
                    <div className="flex space-x-1 items-center w-full">
                      <ShieldCheckIcon className="h-5 w-5 text-[#FF4747] items-center" />
                      <p className="xl:text-md lg:text-md text-sm font-normal">
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
      <section className="xl:mx-10 lg:mx-10 my-4">
        <div className="space-y-4">
          <p className="xl:text-4xl lg:text-2xl font-bold p-2 bg-[#F3F4F4] rounded-md w-full">
            Description
          </p>
          <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold px-2">
            This is Apple original Product. This is a very Good Machine. It
            works Very Fast.This is Apple original Product. This is a very Good
            Machine. It works Very Fast.This is Apple original Product. This is
            a very Good Machine. It works Very Fast
          </p>
        </div>
      </section>
      <section className="xl:mx-10 lg:mx-10 my-4 space-y-4">
        <p className="xl:text-4xl lg:text-2xl font-bold p-2 bg-[#F3F4F4] rounded-md w-full">
          Additioanl Information
        </p>
        <div className="grid grid-cols-7 px-2">
          <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2 gap-y-2">
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">Product Type</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">Availability</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">Series</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">Model</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">OS Version</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">Processor</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">Generation</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">Speed</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">Screen Size</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-medium text-[#666666]">Max Res</p>
          </div>
          <div className="xl:col-span-6 lg:col-span-6 md:col-span-5 col-span-5 gap-y-2">
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">Laptop</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">In Stock</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">HP, NoteBook</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">2L4XY23</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">DOS</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">Intel Core i3</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">1th Generation</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">
              1.7 1 4.1 Ghz, 13-1115G4, 6MB Cache, 2 Cores, 4 Threads
            </p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">15.6&quot;</p>
            <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-[#17283B]">1920 x 1080:Full HD</p>
          </div>
        </div>
      </section>
      <section className="xl:mx-10 lg:mx-10 my-4 space-y-4">
        <p className="text-xl  font-semibold p-2 bg-[#F3F4F4] rounded-md w-full">
          Reviews
        </p>
        <div className="grid xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-1 grid-cols-1 gap-x-10">
          <div className="xl:col-span-2 lg:col-span-2 col-span-7 gap-x-10 space-y-4 grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2">
            <div >
              <div className="flex flex-row items-center py-1 space-x-1">
                <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947] " />
                <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                <p className="text-sm font-semibold">
                  {" "}
                  4.6{" "}
                  <span className="text-sm font-semibold"> (129 Reviews) </span>
                </p>
              </div>
              <div className="grid grid-cols-6 my-1 md:w-full sm:w-full xs:w-full">
                <div className="col-span-2">
                  <p className="text-sm font-bold">Battery Life</p>
                </div>
                <div className="col-span-3 place-content-center">
                <BorderLinearProgress variant="determinate" value={88} />
                </div>
                <div className="col-span-1 ">
                  <p className="text-sm font-bold text-[#FF4747] text-end">
                    88%
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-6 my-1">
                <div className="col-span-2">
                  <p className="text-sm font-bold">Battery Life</p>
                </div>
                <div className="col-span-3 place-content-center">
                <BorderLinearProgress variant="determinate" value={88} />
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-bold text-[#FF4747] text-end">
                    88%
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-6 my-1">
                <div className="col-span-2">
                  <p className="text-sm font-bold">Battery Life</p>
                </div>
                <div className="col-span-3 place-content-center">
                <BorderLinearProgress variant="determinate" value={88} />
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-bold text-[#FF4747] text-end">
                    88%
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-6 my-1">
                <div className="col-span-2">
                  <p className="text-sm font-bold">Battery Life</p>
                </div>
                <div className="col-span-3 place-content-center">
                <BorderLinearProgress variant="determinate" value={76} />
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-bold text-[#FF4747] text-end">
                    76%
                  </p>
                </div>
              </div>
            </div>
            <div className="container flex">
              <div className="bg-[#F3F4F4] rounded-lg flex flex-col w-full p-3 shadow-md">
                <h2 className=" xl:text-2xl lg:text-lg text-lg font-bold">Add A Review</h2>
                <div className="relative mb-4">
                  <label className="xl:text-lg text-md font-semibold">Name *</label>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    className="w-full bg-white p-2 rounded-lg border border-gray-300 "
                  />
                </div>
                <div className="relative mb-4">
                  <label className="xl:text-lg text-md font-semibold">Feedback *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white p-2 rounded-lg border border-gray-300 "
                  ></textarea>
                </div>
                <div className="relative mb-4 bg-white p-4 space-y-3 rounded-lg border">
                  <label className="xl:text-lg text-md font-semibold">Rating</label>
                  <div className="flex flex-row items-center py-1 space-x-1">
                    <Star className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3" />
                    <Star className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3" />
                    <Star className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3" />
                    <Star className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3" />
                    <Star className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3" />
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

          <div className="xl:col-span-5 lg:col-span-5 col-span-7">
            <ul role="list" className="divide-y divide-gray-100">
              <li className="flex justify-between gap-x-6 py-5 ">
                <div className="flex  gap-x-4 w-full">
                  <img
                    className="h-14 w-14 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full gap-x-2">
                      <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-sm font-semibold text-[#FF4747]">
                        Leslie Alexander - Customer
                      </p>
                      <div className="flex flex-wrap items-center gap-x-1">
                        <p className="xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm font-bold">
                          October 28, 2021
                        </p>
                        <div className="flex items-center">
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947] " />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                      </div>
                      </div>
                    </div>
                    <p className="xl:text-xl lg:text-md md:text-sm sm:text-xs text-xs font-normal text-justify">
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
                    className="h-14 w-14 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full gap-x-2">
                      <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-sm font-semibold text-[#FF4747]">
                        Leslie Alexander - Customer
                      </p>
                      <div className="flex flex-wrap items-center gap-x-1">
                        <p className="xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm font-bold">
                          October 28, 2021
                        </p>
                        <div className="flex items-center">
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947] " />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                      </div>
                      </div>
                    </div>
                    <p className="xl:text-xl lg:text-md md:text-sm sm:text-xs text-xs font-normal text-justify">
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
                    className="h-14 w-14 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full gap-x-2">
                      <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-sm text-sm font-semibold text-[#FF4747]">
                        Leslie Alexander - Customer
                      </p>
                      <div className="flex flex-wrap items-center gap-x-1">
                        <p className="xl:text-lg lg:text-lg md:text-md sm:text-sm text-sm font-bold">
                          October 28, 2021
                        </p>
                        <div className="flex items-center">
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947] " />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                        <StarIcon className="xl:h-5 xl:w-5 lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-3 sm:h-3 w-3 h-3 text-[#ffa947]" />
                      </div>
                      </div>
                    </div>
                    <p className="xl:text-xl lg:text-md md:text-sm sm:text-xs text-xs font-normal text-justify">
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
