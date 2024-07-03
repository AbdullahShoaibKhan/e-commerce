"use client";
import { useState, Fragment } from "react";
import {
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const categoriesData = [
  {
    name: "Bags & Shoes",
    subcategories: ["Handbags", "Backpacks", "Sneakers", "Formal Shoes"],
  },
  {
    name: "Networking Plus",
    subcategories: [],
  },
  {
    name: "Electronics",
    subcategories: ["Oven", "Juice Machine", "Television"],
  },
  {
    name: "Smartphones & Tablets",
    subcategories: ["Tablets", "Laptop", "Mobile Phones"],
  },
  {
    name: "Lights & Lamps",
    subcategories: ["LED", "Table Lamps", "Ceiling Lights", "Outdoor Lights"],
  },
  {
    name: "Sports & Outdoors",
    subcategories: ["Football", "Bats", "Badminton", "Tennis", "Cricket"],
  },
  {
    name: "Beauty & Health",
    subcategories: ["Makeup", "Skincare", "Haircare", "Supplements"],
  },
  {
    name: "Toys & Hobbies",
    subcategories: ["Dolls", "Cars", "Plastic Toys"],
  },
  {
    name: "Cameras & Photo",
    subcategories: ["Digital Camera", "Drones", "360", "Dashcam"],
  },
  {
    name: "Fashion",
    subcategories: ["Men", "Women", "Kids"],
  },
  {
    name: "Home & Kitchen",
    subcategories: ["Furniture", "Cookware", "Decor", "Storage"],
  },
];

const CategoriesMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [openSubcategories, setOpenSubcategories] = useState<string[]>([]);

  const toggleSubcategories = (categoryName: string) => {
    if (openSubcategories.includes(categoryName)) {
      setOpenSubcategories(
        openSubcategories.filter((name) => name !== categoryName)
      );
    } else {
      setOpenSubcategories([...openSubcategories, categoryName]);
    }
  };

  return (
    <div>
      <div
        className="lg:hidden flex items-center py-2"
        onClick={() => setOpen(true)}
      >
        <div className="flex space-between border rounded-lg px-3 py-2 bg-[#FF4747] gap-x-2">
          <h2 className="text-lg font-semibold  text-white">All Categories</h2>
          <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
      </div>

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
              <h2 className="text-lg font-semibold text-gray-900">
                Categories
              </h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="mt-6">
              {categoriesData.map((category, index) => (
                <a href="/category">
                <div key={index} className="flex flex-col">
                  <div
                    className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => toggleSubcategories(category.name)}
                  >
                    <span
                      className="text-sm font-semibold "
                      style={{ lineHeight: "24px" }}
                    >
                      {category.name}
                    </span>
                    {category.subcategories.length > 0 &&
                      (openSubcategories.includes(category.name) ? (
                        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                      ))}
                  </div>
                  {openSubcategories.includes(category.name) && (
                    <div className="ml-4">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <Link key={subIndex} href={`/subcategory`}>
                          <div
                            key={subIndex}
                            className="p-2 hover:bg-gray-100 text-sm font-semibold"
                          >
                            {subcategory}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Transition>

      <div className="hidden lg:flex flex-col relative border rounded-md shadow-md px-5 py-4 gap-x-2">
        {categoriesData.map((category, index) => (
          <a href="/category">
          <div
            key={index}
            className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
            onMouseEnter={() => setHoveredCategory(category?.name)}
            onMouseLeave={() => setHoveredCategory("")}
          >
            <span
              className="text-sm font-semibold "
              style={{ lineHeight: "24px" }}
            >
              {category.name}
            </span>
            {category.subcategories.length > 0 && (
              <ChevronRightIcon className="h-5 w-5 text-gray-500" />
            )}
            {hoveredCategory === category.name && (
              <div
                className="absolute left-full top-0 mt-2 ml-2 p-4 w-full bg-white shadow-lg border rounded-md z-20"
                onMouseEnter={() => setHoveredCategory(category?.name)}
                onMouseLeave={() => setHoveredCategory("")}
              >
                {category.subcategories.map((subcategory, subIndex) => (
                  <div
                    key={subIndex}
                    className="p-2 hover:bg-gray-100 text-sm font-semibold"
                  >
                    {subcategory}
                  </div>
                ))}
              </div>
            )}
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoriesMenu;
