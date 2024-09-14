import { expect, it } from "@rbxts/jest-globals";
import equals from "./equals";

it("should return true if the arrays are equal", () => {
	expect(equals([1, 2, 3], [1, 2, 3])).toBe(true);
});

it("should return false if the arrays are not equal", () => {
	expect(equals([1, 2, 3], [1, 2, 3, 4])).toBe(false);
});

it("should return false for nested arrays", () => {
	expect(equals([1, 2, [3, 4]], [1, 2, [3, 4]])).toBe(false);
});
