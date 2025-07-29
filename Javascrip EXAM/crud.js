function showProductDetails(name, priceStr, image) {
  const price = parseInt(priceStr.replace(/\D/g, ''));
  let quantity = 1;
  const body = document.querySelector('.offcanvas-body');

  function updateView() {
    const total = price * quantity;
    body.innerHTML = `
      <div class="text-center">
        <img src="${image}" alt="${name}" style="max-width:100%;"/>
        <h5 class="mt-3">${name}</h5>
        <p class="fw-bold text-danger">Price: ₹${price}</p>
        <div class="d-flex justify-content-center align-items-center gap-3 mb-3">
          <button class="btn btn-outline-danger qty-btn" onclick="changeQty(-1)">–</button>
          <span id="qtyDisplay" class="fs-4">${quantity}</span>
          <button class="btn btn-outline-success qty-btn" onclick="changeQty(1)">+</button>
          <span class="delete-icon" onclick="removeProduct()">🗑️</span>
        </div>
        <p class="fs-5">Total: ₹<span id="totalPrice">${total}</span></p>
        <button class="btn btn-success">Buy Now</button>
      </div>`;
  }

  window.changeQty = (val) => {
    if (quantity + val >= 1) {
      quantity += val;
      updateView();
    }
  };

  window.removeProduct = () => {
    body.innerHTML = `<p class="text-center text-muted">Product removed.</p>`;
  };

  updateView();

  const offcanvasEl = document.getElementById('offcanvasRight');
  const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
  bsOffcanvas.show();
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortPrice");
  const categorySelect = document.getElementById("categoryFilter");
  searchInput.addEventListener("input", updateProductList);
  sortSelect.addEventListener("change", updateProductList);
  categorySelect.addEventListener("change", updateProductList);
});

function updateProductList() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const sort = document.getElementById("sortPrice").value;
  const category = document.getElementById("categoryFilter").value;
  const all = document.querySelectorAll(".product");
  all.forEach(prod => {
    const name = prod.querySelector(".name").textContent.toLowerCase();
    const price = parseInt(prod.querySelector(".price").textContent.replace(/\D/g,''));
    const matchesSearch = name.includes(search);
    const matchesCat = category === "" || name.includes(category.toLowerCase());
    prod.style.display = (matchesSearch && matchesCat) ? "block" : "none";
    prod.dataset.price = price;
  });

  const container = document.querySelector(".products");
  const visible = Array.from(container.children).filter(el => el.style.display !== "none");
  visible.sort((a, b) => {
    const pa = +a.dataset.price, pb = +b.dataset.price;
    return (sort === "low") ? pa - pb : (sort === "high") ? pb - pa : 0;
  });
  visible.forEach(el => container.appendChild(el));
}
