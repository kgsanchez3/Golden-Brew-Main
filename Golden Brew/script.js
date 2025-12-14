// ================= SEARCH FUNCTION =================
function searchProducts() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    if (title.includes(input)) {
      product.style.display = '';
    } else {
      product.style.display = 'none';
    }
  });
}

let cart = [];

function addToCart(productName) {
  // Find all product names
  const products = document.querySelectorAll('.product h3');
  let product = null;

  products.forEach(p => {
    if (p.textContent.trim() === productName) {
      product = p;
    }
  });

  if (!product) {
    alert('Product not found!');
    return;
  }

  // Get quantity input inside the label
  const qtyInput = product.parentElement.querySelector('input[type="number"]');
  const quantity = parseInt(qtyInput.value) || 1; 

  // Add to cart
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.qty += quantity;
  } else {
    cart.push({ name: productName, qty: quantity });
  }

  alert(`${productName} added to cart!`);
  console.log('Cart:', cart);
}

// ================= RATING FUNCTION =================
document.querySelectorAll('.rating').forEach(ratingDiv => {
  const stars = ratingDiv.querySelectorAll('span');
  const ratingValue = ratingDiv.nextElementSibling; 

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = parseInt(star.dataset.value);

      stars.forEach(s => s.style.color = s.dataset.value <= value ? 'gold' : 'gray');

      ratingValue.textContent = `Your rating: ${value}`;
    });
  });
});

// ================= BURGER MENU ================= //
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
    burger.classList.toggle('toggle');     
  });

  // ================= ACTIVE MENU LINK ================= //
  const navItems = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split("/").pop();

  navItems.forEach(item => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
