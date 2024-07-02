"use client";
import { Fragment, useState } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  FlagIcon,
  Bars3Icon,
  ShoppingCartIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const navigation = {
  pages: [
    { name: "All Categories", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "Support", href: "/Support" },
    { name: "Blog", href: "/Blog" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Contact Us", href: "/ContactUs" },
    { name: "Cart", href: "/Cart" },
    { name: "Sign In", href: "/Auth/login" },   
  ],
  extra: [
    { name: "Weekly Deals", href: "/weekly-deals" },
    { name: "Special Offers", href: "/special-offers" },
    { name: "New Arrivals", href: "/new-arrivals" },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function CombinedNavbar() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");

  return (
    <div>
      {/* Mobile overlay */}
      <Transition show={open} as={Fragment}>
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-64 bg-white p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="relative w-full mt-4">
              <input
                type="text"
                className="border w-full border-gray-300 rounded-full pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search..."
              />
              <MagnifyingGlassIcon className="absolute right-2 top-2 h-5 w-5 text-gray-400" />
            </div>
            <nav className="mt-6">
              {navigation.pages.map((page) => (
                <Link key={page.name} href={page.href}>
                  <div
                    className={classNames(
                      "block py-2 px-4 rounded-md text-base font-medium transition-colors duration-200 ease-out",
                      activeTab === page.href
                        ? "bg-[#FF4747] text-white"
                        : "text-gray-700 hover:bg-[#FF4747] hover:text-white"
                    )}
                    onClick={() => {
                      setActiveTab(page.href);
                      setOpen(false);
                    }}
                  >
                    {page.name}
                  </div>
                </Link>
              ))}
              {navigation.extra.map((page) => (
                <Link key={page.name} href={page.href}>
                  <div
                    className={classNames(
                      "block py-2 px-4 rounded-md text-base font-medium transition-colors duration-200 ease-out",
                      activeTab === page.href
                        ? "bg-[#FF4747] text-white"
                        : "text-gray-700 hover:bg-[#FF4747] hover:text-white"
                    )}
                    onClick={() => {
                      setActiveTab(page.href);
                      setOpen(false);
                    }}
                  >
                    {page.name}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Transition>

      <div className="bg-white">
        <header className="text-gray-600 body-font">
          <p className="flex h-7 items-center justify-center bg-indigo-600 text-sm font-medium text-white">
            Get free delivery on orders over $100
          </p>
          <div className="container mx-auto flex flex-row justify-between flex-wrap mt-2 md:flex-row items-center lg:hidden">
            <div className="text-4xl font-bold text-[#17283B]">
              <span className="text-[#FF4747]">Logo</span>Site
            </div>
            <button
              className="lg:hidden flex items-center p-2"
              onClick={() => setOpen(true)}
            >
              <Bars3Icon
                className="h-8 w-7 flex-shrink-0 text-[#17283B] group-hover:text-gray-500"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="container mx-auto flex flex-row justify-evenly flex-wrap mt-2 md:flex-row items-center hidden lg:flex w-full">
            <div className="xl:text-4xl lg:text-2xl md:text-lg sm:text-lg xs:text-lg font-bold text-[#17283B]">
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
            <div className="flex items-center w-1/3">
              <div className="px-3 py-3 rounded-l-full text-gray-700 bg-[#FF4747]">
                <p className="xl:text-sm lg:text-sm md:text-sm sm:text-xs text-white font-bold">
                  Category
                </p>
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
            <div className="xl:text-md lg:text-md md:text-sm sm:text-md font-bold" style={{ lineHeight: "40px" }}>
              Weekly Deals
            </div>
            <div className="xl:text-md lg:text-md md:text-sm sm:text-md font-bold" style={{ lineHeight: "40px" }}>
              Special Offers
            </div>
            <div className="xl:text-md lg:text-md md:text-sm sm:text-md font-bold" style={{ lineHeight: "40px" }}>
              New Arrivals
            </div>
            <div className="text-sm text-white font-bold rounded-full bg-[#FF4747]">
              <a href="/Auth/login">
              <div className="flex flex-row space-x-1 items-center px-2 py-1">
                <UserIcon
                  className="h-6 w-6 flex-shrink-0 text-white group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <p className="text-md font-bold" style={{ lineHeight: "40px" }}>
                  Sign In / Register
                </p>
              </div>
              </a>
            </div>
          </div>
        </header>

        <header className=" hidden lg:block">
          <div className="container mx-auto flex flex-wrap py-4 flex-col justify-between md:flex-row items-center">
            <nav className="md:mr-auto md:py-1 flex flex-wrap items-center text-base justify-center">
              <div className="flex h-full">
                {navigation.pages.map((page) => (
                  <Link key={page.name} href={page.href}>
                    <div
                      className={classNames(
                        activeTab === page.href
                          ? "bg-[#FF4747] text-white"
                          : "text-gray-700 hover:bg-[#FF4747] hover:text-white",
                        "flex items-center justify-center relative z-10 h-full py-3 px-4 rounded-md text-sm font-semibold transition-colors duration-200 ease-out"
                      )}
                      onClick={() => setActiveTab(page.href)}
                    >
                      {page.name}
                    </div>
                  </Link>
                ))}
              </div>
            </nav>
            <div className="ml-auto flex items-center">
              <div className="ml-4 lg:ml-6">
                <a href="/Cart" className="flex items-center p-2">
                  <ShoppingCartIcon
                    className="h-8 w-7 flex-shrink-0 text-[#17283B] group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
              <div className="ml-4 lg:ml-6">
                <a href="#" className="flex items-center p-2">
                  <HeartIcon
                    className="h-8 w-7 flex-shrink-0 text-[#17283B] group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
