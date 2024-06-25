"use client";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const categoriesData = [
  {
    name: "electronics",
    companies: ["Dell", "HP", "Apple", "Samsung", "Sony", "Asus", "Acer"],
    ratings: [1, 2, 3, 4, 5],
    services: ["Installment", "COD", "Free Delivery"],
    warranty: [1, 2, 3],
    locations: ["USA", "Canada", "UK", "Germany", "France", "Japan", "China"],
  },
  // Add more categories as needed
];

const CategoryFilters = () => {
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const [checkedItems, setCheckedItems] = useState<any>({});

  const handleCheckboxChange = (category:any, item:any, checked:any) => {
    setCheckedItems((prev:any) => ({
      ...prev,
      [`${category}-${item}`]: checked,
    }));
  };

  return (
    <div className="flex flex-col relative">
      {categoriesData.map((category, index) => (
        <div key={index} className="mb-6">
          <div className="mb-3 border rounded-md shadow-md p-3">
            <h3 className="font-bold mb-2">Companies</h3>
            {category.companies
              .slice(0, showAllCompanies ? category.companies.length : 5)
              .map((company, subIndex) => (
                <div
                  key={subIndex}
                  className={`p-2 hover:bg-gray-100 text-sm flex items-center ${
                    checkedItems[`companies-${company}`]
                      ? "border-[#FF4747] text-[#FF4747]"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`company-${company}`}
                    checked={checkedItems[`companies-${company}`] || false}
                    onChange={(e) =>
                      handleCheckboxChange("companies", company, e.target.checked)
                    }
                  />
                  <label
                    htmlFor={`company-${company}`}
                    className={`ml-2 ${
                      checkedItems[`companies-${company}`]
                        ? "text-[#FF4747]"
                        : ""
                    }`}
                  >
                    {company}
                  </label>
                </div>
              ))}
            {!showAllCompanies && (
              <button
                className="font-bold text-sm mt-2"
                onClick={() => setShowAllCompanies(true)}
              >
                View All
              </button>
            )}
          </div>

          <div className="mb-3 border rounded-md shadow-md p-3">
            <h3 className="font-bold mb-2">Ratings</h3>
            {category.ratings.map((rating, subIndex) => (
              <div
                key={subIndex}
                className={`p-2 hover:bg-gray-100 text-sm flex items-center justify-between ${
                  checkedItems[`ratings-${rating}`]
                    ? "border-[#FF4747] text-[#FF4747]"
                    : ""
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`rating-${rating}`}
                    checked={checkedItems[`ratings-${rating}`] || false}
                    onChange={(e) =>
                      handleCheckboxChange("ratings", rating, e.target.checked)
                    }
                  />
                  <label
                    htmlFor={`rating-${rating}`}
                    className={`ml-2 flex items-center ${
                      checkedItems[`ratings-${rating}`]
                        ? "text-[#ffa947]"
                        : ""
                    }`}
                  >
                    {rating} Star
                  </label>
                </div>
                <div className="ml-2 flex">
                  {[...Array(rating)].map((_, starIndex) => (
                    <StarIcon
                      key={starIndex}
                      className="h-4 w-4 text-[#ffa947]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3 border rounded-md shadow-md p-3">
            <h3 className="font-bold mb-2">Services</h3>
            {category.services.map((service, subIndex) => (
              <div
                key={subIndex}
                className={`p-2 hover:bg-gray-100 text-sm flex items-center ${
                  checkedItems[`services-${service}`]
                    ? "border-[#FF4747] text-[#FF4747]"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  id={`service-${service}`}
                  checked={checkedItems[`services-${service}`] || false}
                  onChange={(e) =>
                    handleCheckboxChange("services", service, e.target.checked)
                  }
                />
                <label
                  htmlFor={`service-${service}`}
                  className={`ml-2 ${
                    checkedItems[`services-${service}`] ? "text-[#FF4747]" : ""
                  }`}
                >
                  {service}
                </label>
              </div>
            ))}
          </div>

          <div className="mb-3 border rounded-md shadow-md p-3">
            <h3 className="font-bold mb-2">Warranty Period</h3>
            {category.warranty.map((year, subIndex) => (
              <div
                key={subIndex}
                className={`p-2 hover:bg-gray-100 text-sm flex items-center ${
                  checkedItems[`warranty-${year}`]
                    ? "border-[#FF4747] text-[#FF4747]"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  id={`warranty-${year}`}
                  checked={checkedItems[`warranty-${year}`] || false}
                  onChange={(e) =>
                    handleCheckboxChange("warranty", year, e.target.checked)
                  }
                />
                <label
                  htmlFor={`warranty-${year}`}
                  className={`ml-2 ${
                    checkedItems[`warranty-${year}`] ? "text-[#FF4747]" : ""
                  }`}
                >
                  {year} Year
                </label>
              </div>
            ))}
          </div>

          <div className="mb-3 border rounded-md shadow-md p-3">
            <h3 className="font-bold mb-2">Location</h3>
            {category.locations
              .slice(0, showAllLocations ? category.locations.length : 5)
              .map((location, subIndex) => (
                <div
                  key={subIndex}
                  className={`p-2 hover:bg-gray-100 text-sm flex items-center ${
                    checkedItems[`locations-${location}`]
                      ? "border-[#FF4747] text-[#FF4747]"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`location-${location}`}
                    checked={checkedItems[`locations-${location}`] || false}
                    onChange={(e) =>
                      handleCheckboxChange("locations", location, e.target.checked)
                    }
                  />
                  <label
                    htmlFor={`location-${location}`}
                    className={`ml-2 ${
                      checkedItems[`locations-${location}`]
                        ? "text-[#FF4747]"
                        : ""
                    }`}
                  >
                    {location}
                  </label>
                </div>
              ))}
            {!showAllLocations && (
              <button
                className="text-blue-500 text-sm mt-2"
                onClick={() => setShowAllLocations(true)}
              >
                View All
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilters;
