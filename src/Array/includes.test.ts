import { expect, it } from "@rbxts/jest-globals";
import includes from "./includes";

it("should return true if the given array includes the given value", () => {
	const array = [1, 2, 3];

	expect(includes(array, 2)).toBe(true);
});
