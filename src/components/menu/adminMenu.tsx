"use client";

const AdminMenu = () => {

  return (
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
  );
};

export default AdminMenu;