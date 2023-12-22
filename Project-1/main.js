function login() {
    // Add authentication logic here
    // For simplicity, just toggle visibility between login and store containers
    document.getElementById("login-container").style.display = "none";
    document.getElementById("store-container").style.display = "block";
    loadProducts();
  }
  
  function loadProducts() {
    // In a real scenario, you'd fetch product data from a server
    const products = [
      { id: 1, name: "Product 1", price: 19.99 },
      { id: 2, name: "Product 2", price: 29.99 },
      // Add more products as needed
    ];
  
    const productList = document.getElementById("product-list");
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = <h3>${product.name}</h3><p>$${product.price.toFixed(2)}</p>;
      productList.appendChild(card);
    });
  }
  
  function checkout() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
  
    if (selectedPayment) {
      // Add logic for payment processing
      alert(Payment successful using ${selectedPayment.value});
    } else {
      alert("Please select a payment option");
    }
  }