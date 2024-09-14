import { expect, it } from "@rbxts/jest-globals";
import every from "./every";

it("should return true if all elements match the predicate", () => {
	expect(every([1, 2, 3], (value) => math.floor(value) === value)).toBe(true);
});

it("should return false if any elements do not match the predicate", () => {
	expect(every([1, 2, 3], (value) => value % 2 === 0)).toBe(false);
});
