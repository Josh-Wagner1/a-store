// Old python stack algorithm converted into JS
class StackFrontier {
    constructor() {
        this.frontier = [];
    }
    
    add(order) {
        this.frontier.push(order);
    }

    contains_state(state) {
        return this.frontier.some(node => node.state === state);
    }

    empty() {
        return this.frontier.length === 0;
    }

    remove() {
        if (this.empty()) {
            return Promise.reject(new Error("There are no orders"));
        } else {
            const node = this.frontier[this.frontier.length - 1];
            this.frontier = this.frontier.slice(0, -1);
            return node;
        }
    }
}

// Old python priority queue algorithm converted into JS
class PriorityQueueFrontier extends StackFrontier {
    add(newOrder) {
        for (let i = 0; i < this.frontier.length; i++) {
            const [priority, snode] = this.frontier[i];

            if (newOrder[0] < priority) {
                this.frontier.splice(i, 0, newItem);
                return;
            }
        }

        // Only triggers if new order goes at the end
        this.frontier.push(newOrder);
    }

    contains_state(state) {
        return this.frontier.some(node => node[1].state === state);
    }

    remove() {
        if (this.empty()) {
            return Promise.reject(new Error("There are no orders"));
        } else {
            const node = this.frontier[0];
            this.frontier = this.frontier.slice(1);
            return node;
        }
    }
}

module.exports = new PriorityQueueFrontier();