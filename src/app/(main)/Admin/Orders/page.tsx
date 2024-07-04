import Table from "./_components/table";

const page = () => {
  return (
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
        <div className="flex justify">
          <Table />
        </div>
      </div>
    </div>
  );
};
export default page;
