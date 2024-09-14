import { expect, it } from "@rbxts/jest-globals";
import has from "./has";

it("should check if a value is in a set", () => {
	const set = new Set(["hello"]);

	expect(has(set, "hello")).toBe(true);
	expect(has(set, "world")).toBe(false);
});

it("should filter out nils varargs", () => {
	const set = new Set(["hello"]);

	expect(has(set, undefined, "hello", undefined)).toBe(true);
	expect(has(set, undefined, "world", undefined)).toBe(false);
});
