const categories = [
  {
    id: 0,
    img: "/src/assets/images/categories/baby.jpg",
    title: "Для детей",
    products: [0, 2, 5, 6, 7, 8],
  },
  {
    id: 1,
    img: "/src/assets/images/categories/fruits.jpg",
    title: "Фрукты",
    products: [2, 5, 6, 3, 5, 9, 10],
  },
  {
    id: 2,
    img: "/src/assets/images/categories/hygiene.jpg",
    title: "Гигиена",
    products: [4, 5, 2, 1, 7, 8, 9, 10],
  },
  {
    id: 3,
    img: "/src/assets/images/categories/milk.jpg",
    title: "Молочные изделия",
    products: [6, 3, 8, 2, 5, 7, 9, 11],
  },
  {
    id: 4,
    img: "/src/assets/images/categories/tomato.jpg",
    title: "Овощи",
    products: [4, 5, 2, 1, 7, 8, 9, 10],
  },
];

const products = [
  {
    id: 0,
    name: "Apple",
    img: "/src/assets/images/not_found.jpg",
    price: 300,
  },
  {
    id: 1,
    name: "Bread",
    img: "/src/assets/images/not_found.jpg",
    price: 200,
  },
  {
    id: 2,
    name: "Milk",
    img: "/src/assets/images/not_found.jpg",
    price: 100,
  },
  {
    id: 3,
    name: "Beef",
    img: "/src/assets/images/not_found.jpg",
    price: 150,
  },
  {
    id: 4,
    name: "Lamb",
    img: "/src/assets/images/not_found.jpg",
    price: 140,
  },
  {
    id: 5,
    name: "Potato",
    img: "/src/assets/images/not_found.jpg",
    price: 230,
  },
  {
    id: 6,
    name: "Bananas",
    img: "/src/assets/images/not_found.jpg",
    price: 220,
  },
  {
    id: 7,
    name: "Watermelon",
    img: "/src/assets/images/not_found.jpg",
    price: 110,
  },
  {
    id: 8,
    name: "Honymelon",
    img: "/src/assets/images/not_found.jpg",
    price: 420,
  },
  {
    id: 9,
    name: "Melon",
    img: "/src/assets/images/not_found.jpg",
    price: 230,
  },
  {
    id: 10,
    name: "Pumpkin",
    img: "/src/assets/images/not_found.jpg",
    price: 560,
  },
  {
    id: 11,
    name: "Orange",
    img: "/src/assets/images/not_found.jpg",
    price: 650,
  },
];

export const getCategories = () => {
  return categories;
};

export const getProducts = (categoryId) => {
  return categories[categoryId].products.map(
    (productId) => products[productId]
  );
};

export const getProductInfo = (productId) => products[productId];
