import { expect, it } from "@rbxts/jest-globals";
import slice from "./slice";

it("should return a slice of the given array", () => {
	expect(slice([1, 2, 3], 0, 1)).toEqual([1]);
});

it("should return a slice of the given array with a negative start index", () => {
	expect(slice([1, 2, 3], -2, 2)).toEqual([2]);
});

it("should return a slice of the given array with a negative end index", () => {
	expect(slice([1, 2, 3, 4, 5], 0, -1)).toEqual([1, 2, 3, 4]);
});

it("should return a slice of the given array with a negative start and end index", () => {
	expect(slice([1, 2, 3, 4, 5], -2, -1)).toEqual([4]);
});
