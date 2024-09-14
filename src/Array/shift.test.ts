import { expect, it } from "@rbxts/jest-globals";
import shift from "./shift";

it("should remove the first item from the array", () => {
	expect(shift([1, 2, 3])).toEqual([2, 3]);
});

it("should shift given a number of items to remove", () => {
	expect(shift([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
});
