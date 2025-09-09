const products = [
    { id: 1, name: "Laptop", price: 700, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=300&q=80" },
    { id: 2, name: "Headphones", price: 50, image: "https://spphone.uz/wp-content/uploads/2024/02/d645920e395fedad7bbbed0eca3fe2e02023110310321177461Ad1kQq1IEv.jpg.webp" },
    { id: 3, name: "Smartphone", price: 500, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=300&q=80" },
    { id: 4, name: "Keyboard", price: 40, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=300&q=80" },
    { id: 5, name: "Mouse", price: 25, image: "https://mini-io-api.texnomart.uz/catalog/product/3582/358262/208761/334ad8a5-63fe-4daf-aeff-be02e6cfdb77.webp" },
    { id: 6, name: "Monitor", price: 300, image: "https://olcha.uz/image/700x700/products/2022-01-21/monitor-xiaomi-desktop-27-33228-0.jpeg" },
    { id: 7, name: "Camera", price: 450, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=300&q=80" },
    { id: 8, name: "Tablet", price: 350, image: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg" },
    { id: 9, name: "Tablet Pen", price: 30, image: "https://m.media-amazon.com/images/I/61hsxtX4goL.jpg" },
    { id: 10, name: "Gaming PC", price: 950, image: "https://www.memorypc.eu/media/1d/ec/ca/1753183068/563472-05-1753183065-secondlast-1753183066.webp" },
    { id: 11, name: "Web Camera", price: 150, image: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg" },
    { id: 12, name: "Fleshka", price: 10, image: "https://maxcom.uz/storage/product/0cAKj4CtmRIktWFjDaYbjE3gjcFhNK14OB3RZd4W.jpeg" },
    { id: 13, name: "SDD", price: 350, image: "https://m.media-amazon.com/images/I/71DC9XpVXvL.jpg" },
    { id: 14, name: "HHD", price: 350, image: "https://220volt.uz/image/cache/catalog/AVTECH/0469-320x320.jpg.webp" },
    { id: 15, name: "Video Card", price: 550, image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20201028111959.png" },
    { id: 16, name: "PowerBank", price: 150, image: "https://api.idea.uz/storage/products/February2024/JTFIzQAodH1LsKXLWQjL.png" }
  ];
let cart = [];
const row = document.querySelector(".row");
function renderProducts() {
    row.innerHTML = "";
    products.forEach(product => {
        const col = document.createElement("div");
        col.className = "col mb-5";
        col.innerHTML = `
        <div class="card h-100">
          <img class="card-img-top" src="${product.image}" alt="${product.name}" />
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">${product.name}</h5>
              ${product.price}
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <a href="singlePage.html?id=${product.id}" class="btn btn-outline-dark mt-auto" data-id="${product.id}">
   Ba'tafsil
</a>

            </div>
          </div>
        </div>
      `;
        row.appendChild(col);
    });
    document.querySelectorAll("[data-id ]").forEach(btn => {
        btn.addEventListener("click", () => addToCart(btn.dataset.id));
    });
}
function addToCart(id) {
    const product = products.find(p => p.id == id);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
    console.log("Cart:", cart);
}
function updateCartCount() {
    const badge = document.querySelector(".badge");
    badge.textContent = cart.length;
}
renderProducts();
updateCartCount();
