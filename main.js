import './src/styles/index.css';
import { products } from './src/data/products.js';
import { Cart } from './src/js/cart.js';
import { setupSearch } from './src/js/search.js';

// Initialize cart
const cart = new Cart();

// Setup cart button functionality
const cartButton = document.getElementById('cart-button');
const cartContainer = document.getElementById('cart-container');

cartButton.addEventListener('click', () => {
  cartContainer.classList.toggle('active');
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
  if (!cartContainer.contains(e.target) && !cartButton.contains(e.target)) {
    cartContainer.classList.remove('active');
  }
});

// Function to format price
function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
}

// Function to display products
function displayProducts(productsToShow) {
  const productsGrid = document.getElementById('products-grid');
  productsGrid.innerHTML = productsToShow.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}" class="product-image">
      <div class="product-info">
        <h3>${product.title}</h3>
        <p class="description">${product.description}</p>
        <p class="price">${formatPrice(product.price)}</p>
        <button 
          class="button"
          onclick="window.addToCart(${product.id})"
        >
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

// Initialize search functionality
setupSearch(products, displayProducts);

// Make addToCart function available globally
window.addToCart = (productId) => {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.addItem(product);
  }
};

// Make removeFromCart function available globally
window.removeFromCart = (productId) => {
  cart.removeItem(productId);
};

// Initial product display
displayProducts(products);