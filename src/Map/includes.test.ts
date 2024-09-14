import { expect, it } from "@rbxts/jest-globals";
import includes from "./includes";

it("should return true if the map includes the given value", () => {
	const map = new Map([
		["hello", "world"],
		["goodbye", "world"],
	]);

	expect(includes(map, "world")).toBe(true);
});

it("should return false if the map does not include the given value", () => {
	const map = new Map([
		["hello", "world"],
		["goodbye", "world"],
	]);

	expect(includes(map, "hello")).toBe(false);
});

it("should ignore nils in varargs", () => {
	const map = new Map([
		["hello", "world"],
		["goodbye", "roblox"],
	]);

	expect(includes(map, undefined, undefined, "world", undefined, undefined, "roblox", undefined, undefined)).toBe(true);
});
