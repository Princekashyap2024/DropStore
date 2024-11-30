export const productsPage = {
  title: "Shop Our Products - DropStore",
  url: "/products",
  meta: {
    title: "Shop Premium Products | DropStore",
    description: "Browse our extensive collection of high-quality products. Find the best deals on electronics, accessories, and lifestyle items.",
    keywords: "shop online, electronics, accessories, deals, premium products"
  },
  sections: [
    {
      type: "filters",
      categories: ["Electronics", "Lifestyle", "Accessories"],
      priceRanges: ["Under $25", "$25-$50", "$50-$100", "Over $100"],
      sortOptions: ["Newest", "Price: Low to High", "Price: High to Low", "Most Popular"]
    },
    {
      type: "productGrid",
      heading: "All Products",
      itemsPerPage: 12,
      layout: "grid"
    }
  ]
}