import { expect, it } from "@rbxts/jest-globals";
import deepClone from "./deepClone";

it("should return a copy of the given array", () => {
	const array = [1, 2, 3];

	const clone = deepClone(array);

	expect(clone).never.toBe(array);
	expect(clone).toStrictEqual(array);
});

it("should copy nested arrays", () => {
	const nestedArray = [1, 2, [3, 4]];

	const nestedClone = deepClone(nestedArray);

	expect(nestedClone).never.toBe(nestedArray);
	expect(nestedClone).toStrictEqual(nestedArray);
});

it("should maintain the metatable reference when cloning", () => {
	const metatable = {};
	const array = setmetatable([1, 2, 3], metatable);

	const clone = deepClone(array);

	expect(getmetatable(array)).toBe(metatable);
	expect(getmetatable(clone)).toBe(metatable);
});
