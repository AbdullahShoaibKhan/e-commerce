import BigCard from "./bigCard";
import Card from "./card1";
import Card2 from "./card2";
import CategoryCard from "./categoryCard";
import FeaturedFilters from "../filters/featuredFilters";
import LatestDealFilters from "../filters/latestDealFilters";
import RandomFilters from "../filters/randomFilters";
import SmallCard from "./smallCard";
import OfferBanner from "../menu/offersBanner";

const CategoryCardList = ({products}:any) => {
  function separateProductsData(products:any) {
    const separatedData:any = {};
    
    products?.forEach((productCategory :any) => {
      const variableName:any = productCategory.name.replace(/ /g, '_').toLowerCase();
      separatedData[variableName] = productCategory;
    });
  
    return separatedData;
  }
  
  const separatedProducts = separateProductsData(products);
  
  // Example of accessing the variables
  const sport = separatedProducts['sport'];
  const latest_deals = separatedProducts['latest_deals'];
  const featured_items = separatedProducts['featured_items'];
  const new_fall_collection = separatedProducts['new_fall_collection'];
  const health_and_beauty = separatedProducts['health_and_beauty'];
  const electronics = separatedProducts['electronics'];

  return (
    <>
      <div className="bg-white p-4 ">
        <RandomFilters />
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
      </div>

    </>
  );
};
export default CategoryCardList;
