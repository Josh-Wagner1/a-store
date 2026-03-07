class Order {
    constructor({ id, clientId, numItems, total, time }) {
        this.id = id;
        this.clientId = clientId;
        this.numItems = numItems;
        this.total = total;
        this.time = time;
    }
}

module.exports = new Order();