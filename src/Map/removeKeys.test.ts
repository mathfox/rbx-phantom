import { expect, it } from "@rbxts/jest-globals";
import removeKeys from "./removeKeys";

it("should return a new map with the given keys removed", () => {
	const map = new Map([
		["hello", "roblox"],
		["goodbye", "world"],
	]);

	expect(removeKeys(map, "hello")).toEqual({
		goodbye: "world",
	});
});
