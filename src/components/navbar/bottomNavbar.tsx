"use client";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = {
  pages: [
    { name: "All Categories", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "Support", href: "/Support" },
    { name: "Blog", href: "/Blog" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Contact Us", href: "/ContactUs" },
  ],
};

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}

export default function BottomNavbar() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  return (
    <div className="bg-white mx-10">
      {/* Mobile menu */}

      <header className="text-gray-600 body-font">
        <div className="container flex flex-wrap py-4 flex-col justify-evenly md:flex-row items-center">
          <nav className="md:mr-auto md:py-1 flex flex-wrap items-center text-base justify-center">
            <div className="flex h-full ">
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
            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
              <a href="/Cart" className="group -m-2 flex items-center p-2">
                <ShoppingCartIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-700 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
            <div className="ml-4 flow-root lg:ml-6">
              <a href="#" className="group -m-2 flex items-center p-2">
                <HeartIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-700 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* <header className="relative bg-white">
        <p className="flex h-7 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6"
        >
          <div className="border-gray-200">
            <div className="flex items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full ">
                  {navigation.pages.map((page) => (
                    <Link key={page.name} href={page.href}>
                      <div
                        className={classNames(
                          activeTab === page.href
                            ? "bg-orange-500 text-white"
                            : "text-gray-700 hover:bg-orange-500 hover:text-white",
                          "flex items-center justify-center relative z-10 h-full p-3  rounded-md text-sm font-medium transition-colors duration-200 ease-out",
                          page.name === "All Categories" ? "w-[200%]" : "w-auto"
                        )}
                        onClick={() => setActiveTab(page.href)}
                      >
                        {page.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="ml-auto flex items-center">
            
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingCartIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-700 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-700 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header> */}
    </div>
  );
}
