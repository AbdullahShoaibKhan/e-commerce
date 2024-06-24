const OfferBanner = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className=" py-5 ">
        <div className="flex sm:flex-col md:flex-col lg:flex-row flex-grow lg:space-x-4 justify-between">
          <div className="md:py-2 py-1 lg:w-1/2 md:w-1/2 sm:w-full">
            <img
              src="/Frame46.png"
              alt="gallery"
              className="w-full rounded-md h-full object-center block"
            />
          </div>
          <div className="md:py-2 py-1 lg:w-1/2 md:w-1/2 sm:w-full">
            <img
              src="/Frame63.png"
              alt="gallery"
              className="w-full rounded-md h-full object-center block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
