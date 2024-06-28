'use client'
import Link from "next/link";

import App from "./orders/page";

const Account = () => {
  return (
    <div className="grid grid-cols-5 gap-x-4">
      <div className="flex flex-col p-4 col-span-1 bg-[hsl(180,4%,95%)] border-[#F3F4F4] h-full rounded-md shadow-md">
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
          <div className="grid grid-cols-4 space-x-3">
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
  );
};
export default Account;
