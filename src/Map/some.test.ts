import { expect, it } from "@rbxts/jest-globals";
import some from "./some";

it("should return true if the predicate returns true for any of the values", () => {
	const map = new Map([
		["hello", "roblox"],
		["goodbye", "world"],
	]);

	expect(some(map, (value) => value === "roblox")).toBe(true);
});

it("should return false if the predicate returns false for all of the values", () => {
	const map = new Map([
		["hello", "roblox"],
		["goodbye", "world"],
	]);

	expect(some(map, (value) => value === "hello")).toBe(false);
});
