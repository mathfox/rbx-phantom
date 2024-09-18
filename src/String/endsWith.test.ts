import { expect, it } from "@rbxts/jest-globals";
import endsWith from "./endsWith";

it("should return true when the string ends with the searchString", () => {
	expect(endsWith("To be, or not to be, that is the question.", "question.")).toBe(true);

	const str1 = "Cats are the best!";

	expect(endsWith(str1, "best!")).toBe(true);

	expect(endsWith(str1, "best", 17)).toBe(true);
});

it("should return false when string does not end with searchString", () => {
	const str = "To be, or not to be, that is the question.";

	expect(endsWith(str, "to be")).toBe(false);
});

it("should support endPosition", () => {
	const str = "To be, or not to be, that is the question.";

	expect(endsWith(str, "to be", 19)).toBe(true);
});

it("should not work with Luau pattern matching", () => {
	const str = "Fanta";

	expect(endsWith(str, "%s+$")).toBe(false);
});
