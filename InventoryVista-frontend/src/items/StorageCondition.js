
class StorageCondition{

    #id;
    #humidity;
    #temperature;
    #lighting;
    #otherDetails;
    #productId;
    constructor(item) {
        this.#humidity = item.humidity;
        this.#temperature = item.temperature;
        this.#lighting = item.lighting;
        this.#otherDetails = item.otherDetails;
        this.#productId = item.productId;
        this._item = item;
    }

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }

    get humidity() {
        return this.#humidity;
    }

    set humidity(value) {
        this.#humidity = value;
    }

    get temperature() {
        return this.#temperature;
    }

    set temperature(value) {
        this.#temperature = value;
    }

    get lighting() {
        return this.#lighting;
    }

    set lighting(value) {
        this.#lighting = value;
    }

    get otherDetails() {
        return this.#otherDetails;
    }

    set otherDetails(value) {
        this.#otherDetails = value;
    }

    get productId() {
        return this.#productId;
    }

    set productId(value) {
        this.#productId = value;
    }
}

export default StorageCondition;