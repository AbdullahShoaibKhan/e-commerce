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
          <div className="bg-[#F3F4F4] border lg:p-4 md:p-3 sm:p-2 rounded-lg">
              <div className="flex items-center">
              <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md p-2"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                <h2
                    className="xl:text-2xl lg:text-xl md:text-lg sm:text-md xl:font-bold lg:font-semibold md:font-medium sm:font-medium"
                    style={{ lineHeight: "21 px" }}
                  >
                    FREE SHIPPING
                  </h2>
                  <p className="text-md font-light">On order over $200</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F4F4] border lg:p-4 md:p-3 sm:p-2 rounded-lg">
              <div className="flex items-center">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md p-2"
                  src="https://dummyimage.com/84x84"
                />
                <div>
                  <h2
                    className="xl:text-2xl lg:text-xl md:text-lg sm:text-md xl:font-bold lg:font-semibold md:font-medium sm:font-medium"
                    style={{ lineHeight: "21 px" }}
                  >
                    30-DAY RETURN
                  </h2>
                  <p className="text-md font-light">Moneyback guarantee</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F4F4] border lg:p-4 md:p-3 sm:p-2 rounded-lg">
              <div className="flex items-center">
              <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md p-2"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                <h2
                    className="xl:text-2xl lg:text-xl md:text-lg sm:text-md xl:font-bold lg:font-semibold md:font-medium sm:font-medium"
                    style={{ lineHeight: "21 px" }}
                  >30-DAY RETURN</h2>
                  <p className="text-md font-light">Moneyback Guarantee</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F4F4] border lg:p-4 md:p-3 sm:p-2 rounded-lg">
              <div className="flex items-center">
              <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md p-2"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                <h2
                    className="xl:text-2xl lg:text-xl md:text-lg sm:text-md xl:font-bold lg:font-semibold md:font-medium sm:font-medium"
                    style={{ lineHeight: "21 px" }}
                  >24/7 SUPPORT</h2>
                  <p className="text-md font-light">Online Consultations</p>
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
