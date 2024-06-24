
const LatestDealFilters = () => {
  return (
      <div className="flex flex-row justify-between py-2 flex-1">
        <p className="text-3xl font-extrabold">
          LATEST <span className="text-[#FF4747]">DEALS</span>
        </p>
        <div className="flex flex-row space-x-1 items-center">
            <p className="text-xs font-extrabold">VIEW All</p>
            <p className="p-2 text-xs font-medium bg-white rounded-md"><span className="text-sm font-bold text-[#FF4747]"> 05</span> Hours</p>
            <p className="p-2 text-xs font-medium bg-white rounded-md"><span className="text-sm font-bold text-[#FF4747]"> 20</span> Min</p>
            <p className="p-2 text-xs font-medium bg-white rounded-md"><span className="text-sm font-bold text-[#FF4747]"> 17</span> Seconds</p>
        </div>
      </div>
  );
};
export default LatestDealFilters;
