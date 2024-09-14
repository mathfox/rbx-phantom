import { expect, it } from "@rbxts/jest-globals";
import isSubset from "./isSubset";

it("should check if a set is a subset of another set", () => {
	const set = new Set(["hello", "world"]);
	const otherSet = new Set(["hello"]);

	expect(isSubset(otherSet, set)).toBe(true);
	expect(isSubset(set, otherSet)).toBe(false);
});
