import { expect, it } from "@rbxts/jest-globals";
import at from "./at";

it("should return the value at the given index", () => {
	const array = [1, 2, 3];

	expect(at(array, 0)).toBe(1);
	expect(at(array, 1)).toBe(2);
	expect(at(array, 2)).toBe(3);
});

it("should return nil if the index is out of bounds", () => {
	const array = [1, 2, 3];

	expect(at(array, 3)).toBeUndefined();
});

it("should return from the end if the index is negative ", () => {
	const array = [1, 2, 3];

	expect(at(array, -1)).toBe(3);
	expect(at(array, -2)).toBe(2);
	expect(at(array, -3)).toBe(1);
});
