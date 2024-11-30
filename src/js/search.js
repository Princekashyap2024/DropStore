export function setupSearch(products, updateDisplay) {
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
    updateDisplay(filteredProducts);
  });
}