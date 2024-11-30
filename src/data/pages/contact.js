export const contactPage = {
  title: "Contact DropStore - Get in Touch",
  url: "/contact",
  meta: {
    title: "Contact Us | DropStore Customer Support",
    description: "Need help? Contact our customer support team. We're here to assist you with your orders, shipping, and product inquiries.",
    keywords: "contact us, customer support, help, FAQ, shipping support"
  },
  sections: [
    {
      type: "contactForm",
      heading: "Get in Touch",
      fields: [
        {
          type: "text",
          label: "Name",
          required: true
        },
        {
          type: "email",
          label: "Email",
          required: true
        },
        {
          type: "select",
          label: "Subject",
          options: ["Order Support", "Shipping", "Product Inquiry", "Other"]
        },
        {
          type: "textarea",
          label: "Message",
          required: true
        }
      ]
    },
    {
      type: "contactInfo",
      heading: "Other Ways to Reach Us",
      items: [
        {
          icon: "phone",
          title: "Phone",
          content: "(555) 123-4567"
        },
        {
          icon: "envelope",
          title: "Email",
          content: "support@dropstore.com"
        }
      ]
    },
    {
      type: "faq",
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "What are your shipping times?",
          answer: "Standard shipping takes 5-7 business days..."
        }
      ]
    }
  ]
}