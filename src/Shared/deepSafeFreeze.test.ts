import { expect, it } from "@rbxts/jest-globals";
import deepSafeFreeze from "./deepSafeFreeze";

it("should safely freeze the provided table", () => {
	const array = table.freeze([1, 2, 3]);

	expect(() => {
		deepSafeFreeze(array);

		expect(deepSafeFreeze(array)).toBe(array);
	}).never.toThrow();
});
