import { expect, it } from "@rbxts/jest-globals";
import reduce from "./reduce";

it("should reduce the given array to a single value", () => {
	expect(reduce([1, 2, 3], (acc, value) => acc + value, 0)).toBe(6);
});

it("should reduce the given array to a single value, using the first element as the initial value", () => {
	expect(reduce([1, 2, 3], (acc, value) => acc - value, undefined as unknown as number)).toBe(-4);
});

it("should reduce the array, even if the array has a falsy initial value", () => {
	expect(reduce([true, false, false], (acc, value) => acc || value, false)).toBe(true);
});
