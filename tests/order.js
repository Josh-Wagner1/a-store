class Order {
    constructor(id, clientid, items, total, time, active) {
        this.id = id;
        this.clientid = clientid;
        this.items = items;
        this.total = total;
        this.time = time;
        this.active = active;
    }
} 

module.exports = Order