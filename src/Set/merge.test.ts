import { expect, it } from "@rbxts/jest-globals";
import merge from "./merge";

it("should merge two sets", () => {
	const set = new Set(["hello", "world"]);
	const otherSet = new Set(["panda", "cat"]);

	const newSet = merge(set, otherSet);

	expect(newSet).toStrictEqual(new Set(["hello", "world", "panda", "cat"]));
});

it("should ignore nils in varargs", () => {
	const set = new Set(["hello", "world"]);
	const otherSet = new Set(["panda", "cat"]);

	const newSet = merge(undefined, undefined, set, undefined, undefined, otherSet, undefined, undefined);

	expect(newSet).toStrictEqual(new Set(["hello", "world", "panda", "cat"]));
});
