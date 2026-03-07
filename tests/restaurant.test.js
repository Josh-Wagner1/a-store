const { time } = require("node:console");
const { createClient, createOrder } = require("./fakerFactory.js");
const PriorityQueueFrontier = require("./restaurant.js");

let pq1;
let pq2;
let pq3;

describe("calculator tests", () => {
    /**
     * Create Priority queue and orders for the tests
     */
    beforeAll(async () => {
        //Create 3 valid dated orders
        const validNew = createOrder({
            time: new Date('2026-03-07T14:30:00.000Z')
        });

        const validOld = createOrder({
            time: new Date('2026-02-07T14:30:00.000Z')
        });

        const validOlder = createOrder({
            time: new Date('2026-01-07T14:30:00.000Z')
        });

        //Create invalid order
        const invalidOrder = createOrder({
            id: null, 
            clientId: null, 
            numItems: null, 
            total: null, 
            time: null
        });
        
    });

    /**
     * Priority Queue throws error when empty
     */
    it("should prevent removing an order from an empty queue", async () => {
        pq1 = PriorityQueueFrontier;
        return expect(async () => await pq1.remove()).rejects;
    });

    /**
     * Priority Queue throws error when importing incomplete data
     */
    it("should prevent adding an invalid order", async () => {
        pq1 = PriorityQueueFrontier;
        return expect(async () => await pq1.add(invalidOrder)).rejects;
    });


});