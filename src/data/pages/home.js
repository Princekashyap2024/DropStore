export const homePage = {
  title: "DropStore - Premium Products, Unbeatable Prices",
  url: "/",
  meta: {
    title: "DropStore | Premium Dropshipping Products at Unbeatable Prices",
    description: "Discover high-quality products at competitive prices. From electronics to lifestyle essentials, shop our curated collection with worldwide shipping.",
    keywords: "dropshipping, online store, electronics, lifestyle products, free shipping"
  },
  sections: [
    {
      type: "hero",
      heading: "Premium Products, Unbeatable Prices",
      subheading: "Discover our curated collection of high-quality products delivered straight to your door.",
      cta: "Shop Now",
      backgroundImage: "hero-banner.jpg"
    },
    {
      type: "featured",
      heading: "Featured Categories",
      items: [
        {
          title: "Electronics",
          image: "electronics-category.jpg",
          description: "Latest gadgets and accessories",
          link: "/categories/electronics"
        },
        {
          title: "Lifestyle",
          image: "lifestyle-category.jpg",
          description: "Premium lifestyle products",
          link: "/categories/lifestyle"
        }
      ]
    },
    {
      type: "benefits",
      items: [
        {
          icon: "truck",
          title: "Free Shipping",
          description: "On orders over $50"
        },
        {
          icon: "shield",
          title: "Secure Payments",
          description: "100% secure transactions"
        }
      ]
    }
  ]
}