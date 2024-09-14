import { expect, it } from "@rbxts/jest-globals";
import find from "./find";

it("should return the first element that matches the given value", () => {
	const array = [1, 2, 3];

	expect(find(array, 2)).toBe(1);
});

it("should return nil if no element matches the given value", () => {
	const array = [1, 2, 3];

	expect(find(array, 5)).toBeUndefined();
});

it("should return the first element that matches, given a starting index", () => {
	const array = [1, 2, 3];

	expect(find(array, 3, 1)).toBe(2);
});

it("should return nil if no element matches, given a starting index", () => {
	const array = [1, 2, 3];

	expect(find(array, 2, 2)).toBeUndefined();
});

it("should accept a negative starting index", () => {
	const array = [1, 2, 3];

	expect(find(array, 2, -2)).toBe(1);
});
