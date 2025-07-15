function showProductDetails(name, priceStr, image) {
      const price = parseInt(priceStr.replace(/\D/g, '')); 
      let quantity = 1;

      const body = document.querySelector('.offcanvas-body');
      const updateView = () => {
        const total = price * quantity;
        body.innerHTML = `
          <div class="text-center">
            <img src="${image}" alt="${name}" style="max-width: 100%; height: auto;" />
            <h5 class="mt-3">${name}</h5>
            <p class="fw-bold text-danger">Price: ₹${price}</p>
            <div class="d-flex justify-content-center align-items-center gap-3 mb-3">
              <button class="btn btn-outline-danger qty-btn" onclick="changeQty(-1)">–</button>
              <span id="qtyDisplay" class="fs-4">${quantity}</span>
              <button class="btn btn-outline-success qty-btn" onclick="changeQty(1)">+</button>
              <span class="delete-icon" onclick="deleteProduct()">🗑️</span>
            </div>
            <p class="fs-5">Total: ₹<span id="totalPrice">${total}</span></p>
            <button class="btn btn-success">Buy Now</button>
          </div>
        `;
      };
  // Inject helpers globally so onclick handlers work
      window.changeQty = (val) => {
        if (quantity + val >= 1) {
          quantity += val;
          updateView();
        }
      };

      window.deleteProduct = () => {
        quantity = 1;
        document.querySelector('.offcanvas-body').innerHTML = `<p class="text-center text-muted">Product removed.</p>`;
      };

      updateView();

      const offcanvasEl = document.getElementById('offcanvasRight');
      const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
      bsOffcanvas.show();
    }