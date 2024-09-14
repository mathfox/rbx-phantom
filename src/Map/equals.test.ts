import { expect, it } from "@rbxts/jest-globals";
import equals from "./equals";

it("should return true if the maps are equal", () => {
	expect(equals(new Map(), new Map(), new Map())).toBe(true);

	expect(
		equals(
			new Map([
				["hello", "world"],
				["goodbye", "world"],
			]),
			new Map([
				["hello", "world"],
				["goodbye", "world"],
			]),
			new Map([
				["hello", "world"],
				["goodbye", "world"],
			]),
		),
	).toBe(true);
});

it("should return false if the maps are not equal", () => {
	expect(
		equals(
			new Map([
				["hello", "world"],
				["goodbye", "world"],
			]),
			new Map([
				["hello", "world"],
				["goodbye", "world"],
			]),
			new Map([
				["hello", "world"],
				["goodbye", "world_2"],
			]),
		),
	).toBe(false);
});

it("should return false for nested maps", () => {
	expect(
		equals(
			new Map([
				["hello", new Map()],
				["goodbye", new Map()],
			]),

			new Map([
				["hello", new Map()],
				["goodbye", new Map()],
			]),
			new Map([
				["hello", new Map()],
				["goodbye", new Map()],
			]),
		),
	).toBe(false);
});
