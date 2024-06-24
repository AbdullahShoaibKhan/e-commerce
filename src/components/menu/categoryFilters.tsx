'use client'
import React, { useState } from 'react';

const categoriesData = [
  {
    name: 'electronics',
    companies: ['Dell', 'HP', 'Apple', 'Samsung', 'Sony', 'Asus', 'Acer'],
    ratings: [1, 2, 3, 4, 5],
    services: ['Installment', 'COD', 'Free Delivery'],
    warranty: [1, 2, 3],
    locations: ['USA', 'Canada', 'UK', 'Germany', 'France', 'Japan', 'China']
  }
  // Add more categories as needed
];

const CategoryFilters = () => {
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [showAllLocations, setShowAllLocations] = useState(false);

  return (
    <div className="flex flex-col relative">
      {categoriesData.map((category, index) => (
        <div key={index} className="mb-6">
          <div className="mb-3 border rounded-md shadow-md p-3">
            <h3 className="font-bold mb-2">Companies</h3>
            {category.companies.slice(0, showAllCompanies ? category.companies.length : 5).map((company, subIndex) => (
              <div key={subIndex} className="p-2 hover:bg-gray-100 text-sm">
                <input type="checkbox" id={`company-${company}`} />
                <label htmlFor={`company-${company}`} className="ml-2">{company}</label>
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
              <div key={subIndex} className="p-2 hover:bg-gray-100 text-sm">
                <input type="checkbox" id={`rating-${rating}`} />
                <label htmlFor={`rating-${rating}`} className="ml-2">{rating} Star</label>
              </div>
            ))}
          </div>
          
          <div className="mb-3 border rounded-md shadow-md p-3">
            <h3 className="font-bold mb-2">Services</h3>
            {category.services.map((service, subIndex) => (
              <div key={subIndex} className="p-2 hover:bg-gray-100 text-sm">
                <input type="checkbox" id={`service-${service}`} />
                <label htmlFor={`service-${service}`} className="ml-2">{service}</label>
              </div>
            ))}
          </div>
          
          <div className="mb-3 border rounded-md shadow-md p-3">
            <h3 className="font-bold mb-2">Warranty Period</h3>
            {category.warranty.map((year, subIndex) => (
              <div key={subIndex} className="p-2 hover:bg-gray-100 text-sm">
                <input type="checkbox" id={`warranty-${year}`} />
                <label htmlFor={`warranty-${year}`} className="ml-2">{year} Year</label>
              </div>
            ))}
          </div>
          
          <div className="mb-3 border rounded-md shadow-md p-3">
            <h3 className="font-bold mb-2">Location</h3>
            {category.locations.slice(0, showAllLocations ? category.locations.length : 5).map((location, subIndex) => (
              <div key={subIndex} className="p-2 hover:bg-gray-100 text-sm">
                <input type="checkbox" id={`location-${location}`} />
                <label htmlFor={`location-${location}`} className="ml-2">{location}</label>
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
