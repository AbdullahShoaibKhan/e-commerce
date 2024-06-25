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
  const hot_categories = separatedProducts["hot_categories"];

  console.log(
    sport,
    latest_deals,
    featured_items,
    new_fall_collection,
    health_and_beauty,
    electronics
  );
  return (
    <>
      <div className="bg-[#F3F4F4] p-4 my-2 rounded-md">
        <LatestDealFilters />
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {latest_deals?.data.map((product: any, index: any) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <FeaturedFilters data={featured_items} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured_items?.data.map((product: any, index: any) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <FeaturedFilters data={new_fall_collection} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {new_fall_collection?.data.map((product: any, index: any) => (
            <SmallCard key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <FeaturedFilters data={health_and_beauty} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {health_and_beauty?.data.map((product: any, index: any) => (
            <BigCard key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <FeaturedFilters data={electronics} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {electronics?.data.map((product: any, index: any) => (
            <Card2 key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <FeaturedFilters data={sport} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sport?.data.map((product: any, index: any) => (
            <BigCard key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <OfferBanner />
      </div>
      <div className="bg-white border rounded-md border-[#F3F4F4] p-4 my-2 shadow-lg">
        <FeaturedFilters data={hot_categories} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hot_categories?.data.map((product: any, index: any) => (
            <CategoryCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default HomeCardList;
