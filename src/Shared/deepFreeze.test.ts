import { expect, it } from "@rbxts/jest-globals";
import deepFreeze from "./deepFreeze";

it("should not modify the original values", () => {
	const array = [1, 2, 3];

	expect(deepFreeze(array)).toBe(array);
});

it("should make given array a readonly", () => {
	const array = [1, 2, 3];

	const frozen = deepFreeze(array);

	expect(frozen).toBe(array);

	expect(() => {
		(frozen as Array<number>)[0] = 4;
	}).toThrow();
});

it("should work for nested arrays", () => {
	const array = [1, 2, [3, 4]];

	const frozen = deepFreeze(array);

	expect(frozen).toBe(array);

	expect(() => {
		(frozen as Array<number>)[0] = 4;
	}).toThrow();

	expect(() => {
		(frozen as Array<Array<number>>)[3][1] = 5;
	}).toThrow();
});
