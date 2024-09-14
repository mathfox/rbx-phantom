import { expect, it } from "@rbxts/jest-globals";
import entries from "./entries";

it("should return a list of entries as key-value pairs", () => {
	const map = new Map([
		["hello", "roblox"],
		["goodbye", "world"],
	]);

	const value = entries(map);

	expect(value).toStrictEqual([
		["hello", "roblox"],
		["goodbye", "world"],
	]);
});
