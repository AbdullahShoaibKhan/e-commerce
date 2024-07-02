const CategoryImages = () => {
  return (
    <>
  <section className="text-gray-600 body-font">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 pb-2 mx-auto">
    <div className="md:col-span-2 col-span-1">
      <img
        src="/Rectangle1.png"
        alt="gallery"
        className="w-full object-cover rounded-md h-full object-center block"
      />
    </div>
    <div className="hidden lg:grid grid-rows-2 gap-2">
      <div className="w-full">
        <img
          alt="gallery"
          className="w-full object-cover rounded-md h-full object-center block"
          src="/Rectangle2.png"
        />
      </div>
      <div className="w-full">
        <img
          alt="gallery"
          className="w-full h-full object-cover rounded-md object-center block"
          src="/Rectangle3.png"
        />
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default CategoryImages;
