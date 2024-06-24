import { StarIcon } from "@heroicons/react/24/solid";
const Product = () => {
  return (
    <>
      <section className="mx-10">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3  pb-2 mx-auto">
          <div className="md:col-span-3 col-span-3 space-y-2 relative border rounded-md p-3">
            <img
              src="/Rectangle1.png"
              alt="gallery"
              className="w-full object-cover rounded-md object-center block"
            />
            <div className="flex justify-between">
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="w-20 h-20 object-cover rounded-sm object-center "
              />
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="w-20 h-20 object-cover rounded-sm object-center "
              />
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="w-20 h-20 object-cover rounded-sm object-center "
              />
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="w-20 h-20 object-cover rounded-sm object-center "
              />
              <img
                src="/Rectangle1.png"
                alt="gallery"
                className="w-20 h-20 object-cover rounded-sm object-center "
              />
            </div>
          </div>
          <div className="col-span-4 ">
            <h1 className="text-3xl font-extrabold">
              2020 Apple Macbook Pro With Apple M1 Chip(13-inch, 8GB RAM, 512GB
              SSD Storage)
            </h1>
            <div className="flex flex-row space-x-1 py-1 items-center">
              <p className="p-2 text-xs font-semibold bg-[#F3F4F4] rounded-lg">
                OnlineStoreBuy
              </p>
              <p className="p-2 text-xs font-semibold bg-[#F3F4F4] rounded-lg">
                Brand
              </p>
              <p className="p-2 text-xs font-semibold bg-[#F3F4F4] rounded-lg">
                Apple
              </p>
            </div>
            <div className="flex flex-row items-center py-1">
              <StarIcon className="h-3 w-3 text-[#ffa947] " />
              <StarIcon className="h-3 w-3 text-[#ffa947]" />
              <StarIcon className="h-3 w-3 text-[#ffa947]" />
              <StarIcon className="h-3 w-3 text-[#ffa947]" />
              <StarIcon className="h-3 w-3 text-[#ffa947]" />
              <p className="text-sm font-semibold">
                {" "}
                4.6{" "}
                <span className="text-sm font-semibold"> (129 Reviews) </span>
              </p>
            </div>
            <p className="text-sm font-semibold py-2">
              Availability:{" "}
              <span className="text-sm font-semibold text-[#FF4747]">
                34 in stock
              </span>
            </p>
            <div className="pb-3">
              <p className="text-sm font-medium pb-1">
                Color: <span className="text-sm font-semibold">Silver</span>
              </p>
              <div className="flex space-x-2 py-1">
                <p className="h-9 w-9 bg-black"></p>
                <p className="h-9 w-9 bg-[#FF4747]"></p>
                <p className="h-9 w-9 bg-[#56ff47]"></p>
              </div>
            </div>
            <p className="text-xs font-medium p-0">
              SKU:{" "}
              <span className="text-xs font-medium text-[#FF4747]">MSQ211</span>
            </p>
            <p className="text-xs font-medium p-0">
              Category:{" "}
              <span className="text-xs font-medium text-[#FF4747]">
                Electronics
              </span>
            </p>
            <div className="my-3">
              <p className="text-sm font-medium pb-1">
                Capacity: <span className="text-sm font-semibold">512GB</span>
              </p>
              <div className="flex space-x-2 py-1">
                <div className="h-[80px] w-[110px] bg-[#F3F4F4] text-center p-2 rounded-md">
                  <p className="text-sm font-medium text-[#FF4747] pb-1">
                    512GB
                  </p>
                  <p className="text-xs font-thin  pb-1">3 Options from</p>
                  <p className="text-sm font-medium pb-1">$2,124.23</p>
                </div>
                <div className="h-[80px] w-[110px] bg-[#F3F4F4] text-center p-2 rounded-md">
                  <p className="text-sm font-medium text-[#FF4747] pb-1">1TB</p>
                  <p className="text-xs font-thin  pb-1">3 Options from</p>
                  <p className="text-sm font-medium pb-1">$2,124.23</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
