import { expect, it } from "@rbxts/jest-globals";
import fromEntries from "./fromEntries";

it("should create a new map from the given key-value pairs", () => {
	expect(
		fromEntries([
			["hello", "roblox"],
			["goodbye", "world"],
		]),
	).toEqual({
		hello: "roblox",
		goodbye: "world",
	});
});
