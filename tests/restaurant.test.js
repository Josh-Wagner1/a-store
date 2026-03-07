const { createClient, createOrder } = require("./fakerFactory.js");
const PriorityQueueFrontier = require("./restaurant.js");

let pq;
let id1;
let id2;
let id3;
let validNew;
let validOld;
let validOlder;
let invalidOrder;

describe("Priority queue tests", () => {
    /**
     * Create Priority queue and orders for the tests
     */
    beforeAll(async () => {
        // Create 3 order ids
        id1 = (await createOrder()).id;
        id2 = (await createOrder()).id;
        id3 = (await createOrder()).id;

        // Create 3 valid dated orders
        validNew = await createOrder({
            id: id1,
            time: new Date('2026-03-07T14:30:00.000Z')
        });

        validOld = await createOrder({
            id: id2,
            time: new Date('2026-02-07T14:30:00.000Z')
        });

        validOlder = await createOrder({
            id: id3,
            time: new Date('2026-01-07T14:30:00.000Z')
        });

        //Create invalid order
        invalidOrder = await createOrder({
            id: null, 
            clientId: null, 
            numItems: null, 
            total: null, 
            time: null
        });
        
    });
    
    /**
     * Resets queue after each test
     */
    beforeEach(() => {
        // Create priority queue frontier
        pq = PriorityQueueFrontier;
        pq.frontier = [];
    });

    /**
     * Priority Queue throws error when importing incomplete data
     */
    it("should prevent adding an invalid order", async () => {
        return expect(async () => await pq1.add(invalidOrder)).rejects;
    });

    /**
     * Old orders are prioritised before new ones
     */
    it("should place older order first", async () => {
        // Add orders
        pq.add(validNew);
        pq.add(validOld);

        // Check ids
        expect(pq.frontier[0].id).toBe(id2);
        expect(pq.frontier[1].id).toBe(id1);

        //Verify by removing
        const firstOut = pq.remove();
        expect(firstOut.id).toBe(id2);
    });

    /**
     * Orders are prioritised in the right order
     */
    it("should place older order first", async () => {
        // Add orders
        pq.add(validNew);
        pq.add(validOlder);
        pq.add(validOld);

        // Check ids
        expect(pq.frontier[0].id).toBe(id3);
        expect(pq.frontier[1].id).toBe(id2);
        expect(pq.frontier[2].id).toBe(id1);


    });

    /**
     * Priority Queue throws error when empty
     */
    it("should prevent removing an order from an empty queue", async () => {
        return expect(async () => await pq1.remove()).rejects;
    });

    /**
     * Orders are removed in the right order
     */
    it("should remove orders from highest > lowest priority", async () => {
        // Add orders
        pq.add(validNew);
        pq.add(validOld);
        pq.add(validOlder);

        // Removing orders
        const firstOut = pq.remove();
        expect(firstOut.id).toBe(id3);
        const secondOut = pq.remove();
        expect(secondOut.id).toBe(id2);
        const thirdOut = pq.remove();
        expect(thirdOut.id).toBe(id1);
    });

    /**
     * Determines that the order is in the queue
     */

    it("should detect that the order is in the queue", async () => {
        // Add orders
        pq.add(validNew);
        pq.add(validOld);

        // Retrieves the right order
        expect(pq.contains_state(id2)).toBe(true);
        expect(pq.contains_state(id3)).toBe(false);
        expect(pq.contains_state(1234)).toBe(false);
        expect(pq.contains_state(null)).toBe(false);
    });
});