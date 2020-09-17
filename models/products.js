const products = [];

module.exports = class Product {

    constructor(newTitle) {
        this.title = newTitle
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }

}