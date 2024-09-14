import { expect, it } from "@rbxts/jest-globals";
import findWhere from "./findWhere";

it("should return the first element in the array that matches the given predicatel", () => {
	const array = [1, 2, 3];

	expect(findWhere(array, (value) => value === 2)).toBe(1);
});

it("should return nil if no element matches the given predicate", () => {
	const array = [1, 2, 3];

	expect(findWhere(array, (value) => value === 4)).toBeUndefined();
});

it("should return the first element in the array that matches the given predicate, given a starting index", () => {
	const array = [1, 2, 3];

	expect(findWhere(array, (value) => value === 3, 1)).toBe(2);
});

it("should return nil if no element matches the given predicate, given a starting index", () => {
	const array = [1, 2, 3];

	expect(findWhere(array, (value) => value === 1, 1)).toBeUndefined();
});
