import { expect, it } from "@rbxts/jest-globals";
import map from "./map";

it("should return a map where entries are the result of the mapper function", () => {
	const value = new Map([
		["hello", "roblox"],
		["goodbye", "world"],
	]);

	expect(map(value, (value) => `${value}!`)).toEqual({
		hello: "roblox!",
		goodbye: "world!",
	});
});
