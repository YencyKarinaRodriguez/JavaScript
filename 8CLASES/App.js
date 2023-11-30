import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behavior
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      price = parseFloat(document.getElementById("price").value),
      quantity = parseInt(document.getElementById("quantity").value),
      year = document.getElementById("year").value;

    // Create a new Object Product
    const product = new Product(name, price, quantity, year);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || isNaN(price) || isNaN(quantity) || year === "") {
      ui.showMessage("Please Insert data in all fields", "danger");
    } else {
      // Save Product
      ui.addProduct(product);
      ui.showMessage("Product Added Successfully", "success");
      ui.resetForm();
    }
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
