import { expect, it } from "@rbxts/jest-globals";
import concat from "./concat";

it("should join multiple arrays together into a single array", () => {
	const array = concat([1, 2, 3], [4, 5, 6]);

	expect(array).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

it("should join arrays and regular values", () => {
	expect(concat([1, 2, 3], 4, 5)).toStrictEqual([1, 2, 3, 4, 5]);
});

it("should filter out the nils", () => {
	expect(concat([1, 2], 3, undefined, 4)).toStrictEqual([1, 2, 3, 4]);
});
