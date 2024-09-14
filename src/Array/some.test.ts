import { expect, it } from "@rbxts/jest-globals";
import some from "./some";

it("should return true if the given predicate returns true for any element", () => {
	expect(some([1, 2, 3], (value) => value === 2)).toBe(true);
});

it("should return false if the given predicate returns false for all elements", () => {
	expect(some([1, 2, 3], (value) => value === 4)).toBe(false);
});
