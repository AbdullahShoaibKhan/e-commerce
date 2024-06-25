const FeaturedFilters = ({ data }: any) => {
  const words = data.name.split(" ");
  return (
    <div className="flex flex-row justify-between py-2 flex-1">
      <p className="text-3xl font-extrabold">
        {words.map((word:any, index:any) =>
          index === words.length - 1 ? (
            <span key={index} className="text-[#FF4747]">
              {word.toUpperCase()}
            </span>
          ) : (
            `${word.toUpperCase()} `
          )
        )}
      </p>
      <div className="flex flex-row space-x-1 items-center">
        <p className="text-xs font-extrabold">VIEW All</p>
        {data?.filters?.map((filter: any, index: any) => (
          <p
            key={index}
            className="p-2 text-xs font-medium bg-[#F3F4F4] rounded-md capitalize"
          >
            {filter.replace(/_/g, " ")}
          </p>
        ))}
      </div>
    </div>
  );
};
export default FeaturedFilters;
