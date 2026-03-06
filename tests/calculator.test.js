const calculator = require("./calculator.js");

describe("calculator tests", () => {
    describe("adding numbers", () => {
        /**
         * Numbers need to exist
         */
        it("should prevent using empty values", async () => {
            return expect(async () => await calculator.add(null, null)).rejects;
        });

        /**
         * Numbers need to be valid
         */
        it("should prevent using invalid values", async () => {
            return expect(async () => await calculator.add("abc", "123")).rejects;
        });

        /**
         * Correct sum needs to be returned
         */
        it("should produce the correct result", async () => {
            expect(calculator(1, 2)).toEqual(3);
            expect(calculator(99, 1)).toEqual(100);
        });

    });
});