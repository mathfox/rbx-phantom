import { expect, it } from "@rbxts/jest-globals";
import strictEqual from "./strictEqual";

it("should return `true` when no or a single value are provided", () => {
	expect(strictEqual()).toBe(true);

	expect(strictEqual(3)).toBe(true);

	expect(strictEqual("test")).toBe(true);

	expect(strictEqual({})).toBe(true);
	expect(strictEqual(new Map())).toBe(true);
});

it("should return when values are strict equal", () => {
	expect(strictEqual(3, 3)).toBe(true);

	expect(strictEqual("value", "value", "value")).toBe(true);

	expect(strictEqual({}, {})).toBe(false);
});
