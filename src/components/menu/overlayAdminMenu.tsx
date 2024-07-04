"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const OverlayAdminMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center p-4">
        <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
        onClick={toggleMenu}
      >
        <div
          className="w-64 bg-white h-full shadow-md p-4"
          onClick={(e) => e.stopPropagation()} // Prevent closing the menu when clicking inside
        >
          <div className="flex justify-between">
            <div className="p-1">
              <p className="text-lg font-bold">My Account</p>
            </div>
            <XMarkIcon
              className="h-6 w-6 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="mt-4">
            <li>
              <p className="text-md font-bold my-2">Dashboard</p>
            </li>
            <li>
              <p className="text-md font-bold my-2">Orders</p>
            </li>
            <li>
              <p className="text-md font-bold my-2">Downloads</p>
            </li>
            <li>
              <p className="text-md font-bold my-2">Addresses</p>
            </li>
            <li>
              <p className="text-md font-bold my-2">Account Details</p>
            </li>
            <li>
              <p className="text-md font-bold my-2">Log Out</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverlayAdminMenu;
