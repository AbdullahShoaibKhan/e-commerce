'use client'
import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from "next/link";
const categoriesData = [
  {
    name: 'Electronics',
    subcategories: ['Oven', 'Juice Machine', 'Television', 'Mobile Phones', 'Laptops']
  },
  {
    name: 'Bags & Shoes',
    subcategories: ['Handbags', 'Backpacks', 'Sneakers', 'Formal Shoes']
  },
  {
    name: 'Sports',
    subcategories: ['Football', 'Bats', 'Badminton', 'Tennis', 'Cricket']
  },
  {
    name: 'Lights',
    subcategories: ['LED', 'Table Lamps', 'Ceiling Lights', 'Outdoor Lights']
  },
  {
    name: 'Fashion',
    subcategories: ['Men', 'Women', 'Kids']
  },
  {
    name: 'Home & Kitchen',
    subcategories: ['Furniture', 'Cookware', 'Decor', 'Storage']
  },
  {
    name: 'Beauty & Health',
    subcategories: ['Makeup', 'Skincare', 'Haircare', 'Supplements']
  }
];

const CategoriesMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState("");

  return (
    <div className="flex flex-col relative border rounded-md mb-3 shadow-md p-3">
      {categoriesData.map((category, index) => (
        <Link key={index}  href={`/category`}>
        <div 
          key={index} 
          className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
          onMouseEnter={() => setHoveredCategory(category?.name)}
          onMouseLeave={() => setHoveredCategory("")}
        >
          <span className='text-sm font-bold'>{category.name}</span>
          {category.subcategories && (
            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
          )}
          
          {hoveredCategory === category.name && (
            <div 
              className="absolute left-full top-0 mt-2 ml-2 p-4 w-full bg-white shadow-lg border rounded-md"
              onMouseEnter={() => setHoveredCategory(category?.name)}
              onMouseLeave={() => setHoveredCategory("")}
            >
              {category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="p-2 hover:bg-gray-100 text-sm font-bold">
                  {subcategory}
                </div>
              ))}
            </div>
          )}
        </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesMenu;
