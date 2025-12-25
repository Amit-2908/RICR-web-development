async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    const productList = document.getElementById("productRow");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-12", "mb-1");

      d.innerHTML = ` <div class="row " id="productRow">
          <div class="col-3  border-1 border-secondary mb-1 ps-3 shadow">
            <img src=${element.image} alt=${
        element.title
      } class="object-fit-contain" width="215px" />
            
          </div>

          <div class="col-9  border-1 border-secondary mb-1 shadow">
          
          <div class="fw-bold fs-4">${
        element.title.length > 50
          ? element.title.slice(0, 45) + "..."
          : element.title
      }</div>
      <div class="fw-semibold">${element.rating.rate}/5 (${
        element.rating.count
      })</div>
      <div class="fw-semibold fs-5">₹ ${element.price * 100}</div>
      <div class="mb-2">
        ${element.description.slice(0, 80)}...
      </div>

      <div class="d-flex justify-content-center gap-3">
        <button class="btn btn-outline-primary">Add to Cart</button>
        <button class="btn btn-primary">Buy Now</button>
      </div>
          </div>

        </div>`;

      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProducts();

