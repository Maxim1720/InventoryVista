
class Product{
    #id;
    #name;
    #description;
    #quantity;
    #expirationDate;

    constructor(item) {
        this.#name = item.name;
        this.#description = item.description;
        this.#expirationDate = item.expirationDate;
        this.#quantity = item.quantity;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    get expirationDate() {
        return this.#expirationDate;
    }

    set expirationDate(value) {
        this.#expirationDate = value;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#quantity = value;
    }
}

export default Product;