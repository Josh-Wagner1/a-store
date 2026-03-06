function add(a, b) {
    // Throws error if a or b don't exist
    if(!a || !b) {
        return Promise.reject(new Error("a or b don't exist"));
    }

    // Throws error if a or b are invalid
    if([a,b].some(v => typeof v !== "number")) {
        return Promise.reject(new Error("a and b need to be numbers"));
    }
    
    return a + b;
}

module.exports = add;
