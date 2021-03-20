/* const sum = require('./sum');
const sub = require('./sub');
const mult = require('./mult');
const div = require('./div');

test("Soma de 2 + 2 é igual a 4", () => {
    expect(sum(2, 2)).toBe(4);
});

test("Subtração de 2 - 2 é igual a 0", () => {
    expect(sub(2, 2)).toBe(0);
});

test("Multiplicação de 2 * 2 é igual a 4", () => {
    expect(mult(2, 2)).toBe(4);
});

test("Divisão de 2 / 2 é igual a 1", () => {
    expect(div(2, 2)).toBe(1);
}); */


const { sum, sub, mult, div } = require("../math");

describe("Cálculos", () => {
    it("Soma de 2 + 2 = 4", () => {
        const res = sum(2, 2);
        expect(res).toBe(4);
    });

    it("Subtração de 2 - 2 = 0", () => {
        const res = sub(2, 2);
        expect(res).toBe(0);
    });

    it("Multiplicação de 2 * 2 = 4", () => {
        const res = mult(2, 2);
        expect(res).toBe(4);
    });

    it("Divisão de 2 / 2 = 1", () => {
        const res = div(2, 2);
        expect(res).toBe(1);
    });
});