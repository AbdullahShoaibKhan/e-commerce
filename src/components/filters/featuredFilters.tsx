
const FeaturedFilters = () => {
  return (
      <div className="flex flex-row justify-between py-2 flex-1">
        <p className="text-3xl font-extrabold">
          FEATURED <span className="text-[#FF4747]">ITEMS</span>
        </p>
        <div className="flex flex-row space-x-1 items-center">
            <p className="text-xs font-extrabold">VIEW All</p>
            <p className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md">Best Sellers</p>
            <p className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md">Specials</p>
            <p className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md">Popular</p>
            <p className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md">Our Picked</p>
            <p className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md">Digital Plus</p>
            
        </div>
      </div>
  );
};
export default FeaturedFilters;
