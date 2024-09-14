import { expect, it } from "@rbxts/jest-globals";
import pop from "./pop";

it("should remove the last element of the given array", () => {
	expect(pop([1, 2, 3])).toEqual([1, 2]);
});

it("should pop multiple elements from the array", () => {
	expect(pop([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 3]);
});
