import CategoryCardList from "@/components/card/categoryCardList";
import CategoryFilters from "@/components/menu/categoryFilters";
import CategoriesMenu from "@/components/menu/categoryMenu";

const AllCategories = ({ productsData }: any) => {
  return (
    <div className="grid grid-cols-4 gap-4 mx-10">
      <div className="col-span-1">
        <CategoriesMenu />
        <CategoryFilters />
      </div>
      <div className="col-span-3">
        <CategoryCardList products={productsData} />
      </div>
    </div>
  );
};

export default AllCategories;
