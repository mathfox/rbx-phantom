import { expect, it } from "@rbxts/jest-globals";
import merge from "./merge";
import None from "../None";

it("should combine two or more maps, where the last value overrides previous", () => {
	const map_1 = new Map([
		["hello", "roblox"],
		["goodbye", "world"],
	]);
	const map_2 = new Map([["hello_2", "roblox"]]);

	expect(merge(map_1, map_2)).toEqual({
		hello: "roblox",
		goodbye: "world",
		hello_2: "roblox",
	});
});

it("should ignore nils in varargs", () => {
	const map_1 = new Map([
		["hello", "roblox"],
		["goodbye", "world"],
	]);
	const map_2 = new Map([["hello_2", "roblox"]]);

	expect(merge(undefined, undefined, map_1, undefined, undefined, map_2, undefined, undefined)).toEqual({
		hello: "roblox",
		goodbye: "world",
		hello_2: "roblox",
	});
});

it("should remove values set to None", () => {
	const map_1 = new Map([
		["hello", "roblox"],
		["goodbye", "world"],
	]);
	const map_2 = new Map([["hello", None]]);

	expect(merge(map_1 as Map<unknown, unknown>, map_2)).toEqual({
		goodbye: "world",
	});
});
