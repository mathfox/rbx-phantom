import { expect, it } from "@rbxts/jest-globals";
import findLast from "./findLast";

it("should return the first element that matches the given value", () => {
	const array = [1, 2, 3];

	expect(findLast(array, 2)).toBe(1);
});

it("should return nil if no element matches the given value", () => {
	const array = [1, 2, 3];

	expect(findLast(array, 5)).toBeUndefined();
});

it("should return the first element that matches, given a starting index", () => {
	const array = [1, 2, 3];

	expect(findLast(array, 1, 1)).toBe(0);
});

it("should return nil if no element matches, given a starting index", () => {
	const array = [1, 2, 3];

	expect(findLast(array, 3, 1)).toBeUndefined();
});

it("should accept a negative starting index", () => {
	const array = [1, 2, 3];

	expect(findLast(array, 2, -2)).toBe(1);
});
