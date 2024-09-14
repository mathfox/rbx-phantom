import { expect, it } from "@rbxts/jest-globals";
import deepEquals from "./deepEquals";

it("should return true if the maps are equal", () => {
	expect(
		deepEquals(
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
		deepEquals(
			new Map([
				["hello", "world"],
				["goodbye", "world_2"],
			]),
			new Map([
				["hello", "world"],
				["goodbye", "world_1"],
			]),
		),
	).toBe(false);
});

it("should return true for nested maps", () => {
	expect(
		deepEquals(
			new Map([
				["hello", new Map([["hello_2", "world"]])],
				["goodbye", new Map([["hello_2", "world"]])],
			]),
			new Map([
				["hello", new Map([["hello_2", "world"]])],
				["goodbye", new Map([["hello_2", "world"]])],
			]),
		),
	).toBe(true);
});
