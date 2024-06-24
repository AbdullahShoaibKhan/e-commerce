import BigCard from "./bigCard";
import Card from "./card1";
import Card2 from "./card2";
import CategoryCard from "./categoryCard";
import FeaturedFilters from "../filters/featuredFilters";
import LatestDealFilters from "../filters/latestDealFilters";
import RandomFilters from "../filters/randomFilters";
import SmallCard from "./smallCard";
import OfferBanner from "../menu/offersBanner";

const HomeCardList = ({ products }: any) => {
  function separateProductsData(products: any) {
    const separatedData: any = {};

    products?.forEach((productCategory: any) => {
      const variableName: any = productCategory.name
        .replace(/ /g, "_")
        .toLowerCase();
      separatedData[variableName] = productCategory;
    });

    return separatedData;
  }

  const separatedProducts = separateProductsData(products);

  // Example of accessing the variables
  const sport = separatedProducts["sport"];
  const latest_deals = separatedProducts["latest_deals"];
  const featured_items = separatedProducts["featured_items"];
  const new_fall_collection = separatedProducts["new_fall_collection"];
  const health_and_beauty = separatedProducts["health_and_beauty"];
  const electronics = separatedProducts["electronics"];

  return (
    <>
      <div className="bg-[#F3F4F4] p-4 my-2 rounded-md">
        <LatestDealFilters />
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <FeaturedFilters />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <RandomFilters />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <RandomFilters />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <RandomFilters />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <RandomFilters />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <OfferBanner />
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <RandomFilters />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </>
  );
};
export default HomeCardList;
