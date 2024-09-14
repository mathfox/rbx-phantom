import { expect, it } from "@rbxts/jest-globals";
import filter from "./filter";

it("should return a copy of the given array with only the elements that match the predicate", () => {
	const array = [1, 2, 3];

	expect(filter(array, (value) => value % 2 === 0)).toEqual([2]);
});
