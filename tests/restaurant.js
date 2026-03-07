// Old python stack algorithm converted into JS
class StackFrontier {
    
    constructor() {
        this.frontier = [];
    }
    
    add(order) {
        this.frontier.push(order);
        return this.frontier;
    }

    contains_state(orderId) {
        return this.frontier.some(node => node.id === orderId);
    }

    remove() {
        if (this.frontier.length === 0) {
            throw new Error("There are no orders!");
        }
        return this.frontier.pop();
    }
}

// Old python priority queue algorithm converted into JS
class PriorityQueueFrontier extends StackFrontier {
    add(newOrder) {
        // Checks and throws error if any of the values are empty
        const hasEmptyValue = Object.values(newOrder).some(value => 
            value === null || value === undefined || value === ""
        );

        if (hasEmptyValue) {
            throw new Error("Order details are not complete!");
        }
        
        // Find the correct spot based on time poroperty
        for (let i = 0; i < this.frontier.length; i++) {
            const currentOrder = this.frontier[i];

            // Sort based on time waiting
            if (newOrder.time < currentOrder.time) {
                this.frontier.splice(i, 0, newOrder);
                return this.frontier;
            }
        }

        // If it's the newest order push it to the end
        this.frontier.push(newOrder);
        return this.frontier;
    }

    remove() {
        if (this.frontier.length === 0) {
            throw new Error("There are no orders!");
        }

        return this.frontier.shift();
    }
}

module.exports = new PriorityQueueFrontier();