import { expect, it } from "@rbxts/jest-globals";
import difference from "./difference";

it("should return the difference between two sets", () => {
	const set = new Set(["hello", "world"]);
	const otherSet = new Set(["panda", "cat"]);

	const newSet = difference(set, otherSet);

	expect(newSet.size()).toBe(2);
	expect(newSet.has("hello")).toBe(true);
	expect(newSet.has("world")).toBe(true);
});

it("should accept vararg nil values", () => {
	const set = new Set(["hello", "world"]);

	expect(difference(set, undefined, undefined)).toStrictEqual(set);
});

it("should accept multiple sets", () => {
	const set = new Set(["hello", "world"]);
	const otherSet = new Set(["panda", "cat"]);
	const anotherSet = new Set(["hello", "panda"]);

	const newSet = difference(set, otherSet, anotherSet);

	expect(newSet.size()).toBe(1);
	expect(newSet.has("world")).toBe(true);
});
