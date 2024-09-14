import { expect, it } from "@rbxts/jest-globals";
import unshift from "./unshift";

it("should return a new array with the given value at the beginning", () => {
	expect(unshift([1, 2, 3], 4)).toEqual([4, 1, 2, 3]);
});

it("should prepend multiple values to the array", () => {
	expect(unshift([1, 2, 3], 4, 5, 6)).toEqual([4, 5, 6, 1, 2, 3]);
});
