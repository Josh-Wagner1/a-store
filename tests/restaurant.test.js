const { createClient, createOrder } = require("./fakerFactory.js");
const PriorityQueueFrontier = require("./restaurant.js");

describe("calculator tests", () => {
    /**
     * Create Priority queue and orders for the tests
     * 
     * Runs once at the start of the file
     */
    beforeAll(async () => {
        //Create Priority Queue
        const pq = PriorityQueueFrontier;

        //Fill it with 3 items
        for (let i = 0; i < 3; i++) {
            pq.add(createOrder());
        }
        
    });
    /**
     * Priority Queue throws error when empty
     */
});