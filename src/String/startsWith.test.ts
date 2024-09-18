import { expect, it } from "@rbxts/jest-globals";
import startsWith from "./startsWith";

it("should return true if the string starts with searchString", () => {
	expect(startsWith("Saturday night plans", "Sat")).toBe(true);

	expect(startsWith("To be, or not to be, that is the question.", "To be")).toBe(true);
	expect(startsWith("To be, or not to be, that is the question.", "not to be", 10)).toBe(true);
});

it("should return false if the string does not start with searchString", () => {
	expect(startsWith("Saturday night plans", "Sat", 3)).toBe(false);

	expect(startsWith("To be, or not to be, that is the question.", "not to be")).toBe(false);
});
