import { expect, it } from "@rbxts/jest-globals";
import add from "./add";

it("should add values to a set", () => {
	const set = new Set(["hello"]);
	add(set, "world");

	expect(set.has("hello")).toBe(true);
	expect(set.has("world")).toBe(true);
});

it("should work when no values are provided", () => {
	const set = new Set();

	add(set);

	expect(set).toBe(set);
	expect(set.size()).toBe(0);
});

it("should modify the original set", () => {
	const set = new Set();

	expect(add(set, 1, 2, 3)).toBe(set);
});
