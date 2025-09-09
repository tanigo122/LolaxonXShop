document.addEventListener("DOMContentLoaded", () => {
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");

  const product = products.find(p => p.id == id);

  const container = document.getElementById("product-details");

  if (!product) {
    container.innerHTML = `<h2 class="text-danger">404 product not found</h2>`;
    return;
  }

  container.innerHTML = `
    <div class="col-md-6">
      <div class="card h-100 shadow-lg">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h3 class="card-title">${product.name}</h3>
          <p class="card-text">Цена: <strong>${product.price}</strong></p>
          <button class="btn btn-dark add-to-cart" data-id="${product.id}">Add to cart</button>
          <a href="index.html" class="btn btn-outline-secondary ms-2">To main page</a>
        </div>
      </div>
    </div>
  `;
});
