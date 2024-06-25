import CategoryCardList from "@/components/card/categoryCardList";
import CategoryFilters from "@/components/menu/categoryFilters";
import CategoriesMenu from "@/components/menu/categoryMenu";

const AllCategories = () => {
  const productsData = [
    {
      name: "latest deals",
      filters: [],
      data: [
        {
          image: "/beauty.jpg",
          productTitle: "Product A",
          reviewsCount: 129,
          starsCount: 5,
          rating: 4.6,
          price: 16.0,
        },
        {
          image: "/sport.jpg",
          productTitle: "Product B",
          reviewsCount: 97,
          starsCount: 4,
          rating: 4.2,
          price: 22.0,
        },
        {
          image: "/clothes.jpg",
          productTitle: "Product C",
          reviewsCount: 234,
          starsCount: 5,
          rating: 4.8,
          price: 12.0,
        },
        {
          image: "/electronics.jpg",
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
          image: "/electronics.jpg",
          productTitle: "Product E",
          reviewsCount: 340,
          starsCount: 5,
          rating: 4.9,
          price: 29.0,
        },
        {
          image: "/clothes.jpg",
          productTitle: "Product F",
          reviewsCount: 213,
          starsCount: 4,
          rating: 4.4,
          price: 35.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product G",
          reviewsCount: 76,
          starsCount: 4,
          rating: 4.1,
          price: 25.0,
        },
        {
          image: "/clothes.jpg",
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
          image: "/clothes.jpg",
          productTitle: "Product I",
          reviewsCount: 150,
          starsCount: 5,
          rating: 4.5,
          price: 20.0,
        },
        {
          image: "/clothes.jpg",
          productTitle: "Product J",
          reviewsCount: 140,
          starsCount: 5,
          rating: 4.3,
          price: 24.0,
        },
        {
          image: "/clothes.jpg",
          productTitle: "Product K",
          reviewsCount: 230,
          starsCount: 5,
          rating: 4.9,
          price: 28.0,
        },
        {
          image: "/clothes.jpg",
          productTitle: "Product L",
          reviewsCount: 67,
          starsCount: 4,
          rating: 4.0,
          price: 22.0,
        },
        {
          image: "/clothes.jpg",
          productTitle: "Product M",
          reviewsCount: 345,
          starsCount: 5,
          rating: 4.8,
          price: 26.0,
        },
        {
          image: "/clothes.jpg",
          productTitle: "Product N",
          reviewsCount: 145,
          starsCount: 4,
          rating: 4.4,
          price: 30.0,
        },
        {
          image: "/clothes.jpg",
          productTitle: "Product O",
          reviewsCount: 120,
          starsCount: 3,
          rating: 3.9,
          price: 18.0,
        },
        {
          image: "/clothes.jpg",
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
          image: "/beauty.jpg",
          productTitle: "Product Q",
          reviewsCount: 180,
          starsCount: 5,
          rating: 4.5,
          price: 15.0,
        },
        {
          image: "/beauty.jpg",
          productTitle: "Product R",
          reviewsCount: 85,
          starsCount: 4,
          rating: 4.1,
          price: 17.0,
        },
        {
          image: "/beauty.jpg",
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
      filters: [],
      data: [
        {
          image: "/electronics.jpg",
          productTitle: "Product T",
          reviewsCount: 300,
          starsCount: 5,
          rating: 4.8,
          price: 45.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product U",
          reviewsCount: 170,
          starsCount: 4,
          rating: 4.3,
          price: 40.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product V",
          reviewsCount: 265,
          starsCount: 5,
          rating: 4.7,
          price: 55.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product W",
          reviewsCount: 198,
          starsCount: 4,
          rating: 4.2,
          price: 37.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product T",
          reviewsCount: 300,
          starsCount: 5,
          rating: 4.8,
          price: 45.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product U",
          reviewsCount: 170,
          starsCount: 4,
          rating: 4.3,
          price: 40.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product T",
          reviewsCount: 300,
          starsCount: 5,
          rating: 4.8,
          price: 45.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product U",
          reviewsCount: 170,
          starsCount: 4,
          rating: 4.3,
          price: 40.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product T",
          reviewsCount: 300,
          starsCount: 5,
          rating: 4.8,
          price: 45.0,
        },
        {
          image: "/electronics.jpg",
          productTitle: "Product U",
          reviewsCount: 170,
          starsCount: 4,
          rating: 4.3,
          price: 40.0,
        },
      ],
    },
    {
      name: "sport",
      filters: ["best_seller", "hot_trend", "new_arrival", "our_picked"],
      data: [
        {
          image: "/sport.jpg",
          productTitle: "Product X",
          reviewsCount: 124,
          starsCount: 5,
          rating: 4.5,
          price: 34.0,
        },
        {
          image: "/sport.jpg",
          productTitle: "Product Y",
          reviewsCount: 89,
          starsCount: 4,
          rating: 4.0,
          price: 29.0,
        },
        {
          image: "/sport.jpg",
          productTitle: "Product Z",
          reviewsCount: 145,
          starsCount: 5,
          rating: 4.6,
          price: 32.0,
        }
      ],
    },
    {
      name: "hot categories",
      filters: [],
      data: [
        {
          image: "/bag.jpg",
          productTitle: "Bags & Shoes",
        },
        {
          image: "/electronics.jpg",
          productTitle: "Electronics",

        },
        {
          image: "/light.jpg",
          productTitle: "Lights & Lamps",
        },
        {
          image: "/beauty.jpg",
          productTitle: "Health & Beauty",
        },
        {
          image: "/toy.jpg",
          productTitle: "Toys & Hobbies",
        },
        {
          image: "/clothes.jpg",
          productTitle: "Fashion",
        },
        {
          image: "/sport.jpg",
          productTitle: "Sports & Outdoors",
        },
        {
          image: "/sport.jpg",
          productTitle: "Sports & Outdoors",
        }

      ],
    },
  ];
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
