// 'use client'
// import Link from "next/link";

// import App from "./orders/page";

// const Account = () => {
//   return (
//     <div className="grid grid-cols-5 gap-x-4">
//       <div className="flex flex-col p-4 col-span-1 bg-[hsl(180,4%,95%)] border-[#F3F4F4] h-full rounded-md shadow-md">
//         <ul>
//           <li>
//             <p className="text-md font-bold my-2">Dashboard</p>
//           </li>
//           <li>
//             <p className="text-md font-bold my-2">Orders</p>
//           </li>
//           <li>
//             <p className="text-md font-bold my-2">Downloads</p>
//           </li>
//           <li>
//             <p className="text-md font-bold my-2">Addresses</p>
//           </li>
//           <li>
//             <p className="text-md font-bold my-2">Account Details</p>
//           </li>
//           <li>
//             <p className="text-md font-bold my-2">Log Out</p>
//           </li>
//         </ul>
//       </div>
//       <div className="col-span-4">
//         <div className="space-y-3">
//           <div className="grid grid-cols-4 space-x-3">
//             <div className="border-[#F3F4F4] rounded-md shadow-lg p-4 flex flex-col">
//               <p className="text-lg font-extrabold">Total Order</p>
//               <p className="text-lg font-extrabold text-[#FF4747]">50</p>
//             </div>
//             <div className="border-[#F3F4F4] rounded-md shadow-lg p-4 flex flex-col">
//               <p className="text-lg font-extrabold">Total Order</p>
//               <p className="text-lg font-extrabold text-[#FF4747]">50</p>
//             </div>
//             <div className="border-[#F3F4F4] rounded-md shadow-lg p-4 flex flex-col">
//               <p className="text-lg font-extrabold">Total Order</p>
//               <p className="text-lg font-extrabold text-[#FF4747]">50</p>
//             </div>
//             <div className="border-[#F3F4F4] rounded-md shadow-lg p-4 flex flex-col">
//               <p className="text-lg font-extrabold">Total Order</p>
//               <p className="text-lg font-extrabold text-[#FF4747]">50</p>
//             </div>
//           </div>
//           <div className="flex justify"><App/></div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Account;


'use client'
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Import Menu and Close icons from Heroicons
import App from "./orders/page";

const Account = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center p-4">
        <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
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
            <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-4">
        {/* Sidebar Menu for Large Screens */}
        <div className="hidden lg:flex flex-col p-4 col-span-1 bg-[hsl(180,4%,95%)] border-[#F3F4F4] h-full rounded-md shadow-md">
          <ul>
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
        <div className="col-span-4">
          <div className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="border-[#F3F4F4] rounded-md shadow-lg p-4 flex flex-col">
                <p className="text-lg font-extrabold">Total Order</p>
                <p className="text-lg font-extrabold text-[#FF4747]">50</p>
              </div>
              <div className="border-[#F3F4F4] rounded-md shadow-lg p-4 flex flex-col">
                <p className="text-lg font-extrabold">Total Order</p>
                <p className="text-lg font-extrabold text-[#FF4747]">50</p>
              </div>
              <div className="border-[#F3F4F4] rounded-md shadow-lg p-4 flex flex-col">
                <p className="text-lg font-extrabold">Total Order</p>
                <p className="text-lg font-extrabold text-[#FF4747]">50</p>
              </div>
              <div className="border-[#F3F4F4] rounded-md shadow-lg p-4 flex flex-col">
                <p className="text-lg font-extrabold">Total Order</p>
                <p className="text-lg font-extrabold text-[#FF4747]">50</p>
              </div>
            </div>
            <div className="flex justify"><App/></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
