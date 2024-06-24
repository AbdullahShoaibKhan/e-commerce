const Offers = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="">
            <img
              src="/Frame45.png"
              alt="gallery"
              className="w-full rounded-md h-full object-center block"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-[#F3F4F4] border p-4 rounded-lg">
              <div className="flex items-center">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-md font-bold">FREE SHIPPING</h2>
                  <p className="text-sm font-light">On order over $200</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F4F4] border p-4 rounded-lg">
              <div className="flex items-center">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                  <h2 className="text-md font-bold">30-DAY RETURN</h2>
                  <p className="text-sm font-light">Moneyback guarantee</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F4F4] border p-4 rounded-lg">
              <div className="flex items-center">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-md font-bold">30-DAY RETURN</h2>
                  <p className="text-sm font-light">Moneyback Guarantee</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F4F4] border p-4 rounded-lg">
              <div className="flex items-center">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90"
                />
                <div className="flex-grow">
                  <h2 className="text-md font-bold">24/7 SUPPORT</h2>
                  <p className="text-sm font-light">Online Consultations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
