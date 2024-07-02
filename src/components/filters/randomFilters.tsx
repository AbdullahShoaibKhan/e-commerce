
const RandomFilters = () => {
  return (
      <div className="flex flex-row flex-wrap lg:justify-between md:justify-center py-2 flex-1">
        <p className="text-3xl font-extrabold">
          NEW FALL <span className="text-[#FF4747]">COLLECTION</span>
        </p>
        <div className="flex flex-row space-x-1 items-center">
            <p className="text-xs font-extrabold">VIEW All</p>
            <p className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md text-center">Best Sellers</p>
            <p className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md">Our Picked</p>
            <p className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md">Hot Trend</p>
            <p className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md">New Arrivals</p>
            
        </div>
      </div>
  );
};
export default RandomFilters;
