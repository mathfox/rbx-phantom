import { expect, it } from "@rbxts/jest-globals";
import fromArrays from "./fromArrays";

it("should return a map composed of the given keys and values", () => {
	expect(fromArrays(["hello", "goodbye"], ["roblox", "world"])).toEqual({
		hello: "roblox",
		goodbye: "world",
	});
});
