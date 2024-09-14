import { expect, it } from "@rbxts/jest-globals";
import every from "./every";

it("should return true if all elements match the predicate", () => {
	expect(
		every(
			new Map([
				["hello", "world"],
				["goodbye", "world"],
			]),
			(value) => value === "world",
		),
	).toBe(true);
});

it("should return false if any elements do not match the predicate", () => {
	expect(
		every(
			new Map([
				["hello", "world"],
				["goodbye", "world"],
			]),
			(value) => value === "hello",
		),
	).toBe(false);
});
