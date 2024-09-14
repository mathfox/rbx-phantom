import { expect, it } from "@rbxts/jest-globals";
import findWhereLast from "./findWhereLast";

it("should return the last element that matches the predicate", () => {
	const array = [1, 2, 3, 4, 5];

	expect(findWhereLast(array, (value) => value % 2 === 0)).toBe(3);
});

it("should return nil if no element matches the predicate", () => {
	const array = [1, 2, 3, 4, 5];

	expect(findWhereLast(array, (value) => value === 6)).toBeUndefined();
});

it("should return the last element that matches the predicate, given a starting index", () => {
	const array = [1, 2, 3, 4, 5];

	expect(findWhereLast(array, (value) => value % 2 === 0, 1)).toBe(1);
});

it("should return nil if no element matches the predicate, given a starting index", () => {
	const array = [1, 2, 3, 4, 5];

	expect(findWhereLast(array, (value) => value === 4, 1)).toBeUndefined();
});
