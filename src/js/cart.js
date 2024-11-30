export class Cart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    
    this.updateTotal();
    this.updateCartUI();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.updateTotal();
    this.updateCartUI();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.updateTotal();
      this.updateCartUI();
    }
  }

  updateTotal() {
    this.total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }

  updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');

    const itemCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = itemCount;
    cartTotal.textContent = this.formatPrice(this.total);

    cartItems.innerHTML = this.items.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}">
        <div class="cart-item-details">
          <h4>${item.title}</h4>
          <p>${this.formatPrice(item.price)} × ${item.quantity}</p>
        </div>
        <button class="button remove" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `).join('');
  }
}