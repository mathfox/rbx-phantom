import { expect, it } from "@rbxts/jest-globals";
import map from "./map";

it("should return an array where values are the result of the mapper function", () => {
	expect(map([1, 2, 3], (value) => value * 2)).toEqual([2, 4, 6]);
});
