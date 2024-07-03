
const RandomFilters = ({ data }: any) => {
  const words = data.name.split(" ");
  return (
    <div className="flex flex-row flex-wrap justify-start py-2 flex-1 relative">
      <p className="text-3xl font-extrabold">
        {words.map((word: any, index: any) =>
          index === words.length - 1 ? (
            <span key={index} className="text-[#FF4747]">
              {word.toUpperCase()}
            </span>
          ) : (
            `${word.toUpperCase()} `
          )
        )}
      </p>
      </div>
  );
};
export default RandomFilters;
