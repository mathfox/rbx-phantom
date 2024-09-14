import { expect, it } from "@rbxts/jest-globals";
import toSet from "./toSet";

it("should return a set", () => {
	expect(toSet([1, 2, 3])).toEqual(new Set([1, 2, 3]));
});

it("should return a set of strings", () => {
	expect(toSet(["a", "b", "b", "c"])).toEqual(new Set(["a", "b", "c"]));
});
