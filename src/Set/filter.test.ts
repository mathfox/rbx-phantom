import { expect, it } from "@rbxts/jest-globals";
import filter from "./filter";

it("should filtet a set", () => {
	const set = new Set(["hello", "world"]);

	const newSet = filter(set, (value) => value !== "hello");

	expect(newSet.size()).toBe(1);
	expect(newSet.has("world")).toBe(true);
});

it("should not modify the original set", () => {
	const set = new Set(["hello", "world"]);

	const newSet = filter(set, () => true);

	expect(newSet).toStrictEqual(set);
	expect(newSet).never.toBe(set);
});
