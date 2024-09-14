import { expect, it } from "@rbxts/jest-globals";
import symmetricDifference from "./symmetricDifference";

it("should return the symmetric difference between two sets", () => {
	const set = new Set(["hello", "world"]);
	const otherSet = new Set(["world", "panda", "cat"]);

	const newSet = symmetricDifference(set, otherSet);

	expect(newSet).toStrictEqual(new Set(["hello", "panda", "cat"]));
});

it("should ignore nils in varargs", () => {
	const set = new Set(["hello", "world"]);
	const otherSet = new Set(["world", "panda", "cat"]);

	const newSet = symmetricDifference(undefined, undefined, set, undefined, undefined, otherSet, undefined, undefined);

	expect(newSet).toStrictEqual(new Set(["hello", "panda", "cat"]));
});

it("should work with multiple sets provided", () => {
	const set = new Set(["hello", "world"]);
	const otherSet = new Set(["world", "panda", "cat"]);
	const anotherSet = new Set(["panda"]);

	const newSet = symmetricDifference(set, otherSet, anotherSet);

	expect(newSet).toStrictEqual(new Set(["hello", "cat"]));
});
