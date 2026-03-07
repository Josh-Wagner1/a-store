import { Client } from "./client.js";
import { Order } from "./order.js";
import { faker } from "@faker-js/faker";

/**
 * Fake client
*/
function createClient(vals = {}) {
    const defaults = {
        id: faker.string.uuid(),
        username: faker.internet.displayName(),
        phone: faker.phone.number(),
        email: faker.internet.email({
            provider: "example.com"
        }),
        registeredAt: faker.date.past()
    };

    return new Client ({ ...defaults, ...vals });
};

/**
 * Fake order
*/
function createOrder(vals = {}) { 
    const defaults = {
        id: faker.string.uuid(), 
        clientId: faker.string.uuid(), 
        numItems: faker.number.int({min: 1, max:10}), 
        total: faker.number.float({min: 5, max: 100, precision: 0.01}), 
        time: faker.date.recent()
    };

    return new Order ({ ...defaults, ...vals});
};

export { createClient, createOrder };