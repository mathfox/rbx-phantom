import { expect, it } from "@rbxts/jest-globals";
import deepEquals from "./deepEquals";

it("should return true if the arrays are equal", () => {
	const array_1 = [1, 2, 3];
	const array_2 = [1, 2, 3];

	expect(deepEquals(array_1, array_2)).toBe(true);
});

it("should return false if the arrays are not equal", () => {
	const array_1 = [1, 2, 3];
	const array_2 = [1, 2, 4];

	expect(deepEquals(array_1, array_2)).toBe(false);
});

it("should return true if nested arrays are equal", () => {
	const array_1 = [1, 2, [3, 4]];
	const array_2 = [1, 2, [3, 4]];

	expect(deepEquals(array_1, array_2)).toBe(true);
});
