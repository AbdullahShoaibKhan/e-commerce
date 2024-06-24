import Card from "@/components/card/card1";
import HomeCardList from "@/components/card/homeCardList";
import CategoryImages from "@/components/menu/categoryImages";
import CategoriesMenu from "@/components/menu/categoryMenu";
import Offers from "@/components/menu/offers";
import OfferBanner from "@/components/menu/offersBanner";
const productsData = [
  {
    name: "latest deals",
    filters: [],
    data: [
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product A",
        reviewsCount: 129,
        starsCount: 5,
        rating: 4.6,
        price: 16.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product B",
        reviewsCount: 97,
        starsCount: 4,
        rating: 4.2,
        price: 22.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product C",
        reviewsCount: 234,
        starsCount: 5,
        rating: 4.8,
        price: 12.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product D",
        reviewsCount: 56,
        starsCount: 3,
        rating: 3.8,
        price: 18.0,
      },
    ],
  },
  {
    name: "featured items",
    filters: [
      "best_seller",
      "our_picked",
      "digital_plus",
      "popular",
      "special",
    ],
    data: [
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product E",
        reviewsCount: 340,
        starsCount: 5,
        rating: 4.9,
        price: 29.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product F",
        reviewsCount: 213,
        starsCount: 4,
        rating: 4.4,
        price: 35.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product G",
        reviewsCount: 76,
        starsCount: 4,
        rating: 4.1,
        price: 25.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product H",
        reviewsCount: 128,
        starsCount: 5,
        rating: 4.7,
        price: 31.0,
      },
    ],
  },
  {
    name: "new fall collection",
    filters: ["best_seller", "hot_trend", "new_arrival", "our_picked"],
    data: [
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product I",
        reviewsCount: 150,
        starsCount: 5,
        rating: 4.5,
        price: 20.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product J",
        reviewsCount: 140,
        starsCount: 5,
        rating: 4.3,
        price: 24.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product K",
        reviewsCount: 230,
        starsCount: 5,
        rating: 4.9,
        price: 28.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product L",
        reviewsCount: 67,
        starsCount: 4,
        rating: 4.0,
        price: 22.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product M",
        reviewsCount: 345,
        starsCount: 5,
        rating: 4.8,
        price: 26.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product N",
        reviewsCount: 145,
        starsCount: 4,
        rating: 4.4,
        price: 30.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product O",
        reviewsCount: 120,
        starsCount: 3,
        rating: 3.9,
        price: 18.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product P",
        reviewsCount: 290,
        starsCount: 5,
        rating: 4.7,
        price: 27.0,
      },
    ],
  },
  {
    name: "health and beauty",
    filters: ["best_seller", "hot_trend", "new_arrival", "our_picked"],
    data: [
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product Q",
        reviewsCount: 180,
        starsCount: 5,
        rating: 4.5,
        price: 15.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product R",
        reviewsCount: 85,
        starsCount: 4,
        rating: 4.1,
        price: 17.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product S",
        reviewsCount: 212,
        starsCount: 5,
        rating: 4.6,
        price: 23.0,
      },
    ],
  },
  {
    name: "electronics",
    filters: ["best_seller", "hot_trend", "new_arrival", "our_picked"],
    data: [
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product T",
        reviewsCount: 300,
        starsCount: 5,
        rating: 4.8,
        price: 45.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product U",
        reviewsCount: 170,
        starsCount: 4,
        rating: 4.3,
        price: 40.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product V",
        reviewsCount: 265,
        starsCount: 5,
        rating: 4.7,
        price: 55.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product W",
        reviewsCount: 198,
        starsCount: 4,
        rating: 4.2,
        price: 37.0,
      },
    ],
  },
  {
    name: "sport",
    filters: ["best_seller", "hot_trend", "new_arrival", "our_picked"],
    data: [
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product X",
        reviewsCount: 124,
        starsCount: 5,
        rating: 4.5,
        price: 34.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product Y",
        reviewsCount: 89,
        starsCount: 4,
        rating: 4.0,
        price: 29.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product Z",
        reviewsCount: 145,
        starsCount: 5,
        rating: 4.6,
        price: 32.0,
      },
      {
        image: "https://dummyimage.com/420x260",
        productTitle: "Product AA",
        reviewsCount: 110,
        starsCount: 4,
        rating: 4.2,
        price: 28.0,
      },
    ],
  },
];
const AllCategories = ({ productsData }: any) => {
  return (
    <div className="mx-10">
      <div className="flex flex-row space-x-2">
        <div className="w-1/4">
          <CategoriesMenu />
        </div>
        <div className="w-3/4">
          <CategoryImages />
        </div>
      </div>
      <div>
        <Offers />
      </div>
      <div>
        <HomeCardList products={productsData} />
      </div>
    </div>
  );
};

export default AllCategories;
