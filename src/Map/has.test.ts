import { expect, it } from "@rbxts/jest-globals";
import has from "./has";

it("should return true if the map has the given keys", () => {
	const map = new Map([["hello", "world"]]);

	expect(has(map, "hello")).toBe(true);
});

it("should return false if the map does not have the given key", () => {
	const map = new Map([["hello", "world"]]);

	expect(has(map, "world")).toBe(false);
});

it("should ignore nils in varargs", () => {
	const map = new Map([["hello", "world"]]);

	expect(has(map, undefined, undefined, "hello", undefined, undefined)).toBe(true);
});
