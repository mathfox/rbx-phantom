import { expect, it } from "@rbxts/jest-globals";
import flatten from "./flatten";

it("should return a flattened array", () => {
	expect(flatten([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
});

it("should not flatten nested arrays if depth = 0", () => {
	expect(flatten([1, 2, [3, 4]], 0)).toEqual([1, 2, [3, 4]]);
});

it("should flatten as deeply as possible", () => {
	const array = [1, 2, [3, 4, [5, 6, [7, 8]]]];

	expect(flatten(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
