/**
 * Product Class
 */
export class Product {
  /**
   *
   * @param {string} name The Product Name
   * @param {number} price The Product Price
   * @param {number} quantity The Product Quantity
   * @param {number} year The year creation of the Product
   */
  constructor(name, price, quantity, year) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.year = year;
    this.totalPrice = price * quantity;
  }
}

