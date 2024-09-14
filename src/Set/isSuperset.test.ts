import { expect, it } from "@rbxts/jest-globals";
import isSuperset from "./isSuperset";

it("should check if a set is a superset of another set", () => {
	const set = new Set(["hello", "world"]);
	const otherSet = new Set(["hello"]);

	expect(isSuperset(set, otherSet)).toBe(true);
	expect(isSuperset(otherSet, set)).toBe(false);
});
